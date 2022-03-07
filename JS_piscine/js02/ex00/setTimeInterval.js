
function setTimer(callback, interval){
    let count = 0;

    const intervalID = setInterval(() => {
        let ret = callback(count);
        if(! ret)   
        clearInterval(intervalID);
        count ++;
    }, interval);
}


function printNum(count) {
    console.log(count);
    return count < 3;
}

setTimer(printNum, 100); // 0 1 2 3 <= 각각 100ms의 간격으로 출력됨.


