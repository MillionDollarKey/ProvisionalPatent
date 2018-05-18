import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';
import {AddElementType} from "../add-element-type";
declare var $ : any ;
@Component({
  selector: 'app-element-home',
  templateUrl: './element-home.component.html',
  styleUrls: ['./element-home.component.css']
})
export class ElementHomeComponent implements OnInit {

  datas  : AddElementType [];
  constructor( private datasvc : DataService , private router : Router) { }

  ngOnInit() {

    

    this.datas  = this.datasvc.action;
   
  }

  done(){

  }

  addElement(){
    this.router.navigate(['/addElement']);
  }

  addSubElement(parentID ?: number){
    this.router.navigate(["/addSubElement",this.datasvc.Count]);
    this.datasvc.Count += 1;
  }

}
