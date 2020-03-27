// -----------------------------------------------------------------------
// <copyright file="pie-chart.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the pie-chart base component
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { ChartType, ChartOptions  } from 'chart.js';
import { Label, SingleDataSet, } from 'ng2-charts';

// Import the base/interfaces class
import { ChartBaseComponent } from "./chart-base.component";

export abstract class PieChartComponent extends ChartBaseComponent {

    pieChartOptions: ChartOptions = {
        responsive: true,
    };
    pieChartLabels: Label[] = [];
    pieChartData: SingleDataSet = [];
    pieChartType: ChartType = 'doughnut';
    pieChartLegend = false;
    pieChartPlugins = [];
}
