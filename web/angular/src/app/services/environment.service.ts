// -----------------------------------------------------------------------
// <copyright file="environment.service.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the environment service to wrap any constants.
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { Injectable } from "@angular/core";

// Import the service
import { BaseService } from "./base/base.service";

// Import the models
import { environment } from "../../environments/environment";

@Injectable()
export class EnvironmentService extends BaseService  {

    /**
     * Gets the base url for the API.
     */
    get api(): string {
        return environment.api;
    }

    /**
     * Gets the base url for the Angular application .
     */
    get baseUrl(): string {
        return environment.base;
    }
}
