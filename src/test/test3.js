import { data3 } from "src/data/data3";
import { UserSystem } from "src/controller/UserSystem";
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
    `\nget Subordinates of Engineering Manager, will return senior developer(1-3),
     midlevel developer (1-3), junior developer (1-3), and intern developer.
     roleId 6, 7, 8, 9, 10, 11, 12, 13, 14, 25`
  );

  const result = userSystem.getSubordinates(2);
  const expectedId = [6, 7, 8, 9, 10, 11, 12, 13, 14, 25];
  result.forEach((e) => {
    if (!expectedId.includes(e["Id"])) {
      console.log("Test 3 failed");
      process.exit(1);
    }
  });
  if (result.length == 0) {
    console.log("Test 3 failed");
    process.exit(1);
  }
  console.log(result);

  console.log(
    "\nget Subordinates of Commerce Manager, will return senior analyst(1-3), midlevel analyst (1-3), junior analyst (1-3), and intern analyst"
  );

  const result1 = userSystem.getSubordinates(5);
  const expectedId1 = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  result1.forEach((e) => {
    if (!expectedId1.includes(e["Id"])) {
      console.log("Test 3 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result1.length == 0) {
    console.log("Test 3 failed - empty result");
    process.exit(1);
  }
  console.log(result1);

  console.log(
    "\nget Subordinates of HR Manager, will return Associate HR Manager"
  );

  const result2 = userSystem.getSubordinates(3);
  const expectedId2 = [26];
  result2.forEach((e) => {
    if (!expectedId2.includes(e["Id"])) {
      console.log("Test 3 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result2.length == 0) {
    console.log("Test 3 failed - empty result");
    process.exit(1);
  }
  console.log(result2);

  console.log("\nget Subordinates of Project Manager, will return nothing");
  const result3 = userSystem.getSubordinates(27);
  if (result3.length != 0) {
    console.log("Test 3 failed - incorrect output");
    process.exit(1);
  }
  console.log(result3);

  console.log(
    "\nget Subordinates of Senior Developer, will return Intern Developer"
  );
  const result4 = userSystem.getSubordinates(8);
  const expectedId4 = [25];
  result4.forEach((e) => {
    if (!expectedId4.includes(e["Id"])) {
      console.log("Test 3 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result4.length == 0) {
    console.log("Test 3 failed - empty result");
    process.exit(1);
  }
  console.log(result4);

  console.log(
    "\nget Subordinates of Senior Analyst, will return Intern Analyst"
  );
  const result5 = userSystem.getSubordinates(15);
  const expectedId5 = [24];
  result5.forEach((e) => {
    if (!expectedId5.includes(e["Id"])) {
      console.log("Test 3 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result5.length == 0) {
    console.log("Test 3 failed - empty result");
    process.exit(1);
  }
  console.log(result5);

  console.log(
    "\nget Subordinates of System Admin, will return the whole array excluding system admin itself"
  );
  const result6 = userSystem.getSubordinates(1);
  const notExpectedId = 1; // Must not return user Id of admin
  result6.forEach((e) => {
    if (e["Role"] === notExpectedId) {
      console.log("Test 3 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result6.length == 0) {
    console.log("Test 3 failed - empty result");
    process.exit(1);
  }
  console.log(result6);
  console.log("\nTest 3 success");
  console.log(
    "\n===============================================================\n"
  );
}
