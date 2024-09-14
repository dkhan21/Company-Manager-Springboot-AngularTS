import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Department } from "./department";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DepartmentService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getDepartments(): Observable<Department[]>{
        return this.http.get<Department[]>(this.apiServerUrl + '/department/all')
    }

    public addDepartment(department: Department): Observable<Department>{
        return this.http.post<Department>(this.apiServerUrl + '/department/add', department)
    }

    public updateDepartment(department: Department): Observable<Department>{
        return this.http.put<Department>(this.apiServerUrl + '/department/update', department)
    }

    public deleteDepartment(departmentId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/department/delete/${departmentId}`)
    }



}