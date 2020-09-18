/**
 * Sample Test Case Given
 */
const roles = [
  {
    Id: 1,
    Name: "System Administrator",
    Parent: 0,
  },
  {
    Id: 2,
    Name: "Location Manager",
    Parent: 1,
  },
  {
    Id: 3,
    Name: "Supervisor",
    Parent: 2,
  },
  {
    Id: 4,
    Name: "Employee",
    Parent: 3,
  },
  {
    Id: 5,
    Name: "Trainer",
    Parent: 3,
  },
  {
    Id: 6,
    Name: "Junior Employee",
    Parent: 3,
  },
  {
    Id: 7,
    Name: "Senior Employee",
    Parent: 3,
  },
  {
    Id: 8,
    Name: "Mid Level Employee",
    Parent: 3,
  },
];

const users = [
  {
    Id: 1,
    Name: "Adam Admin",
    Role: 1,
  },
  {
    Id: 2,
    Name: "Emily Employee",
    Role: 4,
  },
  {
    Id: 3,
    Name: "Sam Supervisor",
    Role: 3,
  },
  {
    Id: 4,
    Name: "Mary Manager",
    Role: 2,
  },
  {
    Id: 5,
    Name: "Steve Trainer",
    Role: 5,
  },
  {
    Id: 6,
    Name: "Test Employee",
    Role: 5,
  },
  {
    Id: 7,
    Name: "Test Employee 1",
    Role: 6,
  },
  {
    Id: 8,
    Name: "Test Employee 2",
    Role: 7,
  },
  {
    Id: 9,
    Name: "Test Employee 3",
    Role: 8,
  },
];

export const data2 = {
  roles: roles,
  users: users,
};
