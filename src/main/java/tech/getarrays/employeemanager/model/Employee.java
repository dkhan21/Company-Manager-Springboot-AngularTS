package tech.getarrays.employeemanager.model;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.ManyToAny;

import java.io.Serializable;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @NotNull
    @Schema(description = "This is the name of the Employee it should only contain Characters")
    private String name;
    @Schema(description = "This is the email of the Employee. It should contain a valid email.")
    private String email;
    @Schema(description = "This is the JobTitle of the Employee. It should contain a valid JobTitle.")
    private String jobTitle;
    @Schema(description = "This is the phone of the Employee. It should contain 10 digits.")
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String employeeCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", referencedColumnName = "id", nullable = true)
    private Department department;

}
