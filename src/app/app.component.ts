import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';  // Import NgFor
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
    

}
