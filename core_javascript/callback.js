'use strict';

//Javascript is sysnchronous. 
//호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 하나씩 동기적으로 실행된다는 말
//hoisting - 변수나 함수 선언이 자동적으로 제일 위에 올라가는 것 , 호이스팅이 된 시점부터 코드가 나타나는 순서대로 자동적 실행

console.log(1);
console.log(2);

setTimeout(function () {
    console.log(4)
}, 1000);

console.log(3);

//call back 함수 - 우리가 전달해준 함수를 나중에 불러줘
