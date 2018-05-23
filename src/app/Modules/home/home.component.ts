import { Component, OnInit , Inject } from '@angular/core';
import {Router} from '@angular/router';
import { EditDialogComponent } from '../../Modules/edit-dialog/edit-dialog.component';
import {MatDialog, MatDialogConfig , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewPatentComponent } from '../new-patent/new-patent.component';
import {PatentType} from "../add-element-type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,public dialog: MatDialog) { }

  data : PatentType [] ;
  
  newPatent(){
    console.log("going to new patent");
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(NewPatentComponent, dialogConfig);
    //this.router.navigate(['newPatent']);
  }

  editPatent(index){
    console.log("going to edit patent");
    this.router.navigate(['/editPatent',index]);
   
  }

  exportPatent(index){
    console.log("going to export patent");
    this.router.navigate(['/exportPatent',index]);
  }

  deletePatent(){
    localStorage.removeItem("patents");
  }

  ngOnInit() {
    this.data  = JSON.parse( localStorage.getItem('patents') );
    console.log(this.data);
  }

}
