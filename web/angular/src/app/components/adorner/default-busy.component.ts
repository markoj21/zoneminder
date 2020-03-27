// -----------------------------------------------------------------------
// <copyright file="default-busy.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the loading adorner
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { Component, Inject } from "@angular/core";
import { InstanceConfigHolderService } from "ng-busy";

@Component({
    selector: "default-busy",
    templateUrl: "./default-busy.component.html",
    styleUrls: ["./default-busy.component.scss"]
})
export class DefaultBusyComponent {

    /**
     * Initializes a new instance of the DefaultBusyComponent class.
     * @param instanceConfigHolder
     */
    constructor(@Inject("instanceConfigHolder") private readonly instanceConfigHolder: InstanceConfigHolderService) {
    }
}