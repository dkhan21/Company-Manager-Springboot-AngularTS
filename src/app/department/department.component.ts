import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { Department } from './department';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  public departments: Department[] = [];

  public editDepartment: Department = {
    id: 0,
    name: '',
    description: ''
  }
  public deleteDepartment: Department = {
    id: 0,
    name: '',
    description: ''
  }


  constructor(private departmentService: DepartmentService){}

  ngOnInit() {
    this.getDepartments();
  }


  public searchDepartment(key: string): void{

    const results: Department [] = [];
    for(const department of this.departments){
      if(department.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || department.description.toLowerCase().indexOf(key.toLowerCase()) !==-1)
        {
            results.push(department);
        }
    }

    this.departments = results;
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

  //Funciton to add a department
  public onAddDepartment(addForm: NgForm ): void{
    document.getElementById('addClose')?.click();
    this.departmentService.addDepartment(addForm.value).subscribe({
      
        next: (response: Department) => {
          console.log(response);
          this.getDepartments();
          addForm.reset()
        }, 
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
          alert(error.message);
        },
    })
  }

  public onUpdateDepartment(department: Department): void{
    document.getElementById('editClose')?.click();
    this.departmentService.updateDepartment(department).subscribe({
      next: (response: Department) => {
        console.log(response);
        this.getDepartments();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      }
    })
  }

  public onDeleteDepartment(id: number): void{
    document.getElementById('deleteClose')?.click();
    this.departmentService.deleteDepartment(id).subscribe({
        next:(response: void) => {
          console.log(response);
          this.getDepartments();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
          alert(error.message);
        }
    })
  }


  public onOpenModal(department: Department | null, mode: string): void {
    console.log("here")
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
  
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addDepartmentModal');
    } else if (mode === 'edit' && department) {
      this.editDepartment = department;
      console.log(this.editDepartment); // Add this for debugging
      button.setAttribute('data-bs-target', '#updateDepartmentModal');
    } else if (mode === 'delete' && department) {
      this.deleteDepartment = department;
      button.setAttribute('data-bs-target', '#deleteDepartmentModal');
    }
  
    container?.appendChild(button);
    button.click();
  }

}
