import { Component } from '@angular/core';
import { timer } from "rxjs";

// Import the base/interfaces class
import { BarChartComponent } from "../base/chart/bar-chart.component";

@Component({
  selector: 'per-source-events',
  templateUrl: './per-source-events.component.html',
})
export class PerSourceEventsComponent extends BarChartComponent {
    
    refreshData(): void{
        this.busy = timer(500).subscribe(() => {

            this.barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

            this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40,], label: 'Monitor-1', stack: 'a' },
            { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40,], label: 'Monitor-2', stack: 'a' },
            { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40,], label: 'Monitor-3', stack: 'a' }
            ];
        });
    }
}
