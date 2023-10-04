import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/shared/interfaces/brands';
import { BrandsService } from 'src/shared/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BrandsComponent implements OnInit {
  brands!: Brands[]
  constructor (
    private _brandsService:BrandsService
  ) {}
    ngOnInit(): void {
      this._brandsService.getBrands().subscribe({
        next: res => this.brands = res.data
      })
    }

}
