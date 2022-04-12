import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  isLoged=false;
  
  constructor(private storage: StorageService) { 
    
  }

  login():void{
    this.isLoged=true;
    this.storage.setItem('isLogged', true);
  }

  logout():void{
    this.isLoged=false;
    this.storage.setItem('isLogged', false);
  }
}
