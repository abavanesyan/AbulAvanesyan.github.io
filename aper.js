let number1;
let number2;

function sum() {
	number1 = Number(document.getElementById("n1").value);
	number2 = Number(document.getElementById("n2").value);
	let sum = number1 + number2;

	if (number1 > number2) {
		document.getElementById("main_div").innerHTML = "Sum = " + sum;
	} else {
		document.getElementById("main_div").innerHTML = "Number1 is smaller than Number2";
	} 
}

function difference() {
	number1 = Number(document.getElementById("n1").value);
	number2 = Number(document.getElementById("n2").value);
	let dif = number1 - number2;
	
	if (number1 > number2) {
		document.getElementById("main_div").innerHTML = "Difference = " + dif;
	} else {
		document.getElementById("main_div").innerHTML = "Number1 is smaller than Number2";
	} 
}

function product() {
	number1 = Number(document.getElementById("n1").value);
	number2 = Number(document.getElementById("n2").value);
	let product = number1 * number2;
	
	if (number1 > number2) {
		document.getElementById("main_div").innerHTML = "Product = " + product;
	} else {
		document.getElementById("main_div").innerHTML = "Number1 is smaller than Number2";
	} 
}

function quotient() {
	number1 = Number(document.getElementById("n1").value);
	number2 = Number(document.getElementById("n2").value);
	let quotient = number1 / number2;
	
	if (number1 > number2) {
		document.getElementById("main_div").innerHTML = "Quotient = " + quotient;
	} else {
		document.getElementById("main_div").innerHTML = "Number1 is smaller than Number2";
	} 
}

function remainder() {
	number1 = Number(document.getElementById("n1").value);
	number2 = Number(document.getElementById("n2").value);
	let remainder = number1 % number2;
	
	if (number1 > number2) {
		document.getElementById("main_div").innerHTML = "Remainder = " + remainder;
	} else {
		document.getElementById("main_div").innerHTML = "Number1 is smaller than Number2";
	} 
}

function consolel() {
	number1 = document.getElementById("yname").value;
	number2 = document.getElementById("yage").value;
	
	console.log("My name is " + number1 + ", I am " + number2);
}

function neg() {
	number1 = Number(document.getElementById("neg").value);
	if (number1 < 0) {
		document.getElementById("main_div1").innerHTML = "Yes";
	} else {
		document.getElementById("main_div1").innerHTML = "No";
	} 

}

function odd() {
	number1 = Number(document.getElementById("odd").value);
	if (number1 % 2 == 0) {
		document.getElementById("main_div2").innerHTML = "Even";
	} else {
		document.getElementById("main_div2").innerHTML = "Odd";
	} 
}

function division() {
	number1 = Number(document.getElementById("divis1").value);
	number2 = Number(document.getElementById("divis2").value);
	
	if (number1 % number2 == 0 || number2 % number1 == 0) {
		document.getElementById("main_div3").innerHTML = 1;
	} else {
		document.getElementById("main_div3").innerHTML = 0;
	} 
}

