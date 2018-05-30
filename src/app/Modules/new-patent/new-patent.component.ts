import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';
import { AddElementComponent } from '../add-element/add-element.component';
import { AddElementType, PatentType } from '../add-element-type';
import { MatDialogRef, MatDialog, MatDialogTitle, MatDialogActions, MatDialogContent } from '@angular/material';
import { HomeComponent } from '../../Modules/home/home.component';
@Component({
  selector: 'app-new-patent',
  templateUrl: './new-patent.component.html',
  styleUrls: ['./new-patent.component.css']
})
export class NewPatentComponent implements OnInit {

  formgroup: any;



  invention = [
    { value: 'software', viewValue: 'Software' },
    { value: 'process', viewValue: 'Process' },
    { value: 'mechanical', viewValue: 'Mechanical Invention' },
    { value: 'composition', viewValue: 'Composition of Matter' }
  ];



  constructor(private http: HttpClient, private datasvc: DataService, private router: Router,
    public dialogRef: MatDialogRef<HomeComponent>) { }

  ngOnInit() {

    this.formgroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      inventorName1: new FormControl('', [Validators.required, Validators.minLength(4)]),
      inventorName2: new FormControl('', [Validators.required, Validators.minLength(4)]),
      inventorName3: new FormControl('', [Validators.required, Validators.minLength(4)]),
      inventorName4: new FormControl('', [Validators.required, Validators.minLength(4)]),
      inventorAddress1: new FormControl('', [Validators.required]),
      inventorAddress2: new FormControl('', [Validators.required]),
      inventorAddress3: new FormControl('', [Validators.required]),
      inventorAddress4: new FormControl('', [Validators.required]),
      inventorCity1: new FormControl('', [Validators.required]),
      inventorCity2: new FormControl('', [Validators.required]),
      inventorCity3: new FormControl('', [Validators.required]),
      inventorCity4: new FormControl('', [Validators.required]),
      inventorState1: new FormControl('', [Validators.required]),
      inventorState2: new FormControl('', [Validators.required]),
      inventorState3: new FormControl('', [Validators.required]),
      inventorState4: new FormControl('', [Validators.required]),
      inventorCountry1: new FormControl('', [Validators.required]),
      inventorCountry2: new FormControl('', [Validators.required]),
      inventorCountry3: new FormControl('', [Validators.required]),
      inventorCountry4: new FormControl('', [Validators.required]),
      inventorPostalCode1: new FormControl('', [Validators.required]),
      inventorPostalCode2: new FormControl('', [Validators.required]),
      inventorPostalCode3: new FormControl('', [Validators.required]),
      inventorPostalCode4: new FormControl('', [Validators.required]),
      inventorPhone1: new FormControl('', [Validators.required]),
      inventorPhone2: new FormControl('', [Validators.required]),
      inventorPhone3: new FormControl('', [Validators.required]),
      inventorPhone4: new FormControl('', [Validators.required]),
      inventorEmail1: new FormControl('', [Validators.required]),
      inventorEmail2: new FormControl('', [Validators.required]),
      inventorEmail3: new FormControl('', [Validators.required]),
      inventorEmail4: new FormControl('', [Validators.required]),
      inventionTitle: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      dockerNumber: new FormControl('', [Validators.required]),
      inventionType: new FormControl('', [Validators.required]),
      problemDefinition: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      publication: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      about: new FormControl('', [Validators.required, Validators.maxLength(1000)])

    });

  }

  submit() {
    const val = this.formgroup.value;
    const values = new PatentType(val.email, val.inventorName1, val.inventorAddress1, val.inventorCity1,
      val.inventorState1, val.inventorCountry1, val.inventorPostalCode1, val.inventorPhone1
      , val.inventorEmail1, val.inventorName2, val.inventorAddress2, val.inventorCity2,
      val.inventorState2, val.inventorCountry2, val.inventorPostalCode2, val.inventorPhone2
      , val.inventorEmail2, val.inventorName3, val.inventorAddress3, val.inventorCity3,
      val.inventorState3, val.inventorCountry3, val.inventorPostalCode3, val.inventorPhone3
      , val.inventorEmail3, val.inventorName4, val.inventorAddress4, val.inventorCity4,
      val.inventorState4, val.inventorCountry4, val.inventorPostalCode4, val.inventorPhone4
      , val.inventorEmail4, val.inventionTitle,
      val.reference, val.dockerNumber, val.inventionType, val.problemDefinition, val.publication, val.about, []);
    console.log(values);
    this.datasvc.CountPatent += 1;
    const length = this.datasvc.data.push(values);
    this.dialogRef.close();
    this.router.navigate(['elementHome']);
  }

  cancel() {
    this.dialogRef.close();
  }

}
