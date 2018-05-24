import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EditDialogComponent } from '../../Modules/edit-dialog/edit-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { PatentType, AddElementType } from "../add-element-type";
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  data: PatentType[];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    useBom: true,
    noDownload: false
  };

  newPatent() {
    console.log("going to new patent");
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(NewPatentComponent, dialogConfig);
    //this.router.navigate(['newPatent']);
  }

  editPatent(index) {
    console.log("going to edit patent");
    this.router.navigate(['/editPatent', index]);

  }

  exportPatent(index) {
    let PatentData = [];
    PatentData.push({
      t1: "Email",
      email: this.data[index].email
    });
    PatentData.push({
      t2: "Invention Title",
      inventionTitle: this.data[index].inventionTitle
    });
    PatentData.push({
      t3: "Invention Type",
      inventionType: this.data[index].inventionType
    });
    PatentData.push({
      t4: "Inventor Name",
      inventorName: this.data[index].inventorName
    });
    PatentData.push({
      t5: "Inventor Place",
      inventorPlace: this.data[index].inventorPlace
    });
    PatentData.push({
      t6: "About Invention",
      about: this.data[index].about
    });
    PatentData.push({
      t7: "Docker Number",
      dockerNumber: this.data[index].dockerNumber
    });
    PatentData.push({
      t8: "Problem Definition",
      problemDefinition: this.data[index].problemDefinition
    });
   PatentData.push( {
      t9: "Reference",
      reference: this.data[index].reference
    });

    let elementData = this.data[index].Elements;
    for (let i = 0; i < elementData.length; i++) {
      console.log(elementData[i]['id']);
      PatentData.push( elementData[i]);
      for(let j=0 ; j<elementData[i].subElement.length; j++){
        PatentData.push(elementData[i].subElement[j]);
      }
    }


    console.log("going to export patent");
    let download =  new Angular5Csv( PatentData, 'ProvisinalPatent',this.options);
    console.log(download);
  }



  deletePatent() {
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('patents'));
    console.log(this.data);
  }

}
