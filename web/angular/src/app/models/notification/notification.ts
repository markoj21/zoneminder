// -----------------------------------------------------------------------
// <copyright file="notification.ts" company="ZoneMinder">
// </copyright>
// -----------------------------------------------------------------------

// Import the models
import { NotificationEventsEnum } from "../enums/notification-events.enum";

// <summary>
// Base type for all signalr notifications.
// </summary>
export class Notification<T> {
    id: NotificationEventsEnum;
    message: T;
}
