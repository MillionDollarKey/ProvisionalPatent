import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AddElementType } from "../add-element-type";
import { ElementHomeComponent } from "../element-home/element-home.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { UUID } from 'angular2-uuid';
import { MatDialogRef, MatDialog, MatDialogTitle, MatDialogActions, MatDialogContent } from "@angular/material";
import { EditPatentComponent } from '../edit-patent/edit-patent.component';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.css']
})
export class SelectElementComponent implements OnInit {

  name: string;
  data: AddElementType[];
  index: any;
  error = false;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<EditPatentComponent>, private dataSVC: DataService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.index = this.dialogData;
    console.log(this.index);
    this.data = this.dataSVC.data[this.index].Elements;
  }

  submit() {
    if (this.name != null) {
      let param = this.search(this.data, this.name);
      console.log(param);
      this.dialogRef.close(param);
    } else {
      this.error = false;
    }

  }

  cancel() {
    this.dialogRef.close();
  }

  search(array, name) {

    for (let i = 0; i < this.data.length; i++) {
      if (array[i].name === name) {
        return [array[i].id, array[i].order];
      } else {
        if (array[i].children.length > 0) {
          return this.search(array[i].children, name);
        }
      }
    }
  }

}
