// Задача 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 сначала выполняется сложение до 2, а потом уже возврат переменной
d = b++; alert(d); // 1 сначала идет возврат переменной, а потом сложение  до 2
c = (2+ ++a); alert(c); // 5 т.к. а уже равно 2, то переменную увеличили до 3, а потом прибавили к 2
d = (2+ b++); alert(d); // 4 т.к к 2 прибавляется b=2, возврат идет 4, а позже b увеличиватеся до 3
alert(a); // 3 т.к. переменную увеличивали два раза на 1
alert(b); // 3 т.к. переменную увеличивали два раза на 1

// Задача 2
var a = 2;
var x = 1 + (a *= 2);// 5 т.к. сначала а умножаем на 2, потом прибавляем 1

// Задача 3
let a = 3;
let b = -5;
if (a >= 0 && b >= 0) {
	alert(a - b);
} else if(a < 0 && b < 0){
	alert(a * b);
} else {
	alert(a + b);
}

// Задача 4
let a = 0;

switch (a) {
	case 0:
		alert(a++);
		
	case 1:
		alert(a++);
		
	case 2:
		alert(a++);
		
	case 3:
		alert(a++);
		
	case 4:
		alert(a++);
		
	case 5:
		alert(a++);
		
	case 6:
		alert(a++);
		
	case 7:
		alert(a++);
		
	case 8:
		alert(a++);
		
	case 9:
		alert(a++);
		
	case 10:
		alert(a++);
		
	case 11:
		alert(a++);
		
	case 12:
		alert(a++);
		
	case 13:
		alert(a++);
		
	case 14:
		alert(a++);
		
	case 15:
		alert(a++);
		break;
}

// задача 5 
let arg1 = +prompt('Введите первую переменную:');
let arg2 = +prompt('Введите вторую переменную:');
function sum(arg1,arg2) {
	return arg1 +  arg2;
}
function raz(arg1,arg2) {
	return arg1 - arg2;
}
function del(arg1,arg2) {
	return arg1 / arg2;
}
function proi(arg1,arg2) {
	return arg1 * arg2;
}
alert( sum(arg1,arg2) );
alert( raz(arg1,arg2) );
alert( del(arg1,arg2) );
alert( proi(arg1,arg2) ); 

// задача 6
let arg1 = +prompt('Введите первую переменную:');
let arg2 = +prompt('Введите вторую переменную:');

function sum(arg1,arg2) {
	return arg1 +  arg2;
}
function raz(arg1,arg2) {
	return arg1 - arg2;
}
function del(arg1,arg2) {
	return arg1 / arg2;
}
function proi(arg1,arg2) {
	return arg1 * arg2;
}

let operation = prompt('Выберите одну из операций: sum, raz, del, proi');
function mathOperation(arg1, arg2, operation){
	switch(operation){
		case 'sum':
			return sum(arg1,arg2);
			break;
		case 'raz':
			return raz(arg1,arg2);
			break;
		case 'del':
			return del(arg1,arg2);
			break;
		case 'proi':
			return proi(arg1,arg2);
			break;	
		default: return 'неправильно записал условие'	
	}
}
alert('Полученный результат: ' + mathOperation(arg1, arg2, operation));

//Задача 7
alert(null == 0); //false т.к. при равенстве null приводится не к числу, а к undefine
alert(null > 0); //false число null приводится к числу 0, а 0 не больше и не меньше 0
alert(null < 0); //false число null приводится к числу 0, а 0 не больше и не меньше 0
alert(null <= 0); //true число null приводится к числу 0, а 0 меньше, либо РАВЕН 0
alert(null >= 0); //true число null приводится к числу 0, а 0 больше, либо РАВЕН 0

//Задача 8
let val = +prompt('Введите число:');
let pow = +prompt('Введите степень:');
function power(val, pow){
	if (pow !=1) {
		return val*power(val, pow -1);
	} else {
		return val
	}
}
alert( power(val, pow) );