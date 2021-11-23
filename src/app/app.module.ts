import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule, DxTagBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExThemeComponent } from './ex-theme/ex-theme.component';
import { ExFilterAsStringComponent } from './ex-filter-as-string/ex-filter-as-string.component';
import { ExFilteringComponent } from './ex-filtering/ex-filtering.component';
import { ExScreenfullComponent } from './ex-screenfull/ex-screenfull.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExThemeComponent,
    ExFilterAsStringComponent,
    ExFilteringComponent,
    ExScreenfullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxTagBoxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
