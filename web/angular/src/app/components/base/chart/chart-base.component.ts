// -----------------------------------------------------------------------
// <copyright file="chart-base.component.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the chart base component which other charts will inherit from
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { OnInit } from '@angular/core';

// Import the base/interfaces class
import { BaseComponent } from "../base.component";
import { OnRefresh } from "../on-refresh";
import { Color } from 'ng2-charts';

export abstract class ChartBaseComponent extends BaseComponent implements OnInit, OnRefresh {

    chartColors: Color[] = [
    { 
        backgroundColor:[
            "rgba(255,115,54,0.6)", 
            "rgba(111,200,206,0.6)",
            "rgba(250,255,242,0.6)", 
            "rgba(255,252,196,0.6)", 
            "rgba(185,232,224,0.6)"
        ], 
        borderColor: "rgba(0,0,0,0.3)",
        hoverBorderWidth: 1,
    }];

    /**
     * On initialize event handler
     */
    ngOnInit(): void {
        // Get the data for the component
        this.refreshData();
    }

    abstract refreshData(): void;
}
