import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ApiService } from './service/api.service';
import { NavEmpolyeeComponent } from './components/nav-empolyee/nav-empolyee.component';


// Route for paths and pages
const route: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    NavEmpolyeeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
