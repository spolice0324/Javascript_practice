let time = document.body.children[1].children[0]; //datetime

var date = new Date();
console.log(date.toLocaleTimeString('ko-KR')); //한국 옵션 추가한 Time ISO 형태 - 객체로 선언시 사용 가능하다.
time.append(date.toLocaleTimeString('ko-KR'));


let ul = document.body.children[1].children[1];
let li = document.createElement("li");
li.append("Screen: " + screen.width + " * " + screen.height);
ul.appendChild(li);
li = document.createElement("li");
li.append("Window Outer: " + window.outerWidth + " * " + window.outerHeight);
ul.appendChild(li);
li = document.createElement("li");
li.append("Window Inner: " + window.innerWidth + " * " + window.innerHeight);
ul.appendChild(li);
li = document.createElement("li");
li.append("Document: " + document.body.clientWidth + " * " + document.body.clientHeight);
ul.appendChild(li);

