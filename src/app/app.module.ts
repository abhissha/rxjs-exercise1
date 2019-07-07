import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleObservableRxjsComponent } from "./observable/simple-observable-rxjs.component";
import { BehaviorSubjectExampleComponent } from "./behaviorsubject/behavior-subject-example.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleObservableRxjsComponent,
    BehaviorSubjectExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
