// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.constructor.name;
    };
};

module.exports = Employee;