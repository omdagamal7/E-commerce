import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/shared/interfaces/categories';
import { CategoriesService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories!: Categories[]
  constructor (
    private _categoriesService:CategoriesService
  ) {}
    ngOnInit(): void {
      this._categoriesService.getCategories().subscribe({
        next: res => this.categories = res.data,
        error: err => console.log(err),

      })
    }
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        200: {
          items: 2
        },
        400: {
          items: 3
        },
        740: {
          items: 6
        }
      },
      margin: 20,
      nav: true
    }
}
