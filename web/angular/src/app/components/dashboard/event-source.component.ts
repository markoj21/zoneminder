import { Component } from '@angular/core';
import {  timer } from "rxjs";

// Import the base/interfaces class
import { PieChartComponent } from "../base/chart/pie-chart.component";

@Component({
  selector: 'event-source',
  templateUrl: './event-source.component.html'
})
export class EventSourceComponent extends PieChartComponent {

    refreshData(): void{
        this.busy = timer(500).subscribe(() => {
            this.pieChartLabels = ['Monitor-1', 'Monitor-2', 'Monitor-3'];
            this.pieChartData = [30, 50, 20];
        });
    }    
}

export class EventSource {
    labels: string[]
    data: number[];
}
