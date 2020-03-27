// -----------------------------------------------------------------------
// <copyright file="debug-state.event.ts" company="Zoneminder">
// </copyright>
// -----------------------------------------------------------------------
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Broadcaster } from "./broadcaster";

// Import the enumeration
import { NotificationEventsEnum } from "../../models/enums/notification-events.enum";

// Import the models
import { Notification } from "../../models/notification/notification";

/**
 * A broadcast event raised when the event state has changed
 */
@Injectable()
export class DebugStateEvent {

    /**
    * Initializes a new instance of the DebugStateEvent class.
    * @param broadcaster
    */
    constructor(private readonly broadcaster: Broadcaster) {
    }

    /**
    * Broadcasts this event when event state has changed.
    */
    raise(data: Notification<string>) {
        console.log(`Debug event raised: ${data.message}`);
        this.broadcaster.raise(NotificationEventsEnum.Debug, data);
    }

    /**
    * Returns an observable which can be used to subscribe to this event.
    */
    on(): Observable<Notification<string>> {
        return this.broadcaster.on<Notification<string>>(NotificationEventsEnum.Debug);
    }
}
