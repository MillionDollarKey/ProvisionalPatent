import { Component, OnInit , Input } from '@angular/core';
import { AddElementType, PatentType } from '../add-element-type';
import { DataService } from '../../Services/data.service';
import { Router,ActivatedRoute} from "@angular/router";
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { AddElementComponent } from '../add-element/add-element.component';
import {AddSubElementComponent} from '../add-sub-element/add-sub-element.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare var $ : any ;
@Component({
  selector: 'app-sub-module',
  templateUrl: './sub-module.component.html',
  styleUrls: ['./sub-module.component.css']
})
export class SubModuleComponent implements OnInit {
 @Input() Datas : AddElementType[] ;
 index : any ;
 @Input() parentId : number ;
  constructor(public dialog: MatDialog ,private dataSVC : DataService,private route : ActivatedRoute,private router : Router ) { }

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
    
  }

  addSubElement(parentID ?: string,order?:number){
    const dialogConfigs = new MatDialogConfig();
    console.log(this.parentId + " in submodule");
    dialogConfigs.data = [this.parentId,parentID,order];
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
  
  }

}
