const Employee = require('../lib/Engineer');
const engineer = new Employee('Beverly', '90210', 'bevhills90210@gmail.com', 'beverlyGit902');

// tests for constructor value output
it('should get the constructor values for the engineer object', () => {
  expect(engineer.name).toBe('Beverly');
  expect(engineer.id).toBe('90210');
  expect(engineer.email).toBe('bevhills90210@gmail.com');
});

// tests getName for the name output
it('should get the name from the getName() method', () => {
  expect(engineer.getName()).toBe('Beverly');
});

//tests getId for an ID value output
it('should get the id from the getId() method', () => {
  expect(engineer.getId()).toBe('90210');
});

//tests for an email output from getEmail() method.
it('should get the email from the getEmail() method', () => {
  expect(engineer.getEmail()).toBe('bevhills90210@gmail.com');
});

//tests for an email output from getGithub() method.
it('should get the github from the getGithub() method', () => {
  expect(engineer.getGithub()).toBe('beverlyGit902');
});

//tests for Role output from getRole() method.
it('should get the role from the getRole() method', () => {
  expect(engineer.getRole()).toBe('Engineer');
});