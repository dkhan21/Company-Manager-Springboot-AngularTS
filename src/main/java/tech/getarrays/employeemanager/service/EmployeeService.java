package tech.getarrays.employeemanager.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.exception.UserNotFoundException;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repo.EmployeeRepo;

import java.security.PublicKey;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
    //@Transactional, which is required to ensure that a transaction is started for the delete operation.
    @Transactional
    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }

    public List<Employee> getEmployeeByDepartmentId(Long id){
        return employeeRepo.findEmployeeByDepartmentId(id);
    }

}
