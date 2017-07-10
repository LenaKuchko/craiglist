import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Subcategory } from '../subcategory.model';
import { CATEGORIES } from '../mock-categories';
import { SUBCATEGORIES } from '../mock-subcategories';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {}

  categoryArray: Category[] = CATEGORIES;

  getSubcategories() {
    for (let i = 0; i < this.categoryArray.length; i++) {
      this.categoryArray[i].array = [];
      for (let ii = 0; ii < SUBCATEGORIES.length; ii++) {
        if (this.categoryArray[i].title === SUBCATEGORIES[ii].tag) {
          this.categoryArray[i].array.push(SUBCATEGORIES[ii]);
        }
      }
    }
  }

  ngOnInit() {
    this.getSubcategories();
  }

  goToSubcategory(search: string) {
    this.router.navigate(['search', search])
  }
}
