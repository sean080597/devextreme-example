import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExThemeComponent } from './ex-theme/ex-theme.component';
import { ExFilterAsStringComponent } from './ex-filter-as-string/ex-filter-as-string.component';

@NgModule({
  declarations: [
    AppComponent,
    ExThemeComponent,
    ExFilterAsStringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
