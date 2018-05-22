import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import {AddElementType,PatentType} from "../add-element-type";
import { Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-patent',
  templateUrl: './edit-patent.component.html',
  styleUrls: ['./edit-patent.component.css']
})
export class EditPatentComponent implements OnInit {
  email : string = "";
  constructor(private dataSVC : DataService,private route : ActivatedRoute,private router : Router ) { }
  data : PatentType [];
  available : boolean  ;

  ngOnInit() {
    this.email = this.route.snapshot.params['id'];
     this.data  = JSON.parse( localStorage.getItem(this.email) );
  }
}
