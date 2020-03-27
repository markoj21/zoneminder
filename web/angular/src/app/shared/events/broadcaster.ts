// -----------------------------------------------------------------------
// <copyright file="broadcaster.ts" company="ZoneMinder">
// </copyright>
// -----------------------------------------------------------------------
import { Subject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

// Import the enumeration
import { NotificationEventsEnum } from "../../models/enums/notification-events.enum";

/**
 * Broadcast event/message interface.
 */
/* tslint:disable:no-any */
interface IBroadcastEvent {
    key: NotificationEventsEnum;
    data?: any;
}
/* tslint:enable:no-any */

/**
 * General-purpose event broadcaster.
 */
export class Broadcaster {

  /**
   * The bus used to dispatch events.
   */
  private readonly eventBus: Subject<IBroadcastEvent>;

  /**
   * Initializes a new instance of the Broadcaster class.
   */
  constructor() {
    this.eventBus = new Subject<IBroadcastEvent>();
  }

  /**
   * Raises a broadcast event with the given key and data.
   * @param key
   * @param data
   */
    raise<T>(key: NotificationEventsEnum, data: T) {
    this.eventBus.next({ key: key, data: data });
  }

  /**
   *  Returns an observable which can be used to subscribe to the given event.
   * @param key
   */
    on<T>(key: NotificationEventsEnum): Observable<T> {
    return this.eventBus.asObservable()
      .pipe(filter((e: IBroadcastEvent) => e.key === key),
        map((e: IBroadcastEvent) => e.data as T));
  }
}
