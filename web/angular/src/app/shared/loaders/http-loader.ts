import { HttpClient } from '@angular/common/http';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class HttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langPath: string) {
    return this.http.get<Translation>(`/assets/i18n/${langPath}.json`);
  }

  static preloadTranslation(transloco: TranslocoService) {
    return () => transloco.load("en").toPromise();
  }
}
