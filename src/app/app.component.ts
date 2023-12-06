import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stepper';
  isLinear = false;
  firstFormGroup: any;
  firstFormGroup1:any;
  thirdstep:any;
  secondFormGroup:any;
}
