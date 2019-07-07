import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'behavior-subject-example',
  template: `
  <div class="card">
    <div class="card-header">
      1. Behavior Subject Hands On
    </div>
    <div class="card-body">
      <h5 class="card-title">Details</h5>
      <div class="card-text">
        <ul>
          <li> Create Behavior Subject(initialize the value to 0)</li>
          <li> Subscribe to the behavior subject, console log next => prefix the log with text "before"</li>
          <li> Emit value 1, 2 and 3 to the behavior subject</li>
          <li> subscribe to the behavior subject, console log next => prefix the log with text "after"</li>
          <li> compare the result with subject only, what's the difference?</li>
        </ul>
        <button class="btn btn-primary" (click)="startBehaviorSubject()">Start</button>
      </div>
    </div>
  </div>
  `,
  styles: ['']
})
export class BehaviorSubjectExampleComponent {

  startBehaviorSubject(): void {
  }
}
