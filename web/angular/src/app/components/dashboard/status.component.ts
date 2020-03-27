import { Component } from '@angular/core';
import { timer } from "rxjs";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Import the base/interfaces class
import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'status',
  templateUrl: './status.component.html'
})
export class StatusComponent extends BaseComponent {

    faEllipsisH = faEllipsisH;

    refresh(): void {
        this.busy = timer(500).subscribe();
    }
}
