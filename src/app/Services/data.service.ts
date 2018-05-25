import { Injectable } from '@angular/core';
import { AddElementType, PatentType } from '../Modules/add-element-type';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }



  data: PatentType[] = [];
  avail = false;
  editPatent = false;
  software = false;
  composition = false;
  Count = 1;
  CountPatent = 0;

}
