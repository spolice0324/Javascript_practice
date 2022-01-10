const month = { time: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
    
    //let => 재선언x , 재할당o
    //const => 재선언x, 재할당x, 만약에라도 값을 바꾸고 싶다면 객체를 활용하여 
    //객체의 프로퍼티를 선언해주어서,,, 그 프로퍼티를 바꾸는 행위로 꼼수를 부릴 수 있다.

    

    day = newDay;
    month.time = newMonth;
    
}
timeWarp(5, 10);
console.log(month.time, day);
timeWarp(11, 20);
console.log(month.time, day);