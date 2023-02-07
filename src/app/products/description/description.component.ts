import { Component, Input, OnInit } from '@angular/core';
import { Faker } from '@faker-js/faker';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  
  constructor() { }
  @Input() desc:any

  
    

  ngOnInit(): void {
  }

    
}
