// -----------------------------------------------------------------------
// <copyright file="base.service.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the base service implementation
// </summary>
// -----------------------------------------------------------------------

// Import the angular modules
import { Subject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { UnsubscribeHelper } from "./../../shared/helpers/unsubscribe-helper";

// Import the enumeration
import { ServiceStatesEnum } from "../../models/enums/service-states.enum";

// Base service event interface
interface IBaseServiceEvent {
    event: ServiceStatesEnum;
    key: string;
}

export class BaseService extends UnsubscribeHelper {

    /**
     * Reference to the subject of the event
     */
    private eventBus = new Subject<IBaseServiceEvent>();

    /**
     * Raise an event based on the state and key
     * @param event
     * @param key
     */
    raiseEvent(event: ServiceStatesEnum, key?: string) {
        this.eventBus.next({ event: event, key: key });
    }

    /**
     * Returns an observable which can be used to subscribe to the given event.
     * @param keys: optional array of keys to filter the event by
     */
    onEvent(event: ServiceStatesEnum, ...keys: string[]): Observable<void> {
        return this.eventBus.asObservable()
            .pipe(filter((e: IBaseServiceEvent) => e.event === event &&
                (keys == null || keys.length === 0 || keys.some(x => x === e.key))),
                map(() => null));
    }

    /**
     * Returns an observable which can be used to subscribe to the given events
     * @param events
     * @param key
     */
    onEvents(events: ServiceStatesEnum[], ...keys: string[]): Observable<void> {
        return this.eventBus.asObservable()
            .pipe(filter((e: IBaseServiceEvent) => events.some(x => x === e.event) &&
                (keys == null || keys.length === 0 || keys.some(x => x === e.key))),
                map(() => null));
    }
}
