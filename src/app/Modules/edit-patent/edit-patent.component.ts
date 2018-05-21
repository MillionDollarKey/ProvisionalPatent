import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import {AddElementType,PatentType} from "../add-element-type";

@Component({
  selector: 'app-edit-patent',
  templateUrl: './edit-patent.component.html',
  styleUrls: ['./edit-patent.component.css']
})
export class EditPatentComponent implements OnInit {

  constructor(private dataSVC : DataService) { }
  data : PatentType [];
  available : boolean  ;
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem(""));
  }
}
