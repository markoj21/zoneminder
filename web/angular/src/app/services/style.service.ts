import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { ServiceStatesEnum } from "../models/enums/service-states.enum";

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({
  providedIn: 'root'
})
export class StyleService extends BaseService {

    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string): void {
        const element = this.getLinkElementForKey(key);
        element.setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string): void {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    getLinkElementForKey(key: string): HTMLLinkElement {
        if (this.getExistingLinkElementByKey(key)) {
            this.removeStyle(key);
        }

        return this.createLinkElementWithKey(key);
    }

    getExistingLinkElementByKey(key: string): HTMLLinkElement {
        return document.head.querySelector<HTMLLinkElement>(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
    }

    createLinkElementWithKey(key: string): HTMLLinkElement {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        linkEl.onload = () => {
            this.raiseEvent(ServiceStatesEnum.Loaded);
        }
        document.head.appendChild(linkEl);
        return linkEl;
    }

    getClassNameForKey(key: string): string {
        return `style-manager-${key}`;
    }
}
