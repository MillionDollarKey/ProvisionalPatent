import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  
  newPatent(){
    console.log("going to new patent");
    this.router.navigate(['newPatent']);
  }

  editPatent(){
    console.log("going to edit patent");
    this.router.navigate(['editPatent']);
  }

  exportPatent(){
    console.log("going to export patent");
    this.router.navigate(['exportPatent']);
  }

  ngOnInit() {
  }

}
