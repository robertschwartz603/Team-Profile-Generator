const Employee = require('../lib/Employee');
const employee = new Employee('Beverly', '90210', 'bevhills90210@gmail.com');

// tests for constructor value output
it('should get the constructor values for the employee object', () => {
  expect(employee.name).toBe('Beverly');
  expect(employee.id).toBe('90210');
  expect(employee.email).toBe('bevhills90210@gmail.com');
});

// tests getName for the name output
it('should get the name from the getName() method', () => {
  expect(employee.getName()).toBe('Beverly');
});

//tests getId for an ID value output
it('should get the id from the getId() method', () => {
  expect(employee.getId()).toBe('90210');
});

//tests for an email output from getEmail() method.
it('should get the email from the getEmail() method', () => {
  expect(employee.getEmail()).toBe('bevhills90210@gmail.com');
});

//tests for Role output from getRole() method.
it('should get the role from the getRole() method', () => {
  expect(employee.getRole()).toBe('Employee');
});
