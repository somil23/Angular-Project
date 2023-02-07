import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
   public logged=false
  constructor() { }

isLogged()
{
  return this.logged;
}
}