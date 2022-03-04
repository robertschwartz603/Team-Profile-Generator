const Employee = require('../lib/Intern');
const intern = new Employee('Beverly', '90210', 'bevhills90210@gmail.com', 'UNH');

// tests for constructor value output
it('should get the constructor values for the intern object', () => {
  expect(intern.name).toBe('Beverly');
  expect(intern.id).toBe('90210');
  expect(intern.email).toBe('bevhills90210@gmail.com');
});

// tests getName for the name output
it('should get the name from the getName() method', () => {
  expect(intern.getName()).toBe('Beverly');
});

//tests getId for an ID value output
it('should get the id from the getId() method', () => {
  expect(intern.getId()).toBe('90210');
});

//tests for an email output from getEmail() method.
it('should get the email from the getEmail() method', () => {
  expect(intern.getEmail()).toBe('bevhills90210@gmail.com');
});

//tests for an email output from getSchool() method.
it('should get the email from the getSchool() method', () => {
  expect(intern.getSchool()).toBe('UNH');
});

//tests for Role output from getRole() method.
it('should get the role from the getRole() method', () => {
  expect(intern.getEmail()).toBe('Intern');
});