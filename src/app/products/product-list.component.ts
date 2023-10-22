import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'ng-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private _filter: string = '';
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  toggleImageBtnText: string = 'Show Image';
  productsList: Array<IProduct> = [
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
  filteredProducts: Array<IProduct> = [...this.productsList];
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
  }
  filterProducts(): void {
    this.filteredProducts = this.productsList.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
    this.toggleImageBtnText = this.showImage ? 'Hide Image' : 'Show Image';
  }
  ngOnInit(): void {
    console.log('ProductListComponent was initialized.');
  }
}
