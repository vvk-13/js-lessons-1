// Задача 1

/*
выводит только простые числа после 10
let a = 0;
while (a <= 100){	
		if ( (a % 2 == 0) || ( a % 3 == 0) || (a % 5 == 0) || ( a % 7 == 0) ) {
		a++;
	} else {
		console.log(a);
		a++
	}
}
*/

let arr = [];
let a = 0;
	do {
		if ( a <= 1) {
			a++;
		} else if ( (a == 2) ) {
			arr.push(a);
			a++;
		} else if (a % arr[i] == 0) { //не могу понять, как вывести i-й компонент массива
			a++;
		} else {
			arr.push(a);
			a++;
		}
	} while ( a <= 100);
console.log(arr);


// Задача 2
let b = 0;
do {
	if ( b == 0 ){
	console.log( b, "- ноль" );
	b++
} else if ( b % 2 == 0) {
	console.log( b, "- четное");
	b++
} else {
	console.log( b, "- нечетное")
	b++
}} while ( b <= 10);

// Задача 3
let c;
for (c = 0; c < 10; console.log(c++) );

//Задача 4
str = '';
for (let i = 0; i <= 20; i++){
	str += 'x';
	console.log(str);
}

//Задача 5
let purchases = [1, 4, 5];
function countPurchases(purchases) {
	let sum = 0;
	for (let i = 0; i < purchases.length; i++) {
		sum += purchases[i];
	}
	return sum;
}
console.log( countPurchases(purchases) );