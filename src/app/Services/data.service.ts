import { Injectable } from '@angular/core';
import { AddElementType,PatentType } from '../Modules/add-element-type';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  
  data : PatentType  [] = [] ;
  avail : boolean = false;
  editPatent : boolean = false;
  
  Count : number = 1 ;
  CountPatent : number = 0;

}
