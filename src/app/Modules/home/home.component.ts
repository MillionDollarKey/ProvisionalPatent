import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EditDialogComponent } from '../../Modules/edit-dialog/edit-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewPatentComponent } from '../new-patent/new-patent.component';
import { PatentType, AddElementType } from '../add-element-type';
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
    console.log('going to new patent');
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(NewPatentComponent, dialogConfig);
    // this.router.navigate(['newPatent']);
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
      t: "Invention Title",
      inventionTitle: this.data[index].inventionTitle
    });
    PatentData.push({
      t: "Invention Type",
      inventionType: this.data[index].inventionType
    });
    PatentData.push({
      t: "Inventor Name 1",
      inventorName: this.data[index].inventorName1
    });
    PatentData.push({
      t: "Inventor Address 1",
      inventorPlace: this.data[index].inventorAddress1
    });
    PatentData.push({
      t: "Inventor City 1",
      inventorName: this.data[index].inventorCity1
    });
    PatentData.push({
      t: "Inventor State 1",
      inventorName: this.data[index].inventorState1
    });
    PatentData.push({
      t: "Inventor Country 1",
      inventorName: this.data[index].inventorCountry1
    });
    PatentData.push({
      t: "Inventor Postal Code 1",
      inventorName: this.data[index].inventorPostalCode1
    });
    PatentData.push({
      t: "Inventor Phone 1",
      inventorName: this.data[index].inventorPhone1
    });
    PatentData.push({
      t: "Inventor Email 1",
      inventorName: this.data[index].inventorEmail1
    });
    PatentData.push({
      t: "Inventor Name 2",
      inventorName: this.data[index].inventorName2
    });
    PatentData.push({
      t: "Inventor Address 2",
      inventorPlace: this.data[index].inventorAddress2
    });
    PatentData.push({
      t: "Inventor City 2",
      inventorName: this.data[index].inventorCity2
    });
    PatentData.push({
      t: "Inventor State 2",
      inventorName: this.data[index].inventorState2
    });
    PatentData.push({
      t: "Inventor Country 2",
      inventorName: this.data[index].inventorCountry2
    });
    PatentData.push({
      t: "Inventor Postal Code 2",
      inventorName: this.data[index].inventorPostalCode2
    });
    PatentData.push({
      t: "Inventor Phone 2",
      inventorName: this.data[index].inventorPhone2
    });
    PatentData.push({
      t: "Inventor Email 2",
      inventorName: this.data[index].inventorEmail2
    });
    PatentData.push({
      t: "Inventor Name 3",
      inventorName: this.data[index].inventorName3
    });
    PatentData.push({
      t: "Inventor Address 3",
      inventorPlace: this.data[index].inventorAddress3
    });
    PatentData.push({
      t: "Inventor City 3",
      inventorName: this.data[index].inventorCity3
    });
    PatentData.push({
      t: "Inventor State 3",
      inventorName: this.data[index].inventorState3
    });
    PatentData.push({
      t: "Inventor Country 3",
      inventorName: this.data[index].inventorCountry3
    });
    PatentData.push({
      t: "Inventor Postal Code 3",
      inventorName: this.data[index].inventorPostalCode3
    });
    PatentData.push({
      t: "Inventor Phone 3",
      inventorName: this.data[index].inventorPhone3
    });
    PatentData.push({
      t: "Inventor Email 3",
      inventorName: this.data[index].inventorEmail3
    });
    PatentData.push({
      t: "Inventor Name 4",
      inventorName: this.data[index].inventorName4
    });
    PatentData.push({
      t: "Inventor Address 4",
      inventorPlace: this.data[index].inventorAddress4
    });
    PatentData.push({
      t: "Inventor City 4",
      inventorName: this.data[index].inventorCity4
    });
    PatentData.push({
      t: "Inventor State 1",
      inventorName: this.data[index].inventorState4
    });
    PatentData.push({
      t: "Inventor Country 4",
      inventorName: this.data[index].inventorCountry4
    });
    PatentData.push({
      t: "Inventor Postal Code 4",
      inventorName: this.data[index].inventorPostalCode4
    });
    PatentData.push({
      t: "Inventor Phone 4",
      inventorName: this.data[index].inventorPhone4
    });
    PatentData.push({
      t: "Inventor Email 4",
      inventorName: this.data[index].inventorEmail4
    });
    PatentData.push({
      t: "About Invention",
      about: this.data[index].about
    });
    PatentData.push({
      t: "Docker Number",
      dockerNumber: this.data[index].dockerNumber
    });
    PatentData.push({
      t: "Problem Definition",
      problemDefinition: this.data[index].problemDefinition
    });
   PatentData.push( {
      t: "Reference",
      reference: this.data[index].reference
    });

    const elementData = this.data[index].Elements;
    for (let i = 0; i < elementData.length; i++) {
      console.log(elementData[i]['id']);
      PatentData.push( elementData[i]);
      for (let j = 0 ; j < elementData[i].subElement.length; j++) {
        PatentData.push(elementData[i].subElement[j]);
      }
    }


    console.log("going to export patent");
    let download =  new Angular5Csv( PatentData, 'ProvisinalPatent', this.options);
    console.log(download);
  }



  deletePatent() {
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('patents'));
    console.log(this.data);
  }

}
