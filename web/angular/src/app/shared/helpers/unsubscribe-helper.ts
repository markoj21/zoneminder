// Import the angular modules
import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export class UnsubscribeHelper implements OnDestroy {

    /**
     * Create the unsubscribe variable that is initialized when the component is
     * destroyed allowing the subscriptions to be freed up.
     */
    unsubscribe = new Subject();

    /**
     * Call the ng destroy component
     */
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
