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
  console.log(userSystem.getSubordinates(3));

  console.log("\nget Subordinates of user with Id 2,\n will return nothing");
  console.log(userSystem.getSubordinates(2));

  console.log("\nget Subordinates of user with Id 5,\n will return nothing");
  console.log(userSystem.getSubordinates(5));

  console.log(
    "\nget Subordinates of user with Id 1,\n will return user with Id 2,3,4 and 5"
  );
  console.log(userSystem.getSubordinates(1));

  console.log("\nTest 1 success");
  console.log(
    "\n===============================================================\n"
  );
}
