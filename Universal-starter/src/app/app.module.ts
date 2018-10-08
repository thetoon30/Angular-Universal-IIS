import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { routes } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent }  from './error/error.component';

import { MetaTagsService } from './core/meta-tags.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
  ],
  providers: [MetaTagsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
