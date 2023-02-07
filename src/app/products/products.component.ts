import { dataService } from './../service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  
  public Products = [
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      adjective: faker.commerce.productAdjective(),
      description: faker.commerce.productDescription(),
    },
  ];
  
  constructor(private matDialog: MatDialog,public DataService:dataService) {}
  name: any;
  description: any;
  product:any
  image:any
  oobb:any;

  @ViewChild('detailTemplate', { static: true }) detailTemplate:
    | TemplateRef<any>
    | undefined;

  addtoCart(card: any) {
    console.log(card)
    this.DataService.add(card);
  }
  getItems() {
  
   return this.DataService.value;
  }

  details(product: any) {
    // this.name = product.name;
    // this.description = product.description;
    this.product=product
    this.image=product.image;

    this.DataService.subject2.next(product)
    this.oobb=this.DataService.subject2.getValue()
    this.matDialog.open(this.detailTemplate as TemplateRef<any>);
  }

  ngOnInit(): void {}
}
