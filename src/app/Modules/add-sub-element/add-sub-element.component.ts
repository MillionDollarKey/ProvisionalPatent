import { Component, OnInit , Inject } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router,ActivatedRoute} from "@angular/router";
import { AddElementType } from "../add-element-type";
import { ElementHomeComponent } from "../element-home/element-home.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef,MatDialog,MatDialogTitle,MatDialogActions,MatDialogContent } from "@angular/material";
@Component({
  selector: 'app-add-sub-element',
  templateUrl: './add-sub-element.component.html',
  styleUrls: ['./add-sub-element.component.css']
})
export class AddSubElementComponent implements OnInit {
  formgroup : any;
  ActionType : AddElementType;
  parentId : number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,private route : ActivatedRoute,private router : Router , private dataSVC : DataService,public dialogRef: MatDialogRef<ElementHomeComponent>) { }

  ngOnInit() {
    this.parentId = this.data;
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
    this.dialogRef.close();
    this.router.navigate(['/elementHome']);
  }
  close() {
    this.dialogRef.close();
  }

}
