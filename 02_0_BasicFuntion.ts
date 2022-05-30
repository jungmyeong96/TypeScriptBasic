/*함수*/

/* optional parameter */

function hello(name?: string)
{
    return `Hello, ${name || "world"}`;
}

function hello2(name = "world")
{
    return `Hello, ${name}`;
}


function hello3(age: number | undefined, name: string): string {
    if (age != undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello, ${name}`;
    }
}

function add2(...nums: number[]) {
    return nums.reduce((results, num) => results * num, 0);
}

const result = hello();
const result2 = hello("sam");
const result3 = hello2("sam");
const result4 = hello3(undefined, "sam");

console.log(add2(1, 3, 5, 7));


/* this */

interface User2 {
    name : string;
}

const sam: User2 = {name: "sam"}

function showName(this:User2, age:number, gender:'m'|'f') {
    console.log(this.name, age, gender);
}

const a = showName.bind(sam);
a(30, "m");


/* function overloading */

interface User6 {
    name : string;
    age : number;
}

function join(name: string, age: string ): string ;
function join(name: string, age: number ): User6 ;
function join(name: string, age: number | string ): User6 | string {
    if (typeof age === "number") { //동치연산자
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요";
    }
}

const james: User6 = join("james", 30);
const jane : string = join("jane", "30");

console.log(james);
console.log(jane);