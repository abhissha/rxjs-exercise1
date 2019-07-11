import { Injectable } from "@angular/core";
import { ParamMap, ActivatedRoute } from "@angular/router";


@Injectable({
	providedIn: 'root'
})
export class CommonFunctionService {
	private queryParamMap = this.route.queryParamMap;
	
	constructor(private route: ActivatedRoute) { }


}