import { Component, OnInit, Input } from '@angular/core';
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
  @Input() Datas : AddElementType [];
  available : boolean  ;
  parentId : number ;

  ngOnInit() {
    var options = {
      opener: {
        active: true,
        as: 'html',  // or "class" or skip if using background-image url
        close: '<i class="fa fa-minus red"></i>', // or 'fa fa-minus' or './imgs/Remove2.png'
        open: '<i class="fa fa-plus"></i>', // or 'fa fa-plus' or './imgs/Add2.png'
        openerCss: {
          'display': 'inline-block', // Default value
          'float': 'left', // Default value
          'width': '18px',
          'height': '18px',
          'margin-left': '-35px',
          'margin-right': '5px',
          'background-position': 'center center', // Default value
          'background-repeat': 'no-repeat' // Default value
        },
        // or like a class. Note that class can not rewrite default values. To rewrite defaults you have to do it through css object.
        openerClass: 'yourClassName'
      }
    }

    $(document).ready(function () {
      $('.sortables').sortableLists(options);
  });

    this.dataSVC.editPatent = true;
   
    this.index = this.route.snapshot.params['id'];
    this.parentId = this.index;
     this.dataSVC.data  = JSON.parse( localStorage.getItem('patents') );
     console.log(this.dataSVC.data);
     this.Datas = this.dataSVC.data[this.index].Elements;
     console.log(this.Datas);
     console.log( "parent id" + this.parentId);
     
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

  addSubElement(parentID ?: string,order?:number){
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.data = [this.parentId,parentID,order];
    console.log( dialogConfigs.data);
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
  
  }

 
}
