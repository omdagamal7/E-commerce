import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Products[], searchKey: any): Products[] {
    return products?.filter(ele => ele.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
  }

}
