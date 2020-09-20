// Written by Jansen Malem
// 17/9/2020
import { UserSystem } from "./src/controller/UserSystem";
import test1 from "./src/test/test1";
import test2 from "./src/test/test2";
import test3 from "./src/test/test3";
import test4 from "./src/test/test4";

// Coding Challenge - Users Hierarchy
try {
  test1();
  test2();
  test3();
  test4();
} catch (e) {
  console.error(JSON.stringify(e));
}
