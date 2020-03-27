// -----------------------------------------------------------------------
// <copyright file="on-refresh.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Interface a component must implement to refresh the main data for easy convenience
// </summary>
// -----------------------------------------------------------------------

export interface OnRefresh {

    /**
     * Refresh the primary data source
     */
    refreshData(): void;
}