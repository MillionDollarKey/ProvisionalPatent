import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';
import {AddElementType} from "../add-element-type";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare var $ : any ;
@Component({
  selector: 'app-element-home',
  templateUrl: './element-home.component.html',
  styleUrls: ['./element-home.component.css']
})
export class ElementHomeComponent implements OnInit {

  datas  : AddElementType [];
  constructor( private datasvc : DataService , private router : Router ,public dialog: MatDialog) { }

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
    this.router.navigateByUrl('/');
    localStorage.setItem('patents',JSON.stringify(this.datasvc.data));
  }

  addElement(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddElementComponent, dialogConfig);
  //  this.router.navigate(['/addElement']);
  }

  addSubElement(parentID ?: number){
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = parentID;
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
  
  }

}
