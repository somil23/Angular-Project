
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { LoggedService } from '../logged/logged.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required]);
  
  constructor(private router:Router,private loggedService:LoggedService) { }


  onSubmit()
  {
    this.loggedService.logged=true;
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
  }

}
