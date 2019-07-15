import { Component } from '@angular/core';
import { CommonFunctionService } from "./common-function.service";

@Component({
	selector: 'app-common-functions',
	templateUrl: './common-functions.component.html',
	styleUrls: ['./common-functions.component.css']
})
export class CommonFunctionsComponent {

	constructor(private commonFunctionService: CommonFunctionService) { }

}
