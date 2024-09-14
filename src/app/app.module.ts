import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';




@NgModule({
  declarations: [
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [] // Bootstrap the component
})
export class AppModule { }
