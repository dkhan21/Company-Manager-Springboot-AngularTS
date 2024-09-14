export interface Department {
    id: number;
    name: string;
    description: string;
}

export interface Employee {
    id: number;
    name: string;
    email: string;
    jobTitle: string;
    phone: string;
    imageUrl: string;
    employeeCode: string;
    department?: Department;  // Optional Department object
}
