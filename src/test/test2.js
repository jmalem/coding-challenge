import { data2 } from "src/data/data2";
import { UserSystem } from "src/controller/UserSystem";
export default function () {
  console.log(
    "\n===============================================================\n"
  );
  console.log("Test Set 2 - Add Extra Role");
  console.log(`
  * Extension of the sample test case,\n
  * Junior, Mid level and Senior Employee all are direct subordinates of Supervisor\n`);
  console.log(data2);
  const userSystem = new UserSystem(data2.users, data2.roles);

  console.log(
    "\nget Subordinates of user wiht Id 4, will user with Id 2, 3, 5, 6, 7, 8 and 9"
  );
  const result = userSystem.getSubordinates(4);
  const expectedId = [2, 3, 5, 6, 7, 8, 9];
  result.forEach((e) => {
    if (!expectedId.includes(e["Id"])) {
      console.log("Test 2 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result.length == 0) {
    console.log("Test 2 failed - empty result");
    process.exit(1);
  }
  console.log(result);

  console.log(
    "\nget Subordinates of user with Id 3, will return user with Id 2, 5, 6, 7, 8 and 9"
  );
  const result1 = userSystem.getSubordinates(3);
  const expectedId1 = [2, 5, 6, 7, 8, 9];
  result1.forEach((e) => {
    if (!expectedId1.includes(e["Id"])) {
      console.log("Test 2 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result1.length == 0) {
    console.log("Test 2 failed - empty result");
    process.exit(1);
  }
  console.log(result1);

  console.log("\nget Subordinates of user with Id 2, will return nothing");
  const result2 = userSystem.getSubordinates(2);
  if (result2.length != 0) {
    console.log("Test 2 failed - incorrect output");
    process.exit(1);
  }
  console.log(result2);

  console.log(
    "\nget Subordinates of user with Id 1, will return user with Id 2, 3, 4, 5, 6, 7, 8 and 9"
  );
  const result3 = userSystem.getSubordinates(1);
  const expectedId3 = [2, 3, 4, 5, 6, 7, 8, 9];
  result3.forEach((e) => {
    if (!expectedId3.includes(e["Id"])) {
      console.log("Test 2 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result3.length == 0) {
    console.log("Test 2 failed - empty result");
    process.exit(1);
  }
  console.log(result3);

  console.log("\nget Subordinates of user with Id 9, will return nothing");
  const result4 = userSystem.getSubordinates(9);
  if (result4.length != 0) {
    console.log("Test 2 failed - incorrect output");
    process.exit(1);
  }
  console.log(result4);

  console.log("\nTest 2 success");
  console.log(
    "\n===============================================================\n"
  );
}
