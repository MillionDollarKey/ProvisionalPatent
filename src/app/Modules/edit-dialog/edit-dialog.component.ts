import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialog,MatDialogTitle,MatDialogActions,MatDialogContent } from "@angular/material";
import { HomeComponent } from "../../Modules/home/home.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  email : string = "";

  constructor(public dialogRef: MatDialogRef<HomeComponent>,private router : Router) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  done(){
    this.dialogRef.close();
    this.router.navigate(['/editPatent',this.email])

  }

}
