import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    NotificationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
