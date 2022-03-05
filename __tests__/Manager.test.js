const Employee = require('../lib/Manager');
const manager = new Employee('Beverly', '90210', 'bevhills90210@gmail.com', '456');

// tests for constructor value output
it('should get the constructor values for the manager object', () => {
  expect(manager.name).toBe('Beverly');
  expect(manager.id).toBe('90210');
  expect(manager.email).toBe('bevhills90210@gmail.com');
});

// tests getName for the name output
it('should get the name from the getName() method', () => {
  expect(manager.getName()).toBe('Beverly');
});

//tests getId for an ID value output
it('should get the id from the getId() method', () => {
  expect(manager.getId()).toBe('90210');
});

//tests for an email output from getEmail() method.
it('should get the email from the getEmail() method', () => {
  expect(manager.getEmail()).toBe('bevhills90210@gmail.com');
});

//tests for an email output from getOfficeNumber() method.
it('should get the email from the getOfficeNumber() method', () => {
  expect(manager.getOfficeNumber()).toBe('456');
});

//tests for Role output from getRole() method.
it('should get the role from the getRole() method', () => {
  expect(manager.getRole()).toBe('Manager');
});