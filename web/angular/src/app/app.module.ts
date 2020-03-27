import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, UrlSerializer } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpLoader } from './shared/loaders/http-loader';
import { environment } from './../environments/environment';

// Import 3rd party libraries
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { TRANSLOCO_CONFIG, TranslocoModule, TranslocoService, TRANSLOCO_LOADER, TranslocoConfig } from '@ngneat/transloco';
import { TooltipModule, PopoverModule, BsDropdownModule  } from 'ngx-bootstrap';
import { NgBusyModule } from "ng-busy";
import { ChartsModule } from 'ng2-charts';

// Import the necessary sections
import { OptionsSection } from './sections/options.section';
import { DashboardSection } from './sections/dashboard.section';

// Import the necessary components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemePickerComponent } from './components/theme/theme-picker.component';

import { ConsoleComponent } from './components/console/console.component';

import { LogComponent } from './components/log/log.component';
import { GroupsComponent } from './components/groups/groups.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CycleComponent } from './components/cycle/cycle.component';
import { MontageComponent } from './components/montage/montage.component';
import { MontageReviewComponent } from './components/montage-review/montage-review.component';
import { AuditComponent } from './components/audit/audit.component';

import { CamerasComponent } from './components/dashboard/cameras.component';
import { StatusComponent } from './components/dashboard/status.component';
import { EventsComponent } from './components/dashboard/events.component';
import { EventSourceComponent } from './components/dashboard/event-source.component';
import { TotalEventsComponent } from './components/dashboard/total-events.component';
import { PerSourceEventsComponent } from './components/dashboard/per-source-events.component';

import { OptionsMenuComponent } from './components/options/options-menu.component';
import { OptionsDisplayComponent } from './components/options/options-display.component';
import { OptionsSystemComponent } from './components/options/options-system.component';
import { OptionsConfigComponent } from './components/options/options-config.component';
import { OptionsServerComponent } from './components/options/options-server.component';
import { OptionsStorageComponent } from './components/options/options-storage.component';
import { OptionsWebComponent } from './components/options/options-web.component';
import { OptionsImagesComponent } from './components/options/options-images.component';
import { OptionsLoggingComponent } from './components/options/options-logging.component';
import { OptionsNetworkComponent } from './components/options/options-network.component';
import { OptionsEmailComponent } from './components/options/options-email.component';
import { OptionsUploadComponent } from './components/options/options-upload.component';
import { OptionsXComponent } from './components/options/options-x.component';
import { OptionsHighComponent } from './components/options/options-high.component';
import { OptionsMediumComponent } from './components/options/options-medium.component';
import { OptionsLowComponent } from './components/options/options-low.component';
import { OptionsUsersComponent } from './components/options/options-users.component';
import { PageNotFoundComponent } from './components/error/page-not-found.component';

// Import the necessary services
import { StyleService } from './services/style.service';
import { EnvironmentService } from './services/environment.service';
import { CameraService } from './services/camera.service';

// Import the necessary utility items
import { LowerCaseUrlSerializer  } from './shared/routing/lower-case-url-serializer';
import { GlobalErrorHandler } from './shared/handlers/global-error-handler';
import { ServerErrorInterceptor } from './shared/interceptors/server-error';
import { HrefDirective } from './shared/directives/href.directive';
import { DefaultBusyComponent } from "./components/adorner/default-busy.component";

// Import the global eventing classes
import { Broadcaster } from "./shared/events/broadcaster";
import { DebugStateEvent } from "./shared/events/debug-state.event";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FooterComponent,
        OptionsSection,
        DashboardSection,
        OptionsMenuComponent,
        OptionsDisplayComponent,
        OptionsSystemComponent,
        OptionsConfigComponent,
        OptionsServerComponent,
        OptionsStorageComponent,
        OptionsWebComponent,
        OptionsImagesComponent,
        OptionsLoggingComponent,
        OptionsNetworkComponent,
        OptionsEmailComponent,
        OptionsUploadComponent,
        OptionsXComponent,
        OptionsHighComponent,
        OptionsMediumComponent,
        OptionsLowComponent,
        OptionsUsersComponent,
        CamerasComponent,
        StatusComponent,
        EventsComponent,
        EventSourceComponent,
        TotalEventsComponent,
        PerSourceEventsComponent,
        LogComponent,
        GroupsComponent,
        FiltersComponent,
        CycleComponent,
        MontageComponent,
        MontageReviewComponent,
        AuditComponent,
        ThemePickerComponent,
        ConsoleComponent,
        PageNotFoundComponent,
        HrefDirective,
        DefaultBusyComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        NgBusyModule.forRoot({ template: DefaultBusyComponent, delay: 250 }),
        TranslocoModule,
        ChartsModule,
        ToastrModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "", component: FooterComponent, outlet: "footer" },
            { path: "dashboard", component: DashboardSection, children: [ 
                { path: "", component: StatusComponent, outlet: "status" },
                { path: "", component: EventsComponent, outlet: "events" },
                { path: "", component: EventSourceComponent, outlet: "event-source" },
                { path: "", component: CamerasComponent, outlet: "cameras" }
            ]},
            { path: "options",  component: OptionsSection, children: [      
                {
                    path: "display",                    
                    children: [
                        { path: "", component: OptionsDisplayComponent, outlet: "details" }
                    ]
                },
                {
                    path: "system",                    
                    children: [
                        { path: "", component: OptionsSystemComponent, outlet: "details" }
                    ]
                },
                {
                    path: "config",                    
                    children: [
                        { path: "", component: OptionsConfigComponent, outlet: "details" }
                    ]
                },
                {
                    path: "server",                    
                    children: [
                        { path: "", component: OptionsServerComponent, outlet: "details" }
                    ]
                },
                {
                    path: "storage",                    
                    children: [
                        { path: "", component: OptionsStorageComponent, outlet: "details" }
                    ]
                },
                {
                    path: "web",                    
                    children: [
                        { path: "", component: OptionsWebComponent, outlet: "details" }
                    ]
                },
                {
                    path: "images",                    
                    children: [
                        { path: "", component: OptionsImagesComponent, outlet: "details" }
                    ]
                },
                {
                    path: "logging",                    
                    children: [
                        { path: "", component: OptionsLoggingComponent, outlet: "details" }
                    ]
                },
                {
                    path: "network",                    
                    children: [
                        { path: "", component: OptionsNetworkComponent, outlet: "details" }
                    ]
                },
                {
                    path: "email",                    
                    children: [
                        { path: "", component: OptionsEmailComponent, outlet: "details" }
                    ]
                },
                {
                    path: "upload",                    
                    children: [
                        { path: "", component: OptionsUploadComponent, outlet: "details" }
                    ]
                },
                {
                    path: "x",                    
                    children: [
                        { path: "", component: OptionsXComponent, outlet: "details" }
                    ]
                },
                {
                    path: "high",                    
                    children: [
                        { path: "", component: OptionsHighComponent, outlet: "details" }
                    ]
                },
                {
                    path: "medium",                    
                    children: [
                        { path: "", component: OptionsMediumComponent, outlet: "details" }
                    ]
                },
                {
                    path: "low",                    
                    children: [
                        { path: "", component: OptionsLowComponent, outlet: "details" }
                    ]
                },
                {
                    path: "users",                    
                    children: [
                        { path: "", component: OptionsUsersComponent, outlet: "details" }
                    ]
                },
                { path: "", component: OptionsMenuComponent, outlet: "menu" },
                { path: "", redirectTo: "display", pathMatch: "full" },
            ]},
            { path: "log", component: LogComponent },
            { path: "groups", component: GroupsComponent },
            { path: "filters", component: FiltersComponent },
            { path: "cycle", component: CycleComponent },
            { path: "montage", component: MontageComponent },
            { path: "montage-review", component: MontageReviewComponent },
            { path: "audit", component: AuditComponent },
            { path: "notifications", component: ConsoleComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers: [
        StyleService,
        EnvironmentService,
        CameraService,
        HttpLoader,
        Broadcaster,
        DebugStateEvent,
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [TranslocoService],
            useFactory: HttpLoader.preloadTranslation
        },
        { provide: TRANSLOCO_LOADER, useClass: HttpLoader },
        {
            provide: TRANSLOCO_CONFIG,
            useValue: {
                prodMode: environment.production,
                reRenderOnLangChange: true,
                availableLangs: ["en"],
                defaultLang: "en",
                fallbackLang: "en"
            } as TranslocoConfig
        },
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        DefaultBusyComponent
    ]
    
})
export class AppModule { }
