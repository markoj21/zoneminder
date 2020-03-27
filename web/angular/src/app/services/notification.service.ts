// -----------------------------------------------------------------------
// <copyright file="notification.service.ts" company="ZoneMinder">
// </copyright>
// <summary>
// Defines the notification service for the application
// </summary>
// -----------------------------------------------------------------------
import { Injectable } from '@angular/core';

// Import SignalR modules
import * as signalR from "@aspnet/signalr";

// Import the enumeration
import { NotificationEventsEnum } from "../models/enums/notification-events.enum";

// Import the global eventing classes
import { DebugStateEvent } from "../shared/events/debug-state.event";

// Import the models
import { environment } from "./../../environments/environment";
import { Notification } from "./../models/notification/notification";

// Import the services
import { BaseService } from "./base/base.service";

@Injectable({
    providedIn: "root"
})
export class NotificationService extends BaseService {

    /**
     * Reference to the routed signalr connection.
     */
    connection: signalR.HubConnection;

    /**
     * 
     * @param debugEvent 
     */
    constructor(private readonly debugEvent: DebugStateEvent) {
      // Call down to the base service
      super();
    }

    /**
     * Resolve the signal r connection
     */
    initialize(): void {

        // If there is an no connection try to connect.
        if (this.connection == null) {
          this.resolve();
        } else if (this.connection != null || this.connection.state === signalR.HubConnectionState.Connected) {
          // Check if we already have a stable connection.
          return;
        } else if (this.connection != null && this.connection.state === signalR.HubConnectionState.Disconnected) {
          // If there is an connection, disconnect and reconnect.
          this.connection.stop();
          this.connection.off("Broadcast");
          this.resolve();
        }
    }

    showError(error: string) {

    }

    /**
       * Returns a SignalR connection
       */
    private resolve(): Promise<void> {

      this.connection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Debug)
        .withUrl(environment.api + "/notification", { accessTokenFactory: () => "" })
        .build();

      return this.connection
        .start()
        .then(() => {
          this.connection.on("Broadcast", (args: Notification<string>) => this.handleSignalRMessages(args));
          this.connection.invoke("GetConnectionId")
            .then((connectionId) => {
              sessionStorage.setItem("signalr-connection-id", connectionId);
            });
        })
    }

    /**
     * Initialize the signalR event listener.
     */
    private handleSignalRMessages(msg: Notification<string>): void {
        // Respond to appropriate notifications
        switch (msg.id) {
        default:
            this.debugEvent.raise(msg);
          break;
        }
    }
}
