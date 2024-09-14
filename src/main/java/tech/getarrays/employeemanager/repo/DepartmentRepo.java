package tech.getarrays.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.employeemanager.model.Department;

import java.util.Optional;

public interface DepartmentRepo extends JpaRepository<Department, Long> {

    void deleteDepartmentById(Long Id);
    Optional<Department> findDepartmentById(Long Id);

}
