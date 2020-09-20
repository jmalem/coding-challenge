/**
 * Test Case With even more extra role,
 * Junior, Mid level and Senior Employee (Developer and Business Analyst) all are direct subordinates of Manager
 * Intern is direct subordinate of Senior Employee
 *
 * Human Resource Manager reports to System Admin
 * Associate Human Resource Manager reports to Human Resource Manager
 */
const roles = [
  {
    Id: 1,
    Name: "System Administrator",
    Parent: 0,
  },
  {
    Id: 2,
    Name: "Engineering Manager",
    Parent: 1,
  },
  {
    Id: 3,
    Name: "Commerce Manager",
    Parent: 1,
  },
  {
    Id: 4,
    Name: "Intern Developer",
    Parent: 7,
  },
  {
    Id: 5,
    Name: "Human Resource Manager",
    Parent: 1,
  },
  {
    Id: 6,
    Name: "Junior Developer",
    Parent: 2,
  },
  {
    Id: 7,
    Name: "Senior Developer",
    Parent: 2,
  },
  {
    Id: 8,
    Name: "Mid Level Developer",
    Parent: 2,
  },
  {
    Id: 9,
    Name: "Project Manager",
    Parent: 1,
  },
  {
    Id: 10,
    Name: "Associate Human Resource Manager",
    Parent: 5,
  },
  {
    Id: 11,
    Name: "Junior Business Analyst",
    Parent: 3,
  },
  {
    Id: 12,
    Name: "Mid Level Business Analyst",
    Parent: 3,
  },
  {
    Id: 13,
    Name: "Senior Business Analyst",
    Parent: 3,
  },
  {
    Id: 14,
    Name: "Intern Business Analyst",
    Parent: 13,
  },
];

const users = [
  {
    Id: 1,
    Name: "Test Admin",
    Role: 1,
  },
  {
    Id: 2,
    Name: "Test Eng Manager",
    Role: 2,
  },
  {
    Id: 3,
    Name: "Test HR Manager 1",
    Role: 5,
  },
  {
    Id: 4,
    Name: "Test HR Manager 2",
    Role: 5,
  },
  {
    Id: 5,
    Name: "Test Commerce Manager",
    Role: 3,
  },
  {
    Id: 6,
    Name: "Test Senior Developer 1",
    Role: 7,
  },
  {
    Id: 7,
    Name: "Test Senior Developer 2",
    Role: 7,
  },
  {
    Id: 8,
    Name: "Test Senior Developer 3",
    Role: 7,
  },
  {
    Id: 9,
    Name: "Test Mid Developer 1",
    Role: 8,
  },
  {
    Id: 10,
    Name: "Test Mid Developer 2",
    Role: 8,
  },
  {
    Id: 11,
    Name: "Test Mid Developer 3",
    Role: 8,
  },
  {
    Id: 12,
    Name: "Test Junior Developer 1",
    Role: 6,
  },
  {
    Id: 13,
    Name: "Test Junior Developer 2",
    Role: 6,
  },
  {
    Id: 14,
    Name: "Test Junior Developer 3",
    Role: 6,
  },
  {
    Id: 15,
    Name: "Test Senior Analyst 1",
    Role: 13,
  },
  {
    Id: 16,
    Name: "Test Senior Analyst 2",
    Role: 13,
  },
  {
    Id: 17,
    Name: "Test Senior Analyst 3",
    Role: 13,
  },
  {
    Id: 18,
    Name: "Test Mid Analyst 1",
    Role: 12,
  },
  {
    Id: 19,
    Name: "Test Mid Analyst 2",
    Role: 12,
  },
  {
    Id: 20,
    Name: "Test Mid Analyst 3",
    Role: 12,
  },
  {
    Id: 21,
    Name: "Test Junior Analyst 1",
    Role: 11,
  },
  {
    Id: 22,
    Name: "Test Junior Analyst 2",
    Role: 11,
  },
  {
    Id: 23,
    Name: "Test Junior Analyst 3",
    Role: 11,
  },
  {
    Id: 24,
    Name: "Test Intern Analyst",
    Role: 14,
  },
  {
    Id: 25,
    Name: "Test Intern Developer",
    Role: 4,
  },
  {
    Id: 26,
    Name: "Test Associate HR Manager",
    Role: 10,
  },
  {
    Id: 27,
    Name: "Project Manager",
    Role: 9,
  },
];

export const data3 = {
  roles: roles,
  users: users,
};
