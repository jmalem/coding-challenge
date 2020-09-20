import { data3 } from "../data/data3";
import { UserSystem } from "../controller/UserSystem";
export default function () {
  console.log(
    "\n===============================================================\n"
  );
  console.log("Test Set 3 - Custom Structure");
  console.log(`
  * Test Case With even more extra role,\n
  * Junior, Mid level and Senior Employee (Developer and Business Analyst) all are direct subordinates of Manager\n
  * Intern is direct subordinate of Senior Employee\n
  * Human Resource Manager reports to System Admin\n
  * Associate Human Resource Manager reports to Human Resource Manager\n`);

  console.log(data3);
  const userSystem = new UserSystem(data3.users, data3.roles);

  console.log(
    "\nget Subordinates of Engineering Manager, will return senior developer(1-3), midlevel developer (1-3), junior developer (1-3), and intern developer"
  );
  console.log(userSystem.getSubordinates(2));

  console.log(
    "\nget Subordinates of Commerce Manager, will return senior analyst(1-3), midlevel analyst (1-3), junior analyst (1-3), and intern analyst"
  );
  console.log(userSystem.getSubordinates(5));

  console.log(
    "\nget Subordinates of HR Manager, will return Associate HR Manager"
  );
  console.log(userSystem.getSubordinates(3));

  console.log("\nget Subordinates of Project Manager, will return nothing");
  console.log(userSystem.getSubordinates(27));

  console.log(
    "\nget Subordinates of Senior Developer, will return Intern Developer"
  );
  console.log(userSystem.getSubordinates(8));

  console.log(
    "\nget Subordinates of Senior Analyst, will return Intern Analyst"
  );
  console.log(userSystem.getSubordinates(15));

  console.log(
    "\nget Subordinates of System Admin, will return the whole array excluding system admin itself"
  );
  console.log(userSystem.getSubordinates(1));
  console.log("\nTest 3 success");
  console.log(
    "\n===============================================================\n"
  );
}
