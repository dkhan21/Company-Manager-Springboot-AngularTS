import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    //This is the method to retrive all employees. Url is listed and Employee Object is set to get(Get request) data.
    public getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(this.apiServerUrl + '/employee/all');
    }
    //Making request to add employee using post request
    public addEmployees(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(this.apiServerUrl + '/employee/add', employee);
    }

    public updateEmployees(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(this.apiServerUrl + '/employee/update', employee);
    }

    public deleteEmployees(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }    

    
}