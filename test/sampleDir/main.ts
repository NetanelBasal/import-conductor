import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@custom/something';

import { FooModule } from '../someModule';

import { environment } from './environments/environment';
import { SomeModule } from './someModule';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SomeModule)
  .catch((err) => console.error(err));
