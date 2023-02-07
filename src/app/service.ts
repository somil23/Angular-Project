import { Injectable } from "@angular/core";
import { Subject,BehaviorSubject } from "rxjs";

interface cart{
    name:string,
    price:any,
    image:any,
    description:any,
    adjective:any,
}


@Injectable()
export class dataService{
    value:any;

    subArray:any=[]
    constructor()
    {
        // this.subject$.subscribe((val)=>{
        //     this.value=val;
        // })
    }
    
    subject$=new BehaviorSubject([] as Array<cart>);
    subject2= new BehaviorSubject({} as cart)

    add(card:any)
    {
      this.subArray.push(card)
      console.log(card)
      console.log(this.subArray)
        this.subject$.next(this.subArray)
    }





}