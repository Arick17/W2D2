$(document).ready(readyNow);
var employees = [];

function readyNow(){
    //on click event handler for the add employee button
    $('#addEmployeeButton').on('click', addEmployeeButtonClick);
}//end doc ready

function addEmployeeButtonClick(){
    console.log('in addEmployeeButtonClick');
    //get user input
        //put input into an object
    var newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        jobDescription: $('#jobDescriptionIn').val(),
        salary: $('#salaryIn').val(),
        
    }//end employee object
    console.log('adding',newEmployee);
    //push the new object into an array
    employees.push(newEmployee);
    console.log(employees);

    $('#firstNameIn').val(''),
    $('#lastNameIn').val(''),
    $('#employeeIdIn').val(''),
    $('#jobDescriptionIn').val(''),
    $('#salaryIn').val(''),
    //clear the inputs
    calculateSalaries();
}//end addEmployeeButtonClick

function calculateSalaries(){
    console.log('in calculateSalaries');
    //loop through employees array
    var totalSalaries = 0;
    for(var i=0; i<employees.length; i++){
            console.log(employees[i]);
            //convert each salary to a number
            totalSalaries += Number(employees[i].salary);
            //add salary to total salaries
    }//end for each employee
    console.log('total salries:', totalSalaries);
    var monthlySalaryCost = totalSalaries / 12;
    console.log('monthly cost:', monthlySalaryCost);
    displayOutput(totalSalaries, monthlySalaryCost);
}//end calculateSalaries

function displayOutput(salaries,monthly){
    console.log('in displayOutPut', salaries);
    //total salaries
    $('#totalSalaryOut').empty();
    $('#totalSalaryOut').append('Monthly Salary Cost: $',salaries.toFixed(2))
    //monthly salry cost
    $('#monthlySalaryCostOut').empty();
    $('#monthlySalaryCostOut').append('Monthly Salary Cost: $',monthly.toFixed(2))
    //all employees
    // for(var i=0; i<employees.length; i++){
    //     var appendString=';
    //     appendString+='<li>';
    //     appendString+='<li>';
    //     appendString+='<li>';
    //     appendString+='<li>';// DO THIS LATER
    //     appendString+='<li>';
    //     $('#employeesOut').append('<li>'+employees[i].firstName+'</li>');
    }//end for employees
//}//end displayOutput