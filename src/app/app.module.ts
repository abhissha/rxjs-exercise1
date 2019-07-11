import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleObservableRxjsComponent } from "./observable/simple-observable-rxjs.component";
import { BehaviorSubjectExampleComponent } from "./behaviorsubject/behavior-subject-example.component";
import { CommonFunctionsComponent } from "./common-functions/common-functions.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleObservableRxjsComponent,
	BehaviorSubjectExampleComponent,
	CommonFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
