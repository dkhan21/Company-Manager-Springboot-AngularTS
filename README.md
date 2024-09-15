# Employee Manager Application

## See Backend Branch for Backend Code (SpringBoot)
## See Frontend Branch for Frontend Code (AngularTS)


The Employee Manager Application is a full-stack web application designed to manage employee data efficiently. This project includes both frontend and backend components, allowing users to perform CRUD operations on employee records and assign them to departments.

## Features

- **Employee Management**: Add, edit, delete, and view employees.
- **Department Management**: Assign employees to departments.
- **Search Functionality**: Search employees by name, job title, phone, or email.
- **Responsive UI**: User-friendly design with responsive layout.
- **Modals for CRUD**: Add, update, and delete operations are handled using Bootstrap modals.
- **OpenAPI Documentation**: Swagger UI is integrated for API documentation.

## Project Structure

The repository is organized into two main folders:




## Frontend (Angular)

The frontend is built with **Angular** and **Bootstrap**, providing a responsive and interactive user interface. It communicates with the backend through HTTP requests to perform CRUD operations.

### Key Technologies

- **Angular**: Framework for building single-page applications.
- **Bootstrap**: CSS framework for styling and layout.
- **Angular Forms**: For handling form inputs and validation.
- **HTTPClient**: For making API requests to the backend.
- **RxJS**: For handling asynchronous data streams.

### Key Components

- **Employee Component**: Manages employee data and displays it in a card view. Handles search functionality.
- **Department Component**: Handles department data and the assignment of employees to departments.

### Key Features

- **Search Employees**: Filter employees by name, email, job title, or phone.
- **Dropdown for Department**: Dropdown to select and assign departments while adding or updating employees.
- **Modals for Add/Edit/Delete**: Bootstrap modals are used for adding, updating, and deleting employees.

## Backend (Spring Boot)

The backend is built using **Spring Boot**, with **Hibernate** and **JPA** for database interactions. It exposes a REST API that the Angular frontend communicates with to manage employee and department data.

### Key Technologies

- **Spring Boot**: Java framework for building microservices and web applications.
- **Spring Data JPA**: For interacting with the database using Java Persistence API.
- **Hibernate**: ORM tool for handling database operations.
- **MySQL**: Relational database for storing employee and department data.
- **OpenAPI (Swagger)**: For API documentation and testing.
- **Lombok**: To reduce boilerplate code for entity classes.

### Key Features

- **CRUD Operations**: Create, read, update, and delete employees and departments.
- **RESTful API**: Exposes endpoints for managing employees and departments.
- **Data Relationships**: Employees are linked to departments via a foreign key relationship.
- **Error Handling**: Custom exceptions for handling errors and user-friendly messages.
  
### API Endpoints

- `/employee/all`: Get all employees.
- `/employee/add`: Add a new employee.
- `/employee/update`: Update an existing employee.
- `/employee/delete/{id}`: Delete an employee by ID.
  
- `/department/all`: Get all departments.
-  `/department/add`: Add a new department.
- `/department/update`: Update an existing department.
- `/department/delete/{id}`: Delete an department by ID.


## Tools Used

- **Git**: Version control system for tracking changes in the code.
- **GitHub**: Repository hosting service for version control and collaboration.
- **Postman**: API testing tool to manually test the backend endpoints.
- **Swagger (OpenAPI)**: API documentation and testing.
- **MySQL Workbench**: For designing and managing the MySQL database schema.

## Installation and Setup

### Backend (Spring Boot)

1. Clone the repository.
2. Navigate to the `Backend/employeemanager` folder.
3. Open the project in an IDE like IntelliJ or Eclipse.
4. Set up the MySQL database:
    - Create a new MySQL database (e.g., `employeemanager`).
    - Update the database configuration in `application.properties`:
      ```properties
      spring.datasource.url=jdbc:mysql://localhost:3306/employeemanager
      spring.datasource.username=root
      spring.datasource.password=yourpassword
      spring.jpa.hibernate.ddl-auto=update
      ```
5. Run the backend server.
6. Access the API documentation at `http://localhost:8080/swagger-ui.html`.

### Frontend (Angular)

1. Navigate to the `Frontend/employeemanager` folder.
2. Install the necessary dependencies:
   ```bash
   npm install
