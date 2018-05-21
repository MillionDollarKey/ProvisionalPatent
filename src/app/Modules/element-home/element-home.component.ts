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

    

    this.datas  = this.datasvc.data[this.datasvc.CountPatent-1].Elements;
    console.log(this.datasvc.data);
   $(function(){
     $(".sortables").sortable({
       connectWith : ".sortables"
     });
   });
  }

  done(){
    this.datasvc.avail = true;
    localStorage.setItem(this.datasvc.data[this.datasvc.CountPatent-1].email,JSON.stringify(this.datasvc.data));
    this.router.navigate(['/home']);
    
  }

  addElement(){
    this.router.navigate(['/addElement']);
  }

  addSubElement(parentID ?: number){
    this.router.navigate(["/addSubElement",parentID]);
  
  }

}
