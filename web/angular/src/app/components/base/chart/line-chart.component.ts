// -----------------------------------------------------------------------
// <copyright file="line-chart.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the line-chart base component
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { Label, Color } from 'ng2-charts';

// Import the base/interfaces class
import { ChartBaseComponent } from "./chart-base.component";

export abstract class LineChartComponent extends ChartBaseComponent {

    lineChartOptions: ChartOptions = {
        responsive: true,
    };
    lineChartData: ChartDataSets[] = [{ data: [0] }];  
    lineChartLabels: Label[] = [""];    
    lineChartColors: Color[] = [
    {
        borderColor: 'rgba(7,104,159,1)',
        backgroundColor: 'rgba(7,104,159,0.28)',
    }];    
    lineChartLegend = false;
    lineChartPlugins = [];
    lineChartType: ChartType = 'line';
}
