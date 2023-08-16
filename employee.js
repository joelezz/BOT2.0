class Employee {
    constructor(baseSalary = 0, overtime = 0, rate = 0) {
        this.baseSalary = baseSalary;
        this.overtime = overtime;
        this.rate = rate;
    }

    static getWage() {
        return baseSalary + (overtime * rate);
    }
}
let joel = new Employee.getWage(100000, 10, 20);

console.log(joel);