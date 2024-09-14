import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },  // Default to employees
  { path: 'employee', component: EmployeeComponent, pathMatch: 'full'},
    { path: 'department', component: DepartmentComponent, pathMatch: 'full' }, // Department Route
  ]