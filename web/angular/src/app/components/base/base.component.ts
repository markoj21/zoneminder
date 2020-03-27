// -----------------------------------------------------------------------
// <copyright file="base.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the base component which other components will inherit from
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { OnDestroy } from "@angular/core";
import { UnsubscribeHelper } from "./../../shared/helpers/unsubscribe-helper";
import { Subscription } from "rxjs";

export class BaseComponent extends UnsubscribeHelper implements OnDestroy {

    /**
     * Create the busy adorner
     */
    busy: Subscription;

    /**
     * On destroy event handler
     */
    ngOnDestroy() {

        // Call down to the base
        super.ngOnDestroy();
    }
}
