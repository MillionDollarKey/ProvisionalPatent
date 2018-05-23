import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
@Component({
  selector: 'app-export-patent',
  templateUrl: './export-patent.component.html',
  styleUrls: ['./export-patent.component.css']
})
export class ExportPatentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 // let csvData = new Angular2Csv(data, 'My Report');
  }

}
