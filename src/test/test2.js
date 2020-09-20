import { data2 } from "../data/data2";
import { UserSystem } from "../controller/UserSystem";
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
  console.log(userSystem.getSubordinates(4));

  console.log(
    "\nget Subordinates of user with Id 3, will return user with Id 2, 5, 6, 7, 8 and 9"
  );
  console.log(userSystem.getSubordinates(3));

  console.log("\nget Subordinates of user with Id 2, will return nothing");
  console.log(userSystem.getSubordinates(2));

  console.log(
    "\nget Subordinates of user with Id 1, will return user with Id 2, 3, 4, 5, 6, 7, 8 and 9"
  );
  console.log(userSystem.getSubordinates(1));

  console.log("\nget Subordinates of user with Id 9, will return nothing");
  console.log(userSystem.getSubordinates(9));

  console.log("\nTest 2 success");
  console.log(
    "\n===============================================================\n"
  );
}
