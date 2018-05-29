import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,MatSelectModule,MatAutocompleteModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatDividerModule } from '@angular/material';
import {MatInputModule} from "@angular/material/input"
import {MatFormFieldModule} from "@angular/material/form-field"
import { NewPatentComponent } from './Modules/new-patent/new-patent.component';
import { ElementHomeComponent } from './Modules/element-home/element-home.component';
import { AddElementComponent } from './Modules/add-element/add-element.component';
import { AddSubElementComponent } from './Modules/add-sub-element/add-sub-element.component';
import { EditPatentComponent } from './Modules/edit-patent/edit-patent.component';
import { ExportPatentComponent } from './Modules/export-patent/export-patent.component';
import { HomeComponent } from './Modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import {MatDialogModule} from '@angular/material';
import { EditDialogComponent } from './Modules/edit-dialog/edit-dialog.component';
import { FormsModule }   from '@angular/forms';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SubModuleComponent } from './Modules/sub-module/sub-module.component';
// import { TreeModule } from 'ng2-tree';



const routes: Routes = [
  { path: '' , redirectTo : 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'editPatent/:id', component: EditPatentComponent },
  { path: 'exportPatent/:id', component: ExportPatentComponent },
  { path: 'elementHome', component: ElementHomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPatentComponent,
    ElementHomeComponent,
    AddElementComponent,
    AddSubElementComponent,
    EditPatentComponent,
    ExportPatentComponent,
    EditDialogComponent,
    SubModuleComponent,
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    // TreeModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent, AddElementComponent,
    AddSubElementComponent,NewPatentComponent]
})
export class AppModule { }
