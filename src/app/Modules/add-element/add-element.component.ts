import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router } from "@angular/router";
import { AddElementType } from "../add-element-type";
@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  formgroup : any;
  ActionType : AddElementType;

  constructor(private router : Router , private dataSVC : DataService) { }

  ngOnInit() {
    this.formgroup = new FormGroup({
      title : new FormControl('',[Validators.required]),
      briefDescription : new FormControl('',[Validators.required]),
      figure : new FormControl('',[Validators.required]),
      features : new FormControl('',[Validators.required]),
      about : new FormControl('',[Validators.required,Validators.maxLength(1000)])
    })
  }

  submit(){
   
  
    let values = new AddElementType(this.formgroup.value.title,this.formgroup.value.briefDescription,this.formgroup.value.features,this.formgroup.value.about,this.formgroup.value.figure,this.dataSVC.Count,null,[]);

    this.dataSVC.action.push(values);
    console.log(values);
    this.router.navigate(['/elementHome']);
  }

}
