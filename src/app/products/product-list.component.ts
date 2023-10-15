import { Component } from '@angular/core';

@Component({
  selector: 'ng-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  filter: string = 'dsa';
  productList: Array<any> = [
    {
      imageUrl: 'assets/images/hammer.png',
      name: 'Hammer',
      code: 'tbx 0048',
      available: 'May 21, 2021',
      price: '$8.90',
      rating: '4.7',
    },
    {
      imageUrl: 'assets/images/hammer.png',
      name: 'Hammer 2',
      code: 'tbx 0048 2',
      available: 'May 22, 2022',
      price: '$2.22',
      rating: '2.2',
    },
  ];
}
