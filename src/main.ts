import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Theme } from './properties';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


let body = document.body;

body.classList.add('[class.dark-class]="Theme.getInstance().isDark"');
body.classList.add('[class.white-class]="!Theme.getInstance().isDark"');

if (Theme.getInstance().isDark) {
  body.classList.add('dark-class');

} else {
  body.classList.add('white-class');
}
