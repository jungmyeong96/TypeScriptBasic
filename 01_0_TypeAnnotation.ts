/* Type Annotation */

//String
let str: string = "hi";

console.log(str);

//Number
let num: number = 10;

console.log(num);


//Boolean
let isLoggedIn: boolean = false;

console.log(isLoggedIn);


//Array
let arr1: number[] = [1,2,3];

console.log(str);


//Tuple
let arr2: Array<number> = [1,2,3];

console.log(arr2);

let tup: [string, number] = ['hi', 10]; 

//tup[1].concat('!'); // Error, 'number' does not have 'concat'
//tup[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'.

//concat() 은 두 개 이상의 문자열을 추가하고 새로운 단일 문자열을 반환하는 데 사용되는  TypeScript 의 내장 함수입니다 

/*Enum*/
enum Avengers { Capt, IronMan, Thor }
let hero1: Avengers = Avengers.Capt;
let hero2: string = Avengers[0];

enum Avengers2 { Capt = 2, IronMan, Thor }
let hero3 = Avengers2[2]; // Capt
let hero4 = Avengers2[4]; // Thor


console.log(hero1);
console.log(hero2);
console.log(hero3);
console.log(hero4);

/* Any */

let anystr: any = 'hi';
let anynum: any = 10;
let anyarr: any = ['a', 2, true];

console.log(anystr);
console.log(anynum);
console.log(anyarr);

/* Void */ //변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입입니다.
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}

/* Never */
function neverEnd(): never {
    while (true) {
  
    }
  }

//neverEnd();