import { of } from "rxjs/internal/observable/of";
import { MenuItem } from "../models/menu-item.model";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})

export class MenuItemData {
	getMenuItemById(id: number): Observable<MenuItem> {
		return of(this.foodList[id]);
	}

	getFoodList(): Observable<MenuItem[]> {
		return of(this.foodList);
	}

	private foodList: MenuItem[] =
		[
			{
				"id": 1,
				"name": "Taco Supreme",
				"description": "It's like a taco, but far supreme",
				"price": 2.50,
				"isSpecial": false
			},
			{
				"id": 2,
				"name": "Burrito",
				"description": "A burrito the size of a small child",
				"price": 9.95,
				"isSpecial": true
			},
			{
				"id": 3,
				"name": "Mini Taco Boats",
				"description": "Seven mini tacos that float on a sea of nacho cheese",
				"price": 6.50,
				"isSpecial": true
			},
			{
				"id": 4,
				"name": "Nachos Grande",
				"description": "Plate of the most grande nachos you've ever seen",
				"price": 7.50,
				"isSpecial": true
			},
			{
				"id": 5,
				"name": "Takito",
				"description": "Mini taco cigars",
				"price": 1.00,
				"isSpecial": false
			},
			{
				"id": 6,
				"name": "Taco Bowl",
				"description": "Take that taco and drop it in a bowl",
				"price": 5.25,
				"isSpecial": false
			},
			{
				"id": 7,
				"name": "Quesadilla",
				"description": "Cheese and tortilla, all you need",
				"price": 4.50,
				"isSpecial": false
			}
		]
}