import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import {AddElementType,PatentType} from "../add-element-type";
import { Router,ActivatedRoute} from "@angular/router";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare var $ : any ;

@Component({
  selector: 'app-edit-patent',
  templateUrl: './edit-patent.component.html',
  styleUrls: ['./edit-patent.component.css']
})
export class EditPatentComponent implements OnInit {
  index : any ;
  constructor(public dialog: MatDialog ,private dataSVC : DataService,private route : ActivatedRoute,private router : Router ) { }
  data : PatentType [];
  Datas : AddElementType [];
  available : boolean  ;
  parentId : number ;

  ngOnInit() {

    $(function(){
      $(".sortables").sortable({
        connectWith : ".sortables",
        update: function(event,ui){
          var changedList = this.id;
          var order = $(this).sortable('toArray');
          console.log({
            id : changedList,
            position : order
          })
        }
      });
    });

    this.dataSVC.editPatent = true;
   
    this.index = this.route.snapshot.params['id'];
    this.parentId = this.index;
     this.dataSVC.data  = JSON.parse( localStorage.getItem('patents') );
     console.log(this.dataSVC.data);
     this.Datas = this.dataSVC.data[this.index].Elements;
     console.log(this.Datas);
     
  }

  done(){
    
    this.dataSVC.avail = true;
    
    this.dataSVC.software = false;
    this.dataSVC.composition = false;
    this.router.navigateByUrl('/');
    this.dataSVC.editPatent = false;
     localStorage.setItem( "patents",JSON.stringify(this.dataSVC.data) );
  }

  addElement(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.parentId;
    this.dialog.open(AddElementComponent, dialogConfig);
  //  this.router.navigate(['/addElement']);
  }

  addSubElement(parentID ?: number){
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = [this.parentId,parentID];
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
  
  }

 
}
