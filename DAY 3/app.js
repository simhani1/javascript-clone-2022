//함수로 인자를 전달하는 방법
function introduce(nameOfPerson, age) {
  console.log("hello my name is " + nameOfPerson + " and I'm " + age);
}

introduce("nico", 10);
introduce("simhani1", 14);
introduce("kevin", 15);

//example
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function devide(a, b) {
  console.log(a / b);
}
plus(8, 14); //계산 결과를 출력
devide(98, 20);

//example 2
const player = {
  name: "simhani1",
  //object로 함수를 사용하는 방법
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("kevin");

//함수의 반환값
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  devide: function (a, b) {
    return a / b;
  },
  product: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(40, 6);
const substractResult = calculator.substract(40, 6);
const devideResult = calculator.devide(addResult, substractResult);
console.log(devideResult);

//if문
//사용자에게 값을 직접 입력받음
//하지만 요즘엔 잘 사용을 하지 않음
const age = prompt("How old are you?");

//paserInt => 문자열을 정수형으로 변환
console.log(typeof age, typeof parseInt(age));
console.log(age, parseInt(age));

console.log(isNaN(age)); //NaN일 경우 true를 반환

//if-else 문
if (isNaN(age) || age < 0) {
  console.log("Please write a correct number");
} else if (age < 18) {
  console.log("You're too young");
} else if (18 <= age && age <= 50) {
  console.log("You can drink");
} else if (50 < age && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (80 < age) {
  console.log("Tou can do whatever you want");
}
