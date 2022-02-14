function change() { //에너지를 10 줄이고, 색이 빨간색으로 바뀌는 함수 
    const energy = document.querySelector('.energy');
    energy.setAttribute("value", Number(energy.getAttribute("value")) - 10);
    energy.style.setProperty('--c', 'red');
}

function increase() { //5 증가 
    poo = document.querySelector(".poo");
    hungry = document.querySelector(".hungry");
    energy = document.querySelector(".energy");
    coding = document.querySelector(".coding");
    love = document.querySelector(".love");
    wash = document.querySelector(".wash");
    console.log(poo.getAttribute("value"));

    poo.setAttribute("value", Number(poo.getAttribute("value")) + 5);
    hungry.setAttribute("value", Number(hungry.getAttribute("value")) + 5);
    energy.setAttribute("value", Number(energy.getAttribute("value")) + 5);
    coding.setAttribute("value", Number(coding.getAttribute("value")) + 5);
    love.setAttribute("value", Number(love.getAttribute("value")) + 5);
    wash.setAttribute("value", Number(wash.getAttribute("value")) + 5);
}

setTimeout(change, 30000);
setTimeout(increase, 50000);