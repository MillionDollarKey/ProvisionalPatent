import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../Services/data.service';
import { Router } from "@angular/router";
import { AddElementComponent } from '../add-element/add-element.component';
import { AddElementType,PatentType } from '../add-element-type';
@Component({
  selector: 'app-new-patent',
  templateUrl: './new-patent.component.html',
  styleUrls: ['./new-patent.component.css']
})
export class NewPatentComponent implements OnInit {

  formgroup : any;



  invention = [
    { value : 'software', viewValue : 'Software'},
    { value : 'process', viewValue : 'Process'},
    { value : 'mechanical', viewValue : 'Mechanical Invention'},
    { value : 'composition', viewValue : 'Composition of Matter'}
  ]

  

  constructor( private http : HttpClient, private datasvc :DataService ,private router : Router ) { }

  ngOnInit() {

    this.formgroup = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      inventorName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      inventorPlace : new FormControl('',[Validators.required]),
      inventionTitle : new FormControl('',[Validators.required]),
      reference : new FormControl('',[Validators.required]),
      dockerNumber : new FormControl('',[Validators.required]),
      inventionType : new FormControl('',[Validators.required]),
      problemDefinition : new FormControl('',[Validators.required,Validators.maxLength(1000)]),
      about : new FormControl('',[Validators.required,Validators.maxLength(1000)])
  
    });

  }

  submit(){
    let val = this.formgroup.value;
    let values = new PatentType(val.email,val.inventorName,val.inventorPlace,val.inventionTitle,val.reference,val.dockerNumber,val.inventionType,val.problemDefinition,val.about,[]);
    console.log(values);
    this.datasvc.CountPatent += 1;
    let length =  this.datasvc.data.push(values);
    this.router.navigate(['elementHome']);
  }

}
