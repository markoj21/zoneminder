// -----------------------------------------------------------------------
// <copyright file="camera-summary.model.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Camera Summary Model
// </summary>
// -----------------------------------------------------------------------

// Import any enums
import { CameraStateEnum } from './../enums/camera-state.enum';

// Data transfer object definition
export class CameraSummaryModel {

    name: string;

    status: CameraStateEnum;

    function: string;

    fps: number;

    dataRate: number;

    totalData: number;

    dailyData: number;

    totalEvents: number;

    dailyEvents: number;
}