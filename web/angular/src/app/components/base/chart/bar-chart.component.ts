// -----------------------------------------------------------------------
// <copyright file="bar-chart.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the bar-chart base component
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { Label } from 'ng2-charts';

// Import the base/interfaces class
import { ChartBaseComponent } from "./chart-base.component";

export abstract class BarChartComponent extends ChartBaseComponent {

    barChartOptions: ChartOptions = {
        responsive: true, 
    };
    barChartLegend = false;
    barChartPlugins = [];    
    barChartLabels: Label[] = [""];
    barChartType: ChartType = 'bar';
    barChartData: ChartDataSets[] = [{ data: [0] }];
}