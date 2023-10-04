import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/shared/interfaces/categories';
import { CategoriesService } from 'src/shared/services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CategoriesComponent implements OnInit {
  categories!: Categories[];
  constructor (
    private _categoriesService:CategoriesService
  ) {}
    ngOnInit(): void {
      this._categoriesService.getCategories().subscribe({
        next: res => this.categories = res.data,
      })
    }
}
