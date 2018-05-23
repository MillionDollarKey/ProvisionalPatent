import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router } from "@angular/router";
import { AddElementType } from "../add-element-type";
import { MatDialogRef,MatDialog,MatDialogTitle,MatDialogActions,MatDialogContent,MAT_DIALOG_DATA } from "@angular/material";
import { ElementHomeComponent } from "../element-home/element-home.component";
@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  formgroup : any;
  ActionType : AddElementType;
  show : boolean ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private router : Router , private dataSVC : DataService,public dialogRef: MatDialogRef<ElementHomeComponent>) { }

  ngOnInit() {
    this.formgroup = new FormGroup({
      title : new FormControl('',[Validators.required]),
      briefDescription : new FormControl('',[Validators.required]),
      figure : new FormControl('',[Validators.required]),
      features : new FormControl('',[Validators.required]),
      about : new FormControl('',[Validators.required,Validators.maxLength(1000)])
    });

    this.show = this.dataSVC.editPatent;

  }

  submit(){
   
  
    let values = new AddElementType(this.formgroup.value.title,this.formgroup.value.briefDescription,this.formgroup.value.features,this.formgroup.value.about,this.formgroup.value.figure,this.dataSVC.Count,null,[]);
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
    //this.router.navigate(['/elementHome']);
  }

  cancel() {
    this.dialogRef.close();
  }

}
