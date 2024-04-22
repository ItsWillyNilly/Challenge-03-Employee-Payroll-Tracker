// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  employeesArray.push({
    firstName: prompt("Please enter the persons first name: "),
    lastName: prompt("Please enter the persons last name: "),
    salary: prompt("Please enter their salary: ")
  });  

  while(window.confirm("Would you like to add another employee?")){
    employeesArray.push({
      firstName: prompt("Please enter their first name: "),
      lastName: prompt("Please enter their last name: "),
      salary: prompt("Please enter their salary: ")
    });
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  let salarySum = 0;

  for (let i = 0; i < employeesArray.length; i++){
    salarySum += +employeesArray[i].salary;
  }

  let average = Math.floor((salarySum/employeesArray.length)*100)/100;
  console.log("The average employee salary between our", employeesArray.length, "employee(s) is: $", average);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  let employee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log("Congratulations to...", employee.firstName, employee.lastName, "our random drawing winner!");

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
