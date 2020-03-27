// -----------------------------------------------------------------------
// <copyright file="camera.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the camera component
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { Component } from '@angular/core';
import { timer } from "rxjs";

// Import the base/interfaces class
import { BaseComponent } from "./../base/base.component";

@Component({
  selector: 'cameras',
  templateUrl: './cameras.component.html'
})
export class CamerasComponent extends BaseComponent {

    /**
     * Holds the value if the component is in edit mode
     */
    editMode = false;

    /**
     * Puts the component into edit mode.
     */
    enableEdit(): void {
        this.editMode = true;
    }

    /**
     * Puts the component into edit mode.
     */
    disableEdit(): void {
        this.editMode = false;
    }

    refresh(): void{
        this.busy = timer(500).subscribe();
    }
}
