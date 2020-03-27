import { Component, ViewEncapsulation } from '@angular/core';
import { takeUntil } from "rxjs/operators";

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { StyleService } from '../../services/style.service';
import { BaseComponent } from './../../components/base/base.component';

import { ServiceStatesEnum } from "../../models/enums/service-states.enum";

@Component({
    selector: 'app-theme-picker',
    templateUrl: './theme-picker.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent extends BaseComponent {

    constructor(public styleService: StyleService) {
        super();
        this.installTheme('');
    }

    faSpinner = faSpinner;

    public loading: boolean = false;

    themes = [
        {
            name: 'light-theme',
            isDefault: false,
        },
        {
            name: 'dark-theme',
            isDefault: true,
        },
        {
            name: 'sandstone-theme',
            isDefault: false,
        },
    ];


    ngOnInit(): void {

        // Registered to the change event in the address service for the refresh notification
        this.styleService.onEvent(ServiceStatesEnum.Loaded).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
            this.loading = false;
        });
    }

    installTheme(themeName: string) {
        this.loading = true;

        let theme = this.themes.find(currentTheme => currentTheme.name === themeName);

        if (!theme) {
            theme = this.themes.find(currentTheme => currentTheme.isDefault);
        }

        this.styleService.setStyle('theme', `assets/${theme.name}.css`);
    }
}
