import { Injectable } from '@angular/core';
import { AddElementType } from '../Modules/add-element-type';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  
  data : any [] = [] ;
  action : AddElementType []  =  [];
  Count : number = 1 ;
  

}
