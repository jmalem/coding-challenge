import { data1 } from "../data/data1";
import { UserSystem } from "../controller/UserSystem";
export default function () {
  const userSystem = new UserSystem(data1.users, data1.roles);
  console.log(userSystem.getSubordinates(3));
  console.log(userSystem.getSubordinates(2));
  console.log(userSystem.getSubordinates(1));
  console.log(userSystem.getSubordinates(0));
}
