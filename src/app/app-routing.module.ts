import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleObservableRxjsComponent } from "./observable/simple-observable-rxjs.component";
import { BehaviorSubjectExampleComponent } from "./behaviorsubject/behavior-subject-example.component";
import { CommonFunctionsComponent } from "./common-functions/common-functions.component";

const routes: Routes = [
    { path: 'exercise1', component: SimpleObservableRxjsComponent },
	{ path: 'behaviorsubject', component: BehaviorSubjectExampleComponent },
	{ path: 'commonfunctions/:id', component: CommonFunctionsComponent },
    { path: '', component: SimpleObservableRxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
