import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CssService } from "./services/css/css.service";
import { InspectedWindowService } from "./services/inspected-window/inspected-window.service";
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CssService,
    InspectedWindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
