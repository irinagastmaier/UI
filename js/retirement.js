// Basic Retirement Plan Calculation

//CLASS + CONSTRUCTOR + CLOSURES

class retirement {
    constructor(name, age,ret_age, wage, per_saved) {
        this.name = name;
        this.age = age;
        this.ret_age = ret_age;
        this.wage = wage;
        this.per_saved = per_saved;    
}
info() {
    console.log(`My name is ${this.name} and I am ${this.age} years old. My montly wage is ${this.wage} EUR and I am able to save ${this.per_saved}% of it.`);
}
result() {
    if (this.age >= this.ret_age) {
    console.log("You’re already retired!");

} else {
    let retire      = this.ret_age - this.age;
    let percentage       = this.per_saved * 0.01;
    let montly_income = this.wage * percentage;

    let result = (this.ret_age - this.age) * (this.wage * percentage * 12);
    console.log
    (`Years to retire: ${retire}
Montly income: ${montly_income} EUR
Saved until retires:  ${result} EUR
    `);
}
} 
}
let personx = new retirement('lady', 40, 65, 2000, 5);
personx.info();
personx.result();
/*
My name is lady and I am 40 years old. My montly wage is 2000 EUR and I am able to save 5% of it.
Years to retire: 25
Montly income: 100 EUR
Saved until retires?  30000 EUR
*/
let person1 = new retirement('Agata', 26, 60, 3000, 10);
person1.info();
person1.result()
let person2 = new retirement('John',70, 65, 500, 0.5 );
person2.info();
person2.result()