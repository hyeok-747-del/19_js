//함수선언
// def 함수명():
//     수행할 코드
// 함수명()

// function 함수명(){
//      수행할코드
//}
//함수명()

// function greeting() {
//   console.log("안녕하세요!");
// }
// greeting();

// console.log("함수 시작 전");
// greeting();
// console.log("함수종료");

// let width1 = 10;
// let height1 = 20;
// let area = width1 * height1

// let width2 = 100;
// let height2 = 200;
// let area = width2 * height2

// console.log("면적:", area1);
// console.log("면적:", area2);

// function greeting() {
//   let width1 = 10;
//   let height1 = 20;
//   let area = width1 * height1;

//   console.log(area);
// }
// getarea();

// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }

// let result = getArea(10, 20);
// console.log(result);

// 중첩함수
// function greeting() {
//   function greetingWithName(name) {
//     console.log(`hello! ${name}`);
//   }
//   let name = "이정환";
//   greetingWithName(name);
// }
// greeting();

//함수와 호이스팅

// func();

// function greeting() {
//   console.log("hello");
// }

// 함수 표현식
// let greeting = function () {
//   console.log("hello");
// };

// function greetFunc() {
//   console.log("안녕하세요");
// }

// greeting = greetFunc;

// let greeting();
//greeting()

//console.log(parseInt("10, 10"));

//콜백함수
//function parentFnction

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }
// repeat(5);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }

// repeatDouble(5);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function double(count) {
//   console.log(count * 2);
// }
// repeat(5, double);

//화살표 함수

//let funcA = (매개변수) => {수행할 코드}

// let greeting = (name) => `hello ${name}`;
// const greetingText = greeting("이정환");
// console.log(greetingText);

// let greeting = (name) => {
//   let greetingText = `hello ${name}`;
//   return greetingText;
// };
// console.log(greeting("이정환"));

let isConfirm = true;

function confirm(onYes, OnNO) {
  //let onYes  () => console.log("승인")

  if (isConfirm) onYes();
  else onNO();
}
confirm(
  () => console.log("승인"),
  () => console.log("거부"),
);
