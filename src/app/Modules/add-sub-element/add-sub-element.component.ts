import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AddElementType } from "../add-element-type";
import { ElementHomeComponent } from "../element-home/element-home.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { UUID } from 'angular2-uuid';
import { MatDialogRef, MatDialog, MatDialogTitle, MatDialogActions, MatDialogContent } from "@angular/material";
@Component({
  selector: 'app-add-sub-element',
  templateUrl: './add-sub-element.component.html',
  styleUrls: ['./add-sub-element.component.css']
})
export class AddSubElementComponent implements OnInit {
  formgroup: any;
  order: any;
  ActionType: AddElementType;
  parentId: string;
  show: boolean;
  software: boolean;
  composition: boolean;
  count: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private route: ActivatedRoute, private router: Router, private dataSVC: DataService, 
  public dialogRef: MatDialogRef<ElementHomeComponent>) { }

  ngOnInit() {
    if (this.dataSVC.editPatent) {
      this.parentId = this.data[1];
      this.order = this.data[2];
    } else {
      this.parentId = this.data[0];
      this.order = this.data[1];
    }

    this.formgroup = new FormGroup({
      title: new FormControl('', []),
      briefDescription: new FormControl('', [Validators.required]),
      figureNumber: new FormControl('', []),
      figureName: new FormControl('', []),
      elementNumberInFigure: new FormControl('', []),
      features: new FormControl('', []),
      alternate: new FormControl('', []),
      flowChart: new FormControl('', []),
      novaltyRanking: new FormControl('', []),
      strength: new FormControl('', []),
      about: new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });

    this.show = this.dataSVC.editPatent;
    if (this.show) {
      if (this.dataSVC.data[this.data[0]].inventionType === "software") {
        this.dataSVC.software = true;
      }
      if (this.dataSVC.data[this.data[0]].inventionType === "composition") {
        this.dataSVC.composition = true;
      }
    } else {
      if (this.dataSVC.data[this.dataSVC.CountPatent - 1].inventionType === "software") {
        this.dataSVC.software = true;
      }
      if (this.dataSVC.data[this.dataSVC.CountPatent - 1].inventionType === "composition") {
        this.dataSVC.composition = true;
      }
    }

    this.software = this.dataSVC.software;
    this.composition = this.dataSVC.composition;

  }

  submit() {
    const val = this.formgroup.value;
    let uuid = UUID.UUID();
    const values = new AddElementType( uuid, val.title,val.briefDescription, val.about,
      val.novaltyRanking, val.flowChart,
      val.figureNumber, val.figureName, val.elementNumberInFigure, val.features,
      this.parentId, val.alternate, this.order+1,val.strength,[]);
      let array : AddElementType[];
    if (this.dataSVC.editPatent) {
      console.log(this.data[0] + "this.data[0]");
      console.log(this.data[1] + "this.data[1]");
      array =  this.dataSVC.data[this.data[0]].Elements
    }

    else {
      array = this.dataSVC.data[this.dataSVC.CountPatent - 1].Elements;
    }
    this.count = this.data[2]+1;
    this.pushRecursive(array, this.parentId, this.count , values);
    
    console.log(this.data[1]);

    console.log(this.dataSVC.data);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

  pushRecursive (array, parent, order, values) {
    console.log("Array length in pushRecursive" + array.length);
    for (let i = 0 ; i < array.length ; i++) {
      
      order = order + 1;

      if (array[i].id === parent && array[i].order >= 1) {
         array[i].children.push(values);
      } else {
        this.pushRecursive(array[i].children, parent, order, values);
      }
    }

  }

}

