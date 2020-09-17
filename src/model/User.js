export class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }
}
