import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router,ActivatedRoute} from "@angular/router";
import { AddElementType } from "../add-element-type";
@Component({
  selector: 'app-add-sub-element',
  templateUrl: './add-sub-element.component.html',
  styleUrls: ['./add-sub-element.component.css']
})
export class AddSubElementComponent implements OnInit {
  formgroup : any;
  ActionType : AddElementType;
  parentId : number;
  constructor(private route : ActivatedRoute,private router : Router , private dataSVC : DataService) { }

  ngOnInit() {
    this.parentId = this.route.snapshot.params['id'];
    this.formgroup = new FormGroup({
      title : new FormControl('',[Validators.required]),
      briefDescription : new FormControl('',[Validators.required]),
      figure : new FormControl('',[Validators.required]),
      features : new FormControl('',[Validators.required]),
      about : new FormControl('',[Validators.required,Validators.maxLength(1000)])
    });
  }

  submit(){
    
    
    //this.dataSVC.action[this.parentId].subElement = this.formgroup.values;
    let values = new AddElementType(this.formgroup.value.title,this.formgroup.value.briefDescription,this.formgroup.value.features,this.formgroup.value.about,this.formgroup.value.figure);
    this.dataSVC.data[this.dataSVC.CountPatent-1].Elements[this.parentId-1].subElement.push(values);
    console.log(this.dataSVC.data);
    this.router.navigate(['/elementHome']);
  }

}
