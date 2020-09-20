import { data3 } from "src/data/data3";
import { UserSystem } from "src/controller/UserSystem";
export default function () {
  console.log(
    "\n===============================================================\n"
  );
  console.log("Test Set 4 - Custom Structure Error Checking");
  console.log(`
  * Test Case With even more extra role (same with test 3), except testing for error\n
  * Junior, Mid level and Senior Employee (Developer and Business Analyst) all are direct subordinates of Manager\n
  * Intern is direct subordinate of Senior Employee\n
  * Human Resource Manager reports to System Admin\n
  * Associate Human Resource Manager reports to Human Resource Manager\n`);

  console.log(data3);
  const userSystem = new UserSystem(data3.users, data3.roles);

  console.log("\nget Subordinates of userId -1, print Invalid User");
  try {
    console.log(userSystem.getSubordinates(-1));
    console.log("Test 4 failed");
    process.exit(1);
  } catch (e) {
    console.error(e);
  }
  console.log('\nget Subordinates of userId "1", print Invalid User');
  try {
    console.log(userSystem.getSubordinates("1"));
    console.log("Test 4 failed");
    process.exit(1);
  } catch (e) {
    console.error(e);
  }
  console.log("\nget Subordinates of userId null, print Invalid User");
  try {
    console.log(userSystem.getSubordinates(null));
    console.log("Test 4 failed");
    process.exit(1);
  } catch (e) {
    console.error(e);
  }
  console.log("\nget Subordinates of userId undefined, print Invalid User");
  try {
    console.log(userSystem.getSubordinates(undefined));
    console.log("Test 4 failed");
    process.exit(1);
  } catch (e) {
    console.error(e);
  }

  console.log("\nTest 4 success");
  console.log(
    "\n===============================================================\n"
  );
}
