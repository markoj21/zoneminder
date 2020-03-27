import { Component, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Import the base/interfaces class
import { ChartBaseComponent } from "../base/chart/chart-base.component";

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {

    /**
     * Gets any child components which are tags as a chart so we can refresh them.
     */
    @ViewChildren('chart') charts: QueryList<ChartBaseComponent>;

    faEllipsisH = faEllipsisH;

    showTotal = false;

    total(): void {
        this.showTotal = true;
    }

    source(): void {
        this.showTotal = false;
    }

    refreshData(): void{
        if(this.charts != null && this.charts.length > 0){
            this.charts.forEach(x => x.refreshData());
        }
    }
}
