export class UserSystem {
  constructor(users = [], roles = []) {
    this.users = users;
    this.roles = roles;
  }

  getSubordinates(userId) {
    let result = [];
    // Iterate the roles array, filter out the unwanted roles

    // filter from users list, O(N^2) comlexity

    return result;
  }

  getFilteredRoles() {}

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
