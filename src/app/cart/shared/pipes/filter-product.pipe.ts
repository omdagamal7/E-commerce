import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '../interfaces/cart';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: any[] ): any[] {
    return products.filter(product => product.count > 0);
  }

}
