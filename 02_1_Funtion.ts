/* Funtion of TS */

/*
함수의 파라미터(매개변수) 타입
함수의 반환 타입
함수의 구조 타입
*/


/* 기본 함수 타입 */

function sum(a: number, b: number): number {
    return a + b;
  }

// TIP: 함수의 반환 값에 타입을 정하지 않을 때는 void라도 사용


/* 함수의 파라미터 */
function sum2(a: number, b: number): number {
    return a + b;
  }
  sum2(10, 20); // 30
  //sum2(10, 20, 30); // error, too many parameters
  //sum2(10); // error, too few parameters


/* 함수의 파라미터 2*/
  function sum3(a: number, b?: number): number {
  return a + b;
}
  sum3(10, 20); // 30
 // sum3(10, 20, 30); // error, too many parameters
  sum3(10); // 10

/* 함수의 파라미터 3 */
function sum4(a: number, b = 100): number {
  return a + b;
}
sum4(10, undefined); // 110
//sum4(10, 20, 30); // error, too many parameters
sum4(10); // 110

/* REST 문법 */
function sum5(a: number, ...nums: number[]): number {
    let totalOfNums = 0;
    for (let key in nums) {
      totalOfNums += nums[key];
    }
    return a + totalOfNums;
  }
  sum5(1, 2, 3, 4, 5);

/* this */

interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function(this: Vue) {
    return () => {
      return this.count;
    }
  }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10