import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription, timer } from "rxjs";

@Component({
  selector: 'options-config',
  templateUrl: './options-config.component.html'
})
export class OptionsConfigComponent {

    /**
     * Create the busy adorner
     */
    busy: Subscription;

    test(): void{
        this.busy = timer(5000).subscribe();
    }
}