'use strict'

//promise - 자바스크립트 안에 내장 되어져 있는 object
//비동기적인 기능을 수행할 때 콜백함수 대신에 유용할게 쓸 수 있음 
// - Point 
//1. state => 상태에 대해 이해하기   pending -> fulfilled or rejected
//2. producer와 consumer의 차이점을 이해하기

//1. Producer
const promise = new Promise((resolve, reject) =>{  
    console.log('doing something,,,,');
    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

//2.Consumer: then, catch, finally

promise.then((value) => { 
    console.log(value)
})
.catch(error)