import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router } from "@angular/router";
import { AddElementType } from "../add-element-type";
import { MatDialogRef,MatDialog,MatDialogTitle,MatDialogActions,MatDialogContent,MAT_DIALOG_DATA } from "@angular/material";
import { ElementHomeComponent } from "../element-home/element-home.component";
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  formgroup : any;
  ActionType : AddElementType;
  show : boolean ;
  software : boolean;
  composition: boolean;
  flowChart  = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private router : Router , private dataSVC : DataService,public dialogRef: MatDialogRef<ElementHomeComponent>) { }

  ngOnInit() {
    this.formgroup = new FormGroup({
      title : new FormControl('',[]),
      briefDescription : new FormControl('',[Validators.required]),
      figureNumber : new FormControl('',[]),
      figureName : new FormControl('',[]),
      elementNumberInFigure : new FormControl('',[]),
      features : new FormControl('',[]),
      alternate : new FormControl('',[]),
      flowChart: new FormControl('',[]),
      novaltyRanking : new FormControl('',[]),
      strength: new FormControl('',[]),
      about : new FormControl('',[Validators.required,Validators.maxLength(1000)])
    });

    this.show = this.dataSVC.editPatent;
    console.log(this.data);
    if(this.show) {
      if(this.dataSVC.data[this.data].inventionType == "software"){
        this.dataSVC.software = true;
      }
      if(this.dataSVC.data[this.data].inventionType == "composition"){
        this.dataSVC.composition = true;
      }
    }

    else{
      if(this.dataSVC.data[this.dataSVC.CountPatent-1].inventionType == "software"){
        this.dataSVC.software = true;
      }
      if(this.dataSVC.data[this.dataSVC.CountPatent-1].inventionType == "composition"){
        this.dataSVC.composition = true;
      }
    }

    this.software = this.dataSVC.software;
    this.composition = this.dataSVC.composition;
   
  }

  submit(){
   
    let uuid = UUID.UUID();
    const val = this.formgroup.value;
    const values = new AddElementType(uuid,val.title,val.briefDescription,val.about,
    val.novaltyRanking,val.flowChart,
    val.figureNumber,val.figureName,val.elementNumberInFigure, val.features,
    null,null,1,val.strength,[]);
    if(this.show){
      this.dataSVC.data[this.data].Elements.push(values);
      this.dataSVC.Count += 1;
    }
    else{
      this.dataSVC.data[this.dataSVC.CountPatent-1].Elements.push(values);
      this.dataSVC.Count += 1;
  }
    console.log(values);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
