import { Component } from '@angular/core';
import { timer } from "rxjs";

// Import the base/interfaces class
import { LineChartComponent } from "../base/chart/line-chart.component";

@Component({
  selector: 'total-events',
  templateUrl: './total-events.component.html'
})
export class TotalEventsComponent extends LineChartComponent {
        
    refreshData(): void{
        this.busy = timer(500).subscribe(() => {

            this.lineChartData = [
                { data: [85, 72, 78, 75, 77, 75, 0, 0, 0, 0, 0, 0, 4, 7, 11, 47, 14, 33, 66, 14, 0, 3, 11, 13, 15, 0 ], label: 'Events' },
            ];
            
            this.lineChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
        });
    }
}
