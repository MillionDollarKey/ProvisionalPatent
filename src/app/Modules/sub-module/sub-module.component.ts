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

    $(document).ready(function() {
      $('.sortable').disableSelection().nestedSortable({
        forcePlaceholderSize: true,
        items: "li",
        handle: "a",
        placeholder: "menu-highlight",
        listType: "ul",
        opacity: 0.6
      });
      
   // var array = $('.sortable').nestedSortable('toArray');
    //console.log(this.dump(array));
    });


}


dump(arr,level?:any) {
  var dumped_text = "";
  if(!level) level = 0;

  //The padding given at the beginning of the line.
  var level_padding = "";
  for(var j=0;j<level+1;j++) level_padding += "    ";

  if(typeof(arr) == 'object') { //Array/Hashes/Objects
    for(var item in arr) {
      var value = arr[item];

      if(typeof(value) == 'object') { //If it is an array,
        console.log("object", arr[item]);
        dumped_text += level_padding + "'" + arr[item] + "' ...\n";
        dumped_text += this.dump(value,level+1);
      } else {
        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
      }
    }
  } else { //Strings/Chars/Numbers etc.
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
  }
  return dumped_text;
}
  addSubElement(parentID ?: string,order?:number){
    const dialogConfigs = new MatDialogConfig();
    console.log(this.parentId + " in submodule");
    dialogConfigs.data = [this.parentId,parentID,order];
    this.dialog.open(AddSubElementComponent, dialogConfigs);
   // this.router.navigate(["/addSubElement",parentID]);
  
  }

}
