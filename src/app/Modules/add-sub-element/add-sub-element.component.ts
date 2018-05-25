import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AddElementType } from "../add-element-type";
import { ElementHomeComponent } from "../element-home/element-home.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef, MatDialog, MatDialogTitle, MatDialogActions, MatDialogContent } from "@angular/material";
@Component({
  selector: 'app-add-sub-element',
  templateUrl: './add-sub-element.component.html',
  styleUrls: ['./add-sub-element.component.css']
})
export class AddSubElementComponent implements OnInit {
  formgroup: any;
  ActionType: AddElementType;
  parentId: number;
  show: boolean;
  software: boolean;
  composition: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, private router: Router, private dataSVC: DataService, public dialogRef: MatDialogRef<ElementHomeComponent>) { }

  ngOnInit() {
    if (this.dataSVC.editPatent) {
      this.parentId = this.data[1];
    }
    else {
      this.parentId = this.data;
    }

    this.formgroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      briefDescription: new FormControl('', [Validators.required]),
      figureNumber: new FormControl('', [Validators.required]),
      figureName: new FormControl('', [Validators.required]),
      elementNumberInFigure: new FormControl('', [Validators.required]),
      features: new FormControl('', [Validators.required]),
      alternate: new FormControl('', [Validators.required]),
      flowChart: new FormControl('', [Validators.required]),
      novaltyRanking: new FormControl('', [Validators.required]),
      strength: new FormControl('',[Validators.required]),
      about: new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });

    this.show = this.dataSVC.editPatent;
    if (this.show) {
      if (this.dataSVC.data[this.data[0]].inventionType == "software") {
        this.dataSVC.software = true;
      }
      if (this.dataSVC.data[this.data[0]].inventionType == "composition") {
        this.dataSVC.composition = true;
      }
    }

    else {
      if (this.dataSVC.data[this.dataSVC.CountPatent - 1].inventionType == "software") {
        this.dataSVC.software = true;
      }
      if (this.dataSVC.data[this.dataSVC.CountPatent - 1].inventionType == "composition") {
        this.dataSVC.composition = true;
      }
    }

    this.software = this.dataSVC.software;
    this.composition = this.dataSVC.composition;

  }

  submit() {
    const val = this.formgroup.value;
    const values = new AddElementType(val.briefDescription, val.about,
      val.novaltyRanking, val.flowChart, this.dataSVC.Count, val.title,
      val.figureNumber, val.figureName, val.elementNumberInFigure, val.features,
      this.data[1], val.alternate, 2,val.strength, []);

    if (this.dataSVC.editPatent) {
      console.log(this.data[0] + "this.data[0]");
      console.log(this.data[1] + "this.data[1]");
      this.dataSVC.data[this.data[0]].Elements[this.data[1] - 1].subElement.push(values);
    }

    else {
      this.dataSVC.data[this.dataSVC.CountPatent - 1].Elements[this.parentId - 1].subElement.push(values);
    }

    //this.dataSVC.action[this.parentId].subElement = this.formgroup.values;

    console.log(this.dataSVC.data);
    this.dialogRef.close();
    // this.router.navigate(['/elementHome']);
  }
  close() {
    this.dialogRef.close();
  }

}
