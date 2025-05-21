for(var i=0; i<=10; i++){
    console.log(i);
}



var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);


let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}


let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}



// Function to check prime number

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);




function outerFunction() {
    let counter = 0;
  
    function innerFunction() {
      counter++;
      return counter;
    }
  
    return innerFunction;
  }
  
  const incrementCounter = outerFunction();
  
  console.log(incrementCounter()); // 1
  console.log(incrementCounter()); // 2
  console.log(incrementCounter()); // 3


  let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
let thirdobj={}

thirdobj.__proto__ == rabbit

console.log(rabbit.eats); // Output: true
console.log(rabbit.jumps); // Output: true



let animl = {
    walk() {
      console.log("Animl walk");
    }
  };
  
  let rabbit = {
    __proto__: animl
  };
  
  // Overriding walk method
  rabbit.walk = function() {
    console.log("Rabbit hops");
  };
  
  rabbit.walk(); 
  animl.walk();



var employee1 = { firstName: "pawan", lastName: "kumar" };
var employee2 = { firstName: "charan", lastName: "gowd" };

function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

invite.call(employee1, "Hello", "How are you?");
invite.apply(employee2, ["Hello", "How are you?"]);

var inviteEmployee1 = invite.bind(employee1);
inviteEmployee1("Hello", "How are you?");