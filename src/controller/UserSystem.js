import _ from "lodash";
export class UserSystem {
	constructor(users, roles) {
		this.users = users;
		this.roles = roles;
	}

	getSubordinates(userId) {
		let result = [];
		// Iterate the roles array, filter out the unwanted roles

		// filter from users list
		return result;
	}

	getChildRoles(roleId = 0) {
		if (_.isNil(roleId)) {
			throw "Invalid role Id";
		}
		if (roleId < 1) {
			throw "Invalid role Id";
		}
		const roles = _.clone(this.roles);

		const path = [];
		const q = [];

		// Index of the currentRoot
		let root = roles.find((e) => e["Id"] === roleId);

		// current role Id
		let rootId = root["Id"];

		q.push(rootId);
		while (q.length > 0) {
			// console.log(q);
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
		console.log(path);
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
