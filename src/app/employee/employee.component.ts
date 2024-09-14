import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from './employee';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  title = 'employeemanagerapp';

  public employees: Employee[] = [];
  public departments: Department[] = [];
// this is id that was selected for the department that assigned to the employee
  public selectedDepartment: number = 0;


  public editEmployee: Employee = {
    id: 0,  
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    imageUrl: '',
    employeeCode: ''
  };

  public deleteEmployee: Employee = {
    id: 0,  
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    imageUrl: '',
    employeeCode: ''
  };
  

  constructor(private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ){}

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
  }

  public searchEmployees(key: string): void{
    const results: Employee[] = [];
    for (const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ){
        results.push(employee);
      }
    }
    this.employees = results;

    if(results.length === 0 || !key){
      this.getEmployees();
    }
  }

  //Function to recieve all employess
  public getDepartments(): void{
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) =>{
        this.departments = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      }
    )
  }

  //Function to recieve all employess
  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  //Function to add employees

  public onAddEmployee(addForm: NgForm): void {

    const employeeData = {
      ...addForm.value,
      department: { id: this.selectedDepartment }  // Send the department ID with the employee data
  };

    this.employeeService.addEmployees(employeeData).subscribe({
      next: (response: Employee) => {
        console.log(response);
        this.getEmployees();  // Refresh the employee list after adding
        document.getElementById('addClose')?.click();
        addForm.reset()
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset()
      }
    });
  }

  public onUpdateEmployee(employee: Employee): void {

    const employeeData: Employee = {
      ...employee,  // Get all form values like name, email, jobTitle, etc.
      department: { id: this.selectedDepartment,
        name: "",
        description: ""
      }  // Ensure department is an object with an id
    };

    this.employeeService.updateEmployees(employeeData).subscribe({
      next: (response: Employee) => {
        console.log(response);
        this.getEmployees();  // Refresh the employee list after adding
        document.getElementById('editClose')?.click();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteEmployee(employeeId: number): void {
    console.log("hiii")
    this.employeeService.deleteEmployees(employeeId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEmployees();  // Refresh the employee list after adding
        document.getElementById('deleteClose')?.click();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message)
      }
    });
  }
  

  public onOpenModal(employee: Employee | null, mode: string): void {
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
  
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEmployeeModal');
    } else if (mode === 'edit' && employee) {
      this.editEmployee = employee;
      this.selectedDepartment = employee.department ? employee.department.id : 0;  // Set the current department
      console.log(this.editEmployee); // Add this for debugging
      button.setAttribute('data-bs-target', '#updateEmployeeModal');
    } else if (mode === 'delete' && employee) {
      this.deleteEmployee = employee;
      button.setAttribute('data-bs-target', '#deleteEmployeeModal');
    }
  
    container?.appendChild(button);
    button.click();
  }
  



}
