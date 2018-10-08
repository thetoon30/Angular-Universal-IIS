import { NgModule } from '@angular/core';

import { ROUTES } from './layout.route';
import { LayoutComponent } from './layout.compoent';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    ROUTES
  ]
})

export class LayoutModule {
}
