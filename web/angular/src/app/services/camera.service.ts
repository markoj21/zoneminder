// -----------------------------------------------------------------------
// <copyright file="camera.service.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Exposes functionality for camera services.
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ServiceStatesEnum } from "../models/enums/service-states.enum";

import { BaseService } from "./base/base.service";
import { EnvironmentService } from "./environment.service";

import { CameraSummaryModel } from "./../models/camera/camera-summary.model";

@Injectable()
export class CameraService extends BaseService {

    /**
     * Initializes a new instance of the @type {FarmService} class.
     * @param transferHttp
     * @param environment
     */
    constructor(
        private readonly transferHttp: HttpClient,
        private readonly constantService: EnvironmentService) {
        super();
    }

    /**
     * Get the summary for the current cameras
     */
    getCameraSummary(): Observable<CameraSummaryModel[]> {
        return this.transferHttp.get<CameraSummaryModel[]>(`${this.constantService.api}/camerasummary`);
    }
}
