package tech.getarrays.employeemanager.exception;

public class DepartmentNotFoundException extends RuntimeException {
    public DepartmentNotFoundException(String message){
            super(message);
    }
}


