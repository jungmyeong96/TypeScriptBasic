/* 잘못된 예제  */

/*
let user:object;

user = {
    name : "xx",
    age : 30
}

console.log(user.name);
*/

/* interface를 쓰는 이유 */

let person = { name: "Capt", age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}

function logname(obj: { name: string }) {
    console.log(obj.name); // 28
  }

logAge(person); // 28
logname(person); // 28

//위 처럼 함수의 param에 객체의 속성 타입을 정의 할 수 있습니다.

interface personAge {
    name : string;
    age: number;
  }
  
  function InterLogAge(obj: personAge) {
    console.log(obj.age);
  }
  let person2 : personAge = { name: "Capt", age: 28 };
  InterLogAge(person2);
//그러나 인터페이스를 사용하면 함수의 인자가 좀 더 명시적으로 바뀝니다. 또한 같은 타입을 사용할 경우 재사용이 가능합니다.
///인터페이스를 사용할 때는, 함수내에 사용할 속성에 대해서만 인터페이스를 지정해줘도됩니다.
//또한 인터페이스 내의 속성 순서를 지키지 않아도 됩니다


/*property를 정해서 객체를 표현하고자 할 때*/

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name : string;
    age : number;
    gender? : string; //몰?루 있어도 되고 없어도 괜춘함 ? 없으면 재정의할 때 에러
    readonly birthYear : number; //readonly를 통하여 재정의를 불가하게 함
    // 1 : string;
    // 2 : string;
    // 3 : string;
    // 4 : string;
    [grade:number] : Score; //값의 범위를 타입으로 정해줌
}

let user : User = {
    name : "xx",
    age : 30,
    birthYear : 1990,
    1 : 'A',
    2 : 'B',
    //3 : 'd'
}

console.log(user.age);

user.age = 10;
user.gender = "male";
//user.birthYear = 1990;

console.log(user.gender);

/* Interface의 함수화 */


interface Add {
    (num1:number, num2:number): number;
}

const add : Add = function(x:number, y:number) : number {
    return x + y;
}

console.log(add(10, 20));

interface IsAdult{
    (age:number):boolean;
}

const age:IsAdult = (age) => {
    return age > 19;
}

console.log(age(20));


/* implements */
/*  키워드는 새로운 클래스의 모양을 동일하게 정의하고 싶을 때 사용한다. 
따라서, interface로 정의한 값들은 모두 필수적으로 들어가야 하며, 하나라도 빠질 경우 에러를 반환한다.
 타입으로 지정한 메서드 모두 내부에서 재정의가 필요하다 */


interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string)
    {
        this.color = c;
    }
    start(): void {
        console.log("go..");
    }
}

const b = new Bmw('green');
console.log(b);
b.start();

/* Extends */
/*
키워드는 새로운 클래스의 ‘상속’을 위해 사용한다.
상위 클래스의 모든 프로퍼티와 메서드들을 갖고 있으므로 일일이 정의하지 않아도 된다. \
상위 클래스의 프로퍼티를 지정하지 않으면, 초기값으로 선언되며 에러는 반환하지 않는다.
*/

interface Toy {
    name: string;
}

interface Toycar extends Car, Toy {
    price : number;
}

interface Benz extends Car {
    door : number;
    stop() : void;
}

//객체화
// const benz : Benz = {
//     door : 5,
//     stop(){
//         console.log('stop');
//     },
//     color : 'black',
//     wheels : 4,
//     start(): void {
//         console.log("go..");
//     }
// }

class benz implements Benz {
    door : 5;
    stop(){
        console.log('stop');
    };
    color : 'black';
    wheels : 4;
    start(): void {
        console.log("go..");
    }
}