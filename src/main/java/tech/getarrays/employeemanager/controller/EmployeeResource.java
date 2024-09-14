package tech.getarrays.employeemanager.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeResource {
    // This is the Employee Controller. It takes request from client(Frontend) and interact with service to speak with database.
    //Each method gets called and returns a response.
    private final EmployeeService employeeService;

    public EmployeeResource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //Method Used to create a Response for returning all employees with an object.
    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getALlEmployees() {
        List<Employee> employees = employeeService.findAllEmployees();
        return  new ResponseEntity<>(employees, HttpStatus.OK);
    }
    //Method Used to create a Response for returning all employees with an object.
    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
        Employee employee = employeeService.findEmployeeById(id);
        return  new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee employee1 = employeeService.addEmployee(employee);
        return new ResponseEntity<>(employee1, HttpStatus.CREATED);

    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        Employee updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id){
       employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/department/{departmentId}")
    public ResponseEntity<List<Employee>> findEmployeeByDepartmentId(@PathVariable("id") Long id){
        List<Employee> employeeList = employeeService.getEmployeeByDepartmentId(id);
        return ResponseEntity.ok(employeeList);
    }



}
