package tech.getarrays.employeemanager.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.exception.DepartmentNotFoundException;
import tech.getarrays.employeemanager.model.Department;
import tech.getarrays.employeemanager.repo.DepartmentRepo;

import java.util.List;

@Service
public class DepartmentService {


    private final DepartmentRepo departmentRepo;

    @Autowired
    public DepartmentService(DepartmentRepo departmentRepo){
        this.departmentRepo = departmentRepo;
    }


    public Department addDepartment(Department department){
       return departmentRepo.save(department);
    }

    public List<Department> findAllDepartments(){
        return departmentRepo.findAll();
    }

    public Department updateDepartment(Department department){
        return departmentRepo.save(department);
    }

    public Department findDepartmentById(Long id){
        return departmentRepo.findDepartmentById(id).orElseThrow(() -> new DepartmentNotFoundException("Department with id: " + id + " was not found."));
    }
    // Ensure that the delete operation transaction is secure
    @Transactional
    public void deleteDepartmentById(Long id){
        departmentRepo.deleteDepartmentById(id);
    }





}
