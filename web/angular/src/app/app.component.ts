import { Component, OnInit } from "@angular/core";

// Import the necessary services
import { NotificationService } from "./services/notification.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    /**
     * Initializes a new instance of the AppComponent class.
     * @param notificationService
     */
    constructor(private readonly notificationService: NotificationService) {}

    /**
     * On initialize event handler
     */
    ngOnInit() {
        // Handle the notification service once the application is initialized.
        this.notificationService.initialize();
    }
}
