//ques1
function zeroParameter() {
	console.log(`I am a function with zero parameters`);
}
zeroParameter();

//ques2
function twoParameters(param1, param2) {
	console.log(`Sum of ${param1}, ${param2} is ${param1 + param2}`);
	// document.querySelector(
	// 	'div'
	// ).innerHTML = `Sum of ${val1}, ${val2} is ${result}`;
}
twoParameters(3, 4);

//ques3
//method 1
let arrowFunct = () => {
	return `I am an arrow function`;
};
console.log(arrowFunct());

//method 2
let arrowFunction = () => {
	console.log(`I am an arrow function`);
};
arrowFunction();

//ques4
var x = 21;
var girl1 = function () {
	console.log(x);
	var x = 20;
};
girl1();

//ques5
var y = 21;
girl2();
console.log(y);
function girl2() {
	console.log(y);
	var y = 20;
}

//ques6
var ques6 = 21;
a();
b();

function a() {
	ques6 = 20;
	console.log(ques6);
}
function b() {
	ques6 = 40;
	console.log(ques6);
}

//ques7
function factorial(n) {
	return n == 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(3));

//Day 2
//ques1
function FindSum(a, b) {
	return a + b;
}

function DisplayData(data, batch) {
	console.log(`i am from ${data} and My batch is EA${batch}`);
}
DisplayData('PrepBytes', FindSum(10, 9));

//ques2
//Abc(); we get an error
const Abc = function () {
	let value = 20;
	console.log(value);
};

//ques3
var a = 10;
(function () {
	console.log(a);
	var a = 20;
})();

//ques4
const greet = function (name) {
	return function (m) {
		console.log(`Hi!! ${name}, ${m}`);
	};
};

const greet_message = greet('EA19');
greet_message('Welcome To PrepBytes');

// var x = 21;
// girl();
// console.log(x);
// function girl() {
// 	console.log(x);
// 	var x = 20;
// }

// var x = 21;
// a();
// b();

// function a() {
// 	x = 20;
// 	console.log(x);
// }
// function b() {
// 	x = 40;
// 	console.log(x);
// }
// // let num1 = document.querySelector('#num1');
// // let num2 = document.querySelector('#num2');
// // let add = document.querySelector('button');
// // let textDisplay = document.querySelector('p');

// // add.addEventListener('click', () => {
// // 	let result = parseInt(num1.value) + parseInt(num2.value);
// // 	textDisplay.innerHTML = `${result}`;
// // });
