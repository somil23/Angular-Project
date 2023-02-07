import { dataService } from './../service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 Products: any
  constructor(public DataService:dataService)
  {
     this.Products=this.getItems();
     
  }


  ngOnInit(): void {
    console.log(this.DataService.subject$.getValue())
  }


  
  getItems()
  {
  
    return this.DataService.value;
  }
  clearCart()
  {
    
    this.DataService.subArray.splice(0,this.DataService.subArray.length);
   this.Products= this.DataService.subArray;
  }

  removeCard(index:any)
  {
   
    this.DataService.subArray.splice(index,1)
    this.Products=this.DataService.subArray;   
  }
                
}
