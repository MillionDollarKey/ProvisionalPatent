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
  PatentData = [];
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

  deletePatent(index) {
    
    this.data.splice(index, 1);

  console.log(this.data);

    localStorage.setItem( 'patents', JSON.stringify(this.data) );
    this.ngOnInit();

  }

  exportPatent(index) {
    
    this.PatentData.push({
      t1: "Email",
      email: this.data[index].email
    });
    this.PatentData.push({
      t: "Invention Title",
      inventionTitle: this.data[index].inventionTitle
    });
    this.PatentData.push({
      t: "Invention Type",
      inventionType: this.data[index].inventionType
    });
    this.PatentData.push({
      t: "Inventor Name 1",
      inventorName: this.data[index].inventorName1
    });
    this.PatentData.push({
      t: "Inventor Address 1",
      inventorPlace: this.data[index].inventorAddress1
    });
    this.PatentData.push({
      t: "Inventor City 1",
      inventorName: this.data[index].inventorCity1
    });
    this.PatentData.push({
      t: "Inventor State 1",
      inventorName: this.data[index].inventorState1
    });
    this.PatentData.push({
      t: "Inventor Country 1",
      inventorName: this.data[index].inventorCountry1
    });
    this.PatentData.push({
      t: "Inventor Postal Code 1",
      inventorName: this.data[index].inventorPostalCode1
    });
    this.PatentData.push({
      t: "Inventor Phone 1",
      inventorName: this.data[index].inventorPhone1
    });
    this.PatentData.push({
      t: "Inventor Email 1",
      inventorName: this.data[index].inventorEmail1
    });
    this.PatentData.push({
      t: "Inventor Name 2",
      inventorName: this.data[index].inventorName2
    });
    this.PatentData.push({
      t: "Inventor Address 2",
      inventorPlace: this.data[index].inventorAddress2
    });
    this.PatentData.push({
      t: "Inventor City 2",
      inventorName: this.data[index].inventorCity2
    });
    this.PatentData.push({
      t: "Inventor State 2",
      inventorName: this.data[index].inventorState2
    });
    this.PatentData.push({
      t: "Inventor Country 2",
      inventorName: this.data[index].inventorCountry2
    });
    this.PatentData.push({
      t: "Inventor Postal Code 2",
      inventorName: this.data[index].inventorPostalCode2
    });
    this.PatentData.push({
      t: "Inventor Phone 2",
      inventorName: this.data[index].inventorPhone2
    });
    this.PatentData.push({
      t: "Inventor Email 2",
      inventorName: this.data[index].inventorEmail2
    });
    this.PatentData.push({
      t: "Inventor Name 3",
      inventorName: this.data[index].inventorName3
    });
    this.PatentData.push({
      t: "Inventor Address 3",
      inventorPlace: this.data[index].inventorAddress3
    });
    this.PatentData.push({
      t: "Inventor City 3",
      inventorName: this.data[index].inventorCity3
    });
    this.PatentData.push({
      t: "Inventor State 3",
      inventorName: this.data[index].inventorState3
    });
    this.PatentData.push({
      t: "Inventor Country 3",
      inventorName: this.data[index].inventorCountry3
    });
    this.PatentData.push({
      t: "Inventor Postal Code 3",
      inventorName: this.data[index].inventorPostalCode3
    });
    this.PatentData.push({
      t: "Inventor Phone 3",
      inventorName: this.data[index].inventorPhone3
    });
    this.PatentData.push({
      t: "Inventor Email 3",
      inventorName: this.data[index].inventorEmail3
    });
    this.PatentData.push({
      t: "Inventor Name 4",
      inventorName: this.data[index].inventorName4
    });
    this.PatentData.push({
      t: "Inventor Address 4",
      inventorPlace: this.data[index].inventorAddress4
    });
    this.PatentData.push({
      t: "Inventor City 4",
      inventorName: this.data[index].inventorCity4
    });
    this.PatentData.push({
      t: "Inventor State 1",
      inventorName: this.data[index].inventorState4
    });
    this.PatentData.push({
      t: "Inventor Country 4",
      inventorName: this.data[index].inventorCountry4
    });
    this.PatentData.push({
      t: "Inventor Postal Code 4",
      inventorName: this.data[index].inventorPostalCode4
    });
    this.PatentData.push({
      t: "Inventor Phone 4",
      inventorName: this.data[index].inventorPhone4
    });
    this.PatentData.push({
      t: "Inventor Email 4",
      inventorName: this.data[index].inventorEmail4
    });
    this.PatentData.push({
      t: "About Invention",
      about: this.data[index].about
    });
    this.PatentData.push({
      t: "Docker Number",
      dockerNumber: this.data[index].dockerNumber
    });
    this.PatentData.push({
      t: "Problem Definition",
      problemDefinition: this.data[index].problemDefinition
    });
   this.PatentData.push( {
      t: "Reference",
      reference: this.data[index].reference
    });
    this.PatentData.push({
      id:"id",
name:"name",
about:"about",
novaltyRanking:"novaltyRanking",
figureNumber:"figureNumber",
figureName:"figureName",
elementNumberInFigure:"elementNumberInFigure",
features:"features",
parentId:"parentId",
alternate:"alternate",
order:"order",
elementStrength:"elementStrength"
    });
    const elementData = this.data[index].Elements;

    this.getPatent(elementData);

    console.log("going to export patent");
    let download =  new Angular5Csv( this.PatentData, 'ProvisinalPatent', this.options);
    console.log(download);
  }



  getPatent(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]['id']);
      this.PatentData.push({
        "id":array[i].id,
        "name":array[i].name,
        "about" : array[i].about,
        "novaltyRanking" : array[i].flowchart,
        "figureNumber" : array[i].figureNumber,
        "figureName" : array[i].figureName,
        "elementNumberInFigure" : array[i].elementNumberInFigure,
        "features": array[i].features,
        "parentId" : array[i].parentId,
        "alternate" : array[i].alternate,
        "order" : array[i].order,
        "elementStrength" : array[i].elementStrength
      });
      this.getPatent(array[i].children);
    }
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('patents'));
    console.log(this.data);
  }

}
