const fs = require('fs');

//create a file
fs.appendFile('employees.json', '{"name":"Employee 1", "salary":"100"}');

//read a file
const data = fs.readFileSync('employees.json');
console.log(data.toString());

//update a file
fs.writeFileSync('employees.json', '{"name":"Employee 2", "salary":"200"}');

//delete a file
fs.unlinkSync('employees.json');
