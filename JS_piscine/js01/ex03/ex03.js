const allMenu = document.querySelectorAll('li');
Array.from(allMenu).forEach(menu=>{
    menu.addEventListener('click', alertWindow);
    menu.addEventListener('mouseover', onMouseOn);
    menu.addEventListener('mouseout', onMouseOut);
});


function onMouseOn(e){  // 마우스를 올렸을 때 이벤트 발생 함수
    e.stopPropagation();
    e.target.style.backgroundColor = 'red';
}

function onMouseOut(e) // 마우스 뗐을 때 이벤트 발생 함수
{ 
    e.stopPropagation();
    e.target.style.backgroundColor = 'cornflowerblue'
}

function alertWindow(e) // 메뉴 선택시 알림창
{
    const select = e.target.parentElement.parentElement;
    const selectSection = select.querySelector('h2').innerText;
     alert(`${e.target.innerText}(을)를 선택하셨습니다!`)
}