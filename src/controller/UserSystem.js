import _ from "lodash";

// Written by Jansen Malem
// 17/9/2020
export class UserSystem {
  constructor(users, roles) {
    this.users = users;
    this.roles = roles;
  }

  /**
   * Returns an array of all the direct and indirect subordinates of a user
   * given its user id
   * @param {Number} userId
   */
  getSubordinates(userId) {
    if (_.isNil(userId)) {
      throw "Invalid User - null input";
    }

    if (!_.isNumber(userId)) {
      throw "Invalid User - userId not a number";
    }

    if (userId <= 0) {
      throw "Invalid User - negative userId";
    }
    // Get user with userId
    const user = this.users.find((user) => user["Id"] === userId);

    // Iterate the roles array, filter out the unwanted roles
    const childRoles = this.getChildRoles(user["Role"]);

    // Filter out roles that belong to the childRoles
    const result = this.users.filter((user) =>
      childRoles.includes(user["Role"])
    );

    return result;
  }

  /**
   * Given a roleId, return an array of the subordinates roleIds
   * @param {*} roleId
   */
  getChildRoles(roleId = 0) {
    if (_.isNil(roleId)) {
      throw "Invalid role Id";
    }

    if (roleId < 1) {
      throw "Invalid role Id";
    }
    // create a deep copy, to avoid accidentally changing the object properties
    const roles = _.clone(this.roles);
    const path = [];
    const q = [];

    // Index of the currentRoot
    let root = roles.find((e) => e["Id"] === roleId);

    // current role Id
    let rootId = root["Id"];

    q.push(rootId);
    while (q.length > 0) {
      // Dequeue
      const currId = q.shift();

      const child = roles.filter((r) => {
        return r.Parent === currId;
      });

      child.forEach((element) => {
        // Add child to queue
        q.push(element["Id"]);

        // Add child to path
        path.push(element["Id"]);
      });
    }
    return path;
  }

  getUsers() {
    return this.users;
  }

  setUsers(users = []) {
    this.users = users;
  }
  getRoles() {
    return this.roles;
  }

  setRoles(roles = []) {
    this.roles = roles;
  }
}
