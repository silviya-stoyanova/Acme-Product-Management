import { Component } from '@angular/core';

@Component({
  selector: 'ng-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  filter: string = '';
  showImage: boolean = false;
  toggleImageBtnText: string = 'Show Image';
  productList: Array<IProductList> = [
    {
      id: 1,
      name: 'Leaf Rake',
      code: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      rating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      id: 2,
      name: 'Garden Cart',
      code: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      rating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
    this.toggleImageBtnText = this.showImage ? 'Hide Image' : 'Show Image';
  }
}

export interface IProductList {
  id: number;
  name: string;
  code: string;
  releaseDate: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
}
