export class Role {
  constructor(id, name, parent) {
    this.id = id;
    this.name = name;
    this.parent = parent;
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  get parent() {
    return this.parent;
  }
}
