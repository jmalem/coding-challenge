import { data1 } from "../data/data1";
import { UserSystem } from "../controller/UserSystem";
export default function () {
  console.log(
    "\n===============================================================\n"
  );
  console.log("Test Set 1 - Normal Sample");
  console.log(`
  * Basic Test with Sample test case\n`);
  console.log(data1);
  const userSystem = new UserSystem(data1.users, data1.roles);

  console.log(
    "\nget Subordinates of user with Id 3,\n will return user with Id 2 and 5"
  );
  const result = userSystem.getSubordinates(3);
  const expectedId = [2, 5];
  result.forEach((e) => {
    if (!expectedId.includes(e["Id"])) {
      console.log("Test 1 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result.length == 0) {
    console.log("Test 1 failed - empty result");
    process.exit(1);
  }
  console.log(result);

  console.log("\nget Subordinates of user with Id 2,\n will return nothing");
  const result1 = userSystem.getSubordinates(2);
  if (result1.length != 0) {
    console.log("Test 1 failed - incorrect output");
    process.exit(1);
  }
  console.log(result1);

  console.log("\nget Subordinates of user with Id 5,\n will return nothing");
  const result2 = userSystem.getSubordinates(5);
  if (result2.length != 0) {
    console.log("Test 1 failed - incorrect output");
    process.exit(1);
  }
  console.log(result2);

  console.log(
    "\nget Subordinates of user with Id 1,\n will return user with Id 2,3,4 and 5"
  );
  const result3 = userSystem.getSubordinates(1);
  const expectedId3 = [2, 3, 4, 5];
  result3.forEach((e) => {
    if (!expectedId3.includes(e["Id"])) {
      console.log("Test 1 failed - incorrect output");
      process.exit(1);
    }
  });
  if (result3.length == 0) {
    console.log("Test 1 failed - empty result");
    process.exit(1);
  }
  console.log(result3);

  console.log("\nTest 1 success");
  console.log(
    "\n===============================================================\n"
  );
}
