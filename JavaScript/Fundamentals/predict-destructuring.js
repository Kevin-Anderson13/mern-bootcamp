const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Output 1 : Tesla
// Output 2 : Mercedes


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Output 1 : name is not defined.  Needs to be defined as it's own variable to console.log
// Output 2 : Elon


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

// Output 1 : 12345
// Output 2 : undefined  'A new variable called hashedPassword was created and added to person, but it does not have a value in this code'


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Output 1 : false 
// Output 2 : true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Output 1 : value
// Output 2 : [1, 5, 1, 8, 3, 3]
// Output 3 : 1
// Output 4 : 5

