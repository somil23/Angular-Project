import { dataService } from './../service';
import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, DoCheck {
  a: any;

  constructor(public router:Router,public DataService:dataService) {
   if(this.DataService.value=== undefined){
    this.a=[]
   }
   else{
    this.a=this.DataService.value.length
   }
    // this.a=0;   
    // this.a = JSON.parse(localStorage.getItem('cards') || '[]').length;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    //this.a = JSON.parse(localStorage.getItem('cards') || '[]').length;
    if(this.DataService.subArray=== undefined){
      this.a=0
     }
     else{
      this.a=this.DataService.subArray.length
     }
    //  console.log('ngDoCheck triggered'+this.a);

  }
}
