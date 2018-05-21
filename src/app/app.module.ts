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

const routes: Routes = [
  { path: '' , redirectTo : 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'newPatent', component: NewPatentComponent },
  { path: 'editPatent', component: EditPatentComponent },
  { path: 'exportPatent', component: ExportPatentComponent },
  { path: 'elementHome', component: ElementHomeComponent },
  { path: 'addElement', component: AddElementComponent },
  { path: 'addSubElement/:id', component: AddSubElementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewPatentComponent,
    ElementHomeComponent,
    AddElementComponent,
    AddSubElementComponent,
    EditPatentComponent,
    ExportPatentComponent,
    HomeComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
