function showClock() {
    const time = document.querySelector('time');
    const date = new Date().toLocaleString()
    const datetime = new Date().toISOString();

    time.setAttribute('datetime', datetime);
    time.innerText = date;
}
showClock();

function printMenu(){
    const menuName = document.querySelector('#menuName').value;
    document.querySelector('.bill_menuName').innerText = `상품명 : ${menuName}`;
}

function printPrice(){
    const menuPrice = document.getElementById('menuPrice').value;
    document.querySelector(".bill_menuPrice").innerText = `원가 : ${menuPrice.toLocaleString()}`;
}

function checkMember(){
    
    checkMember = document.querySelector("#member").checked;
}

function checkOption(){

    const level = (document.querySelector("#membership"));
    const menuPrice = document.querySelector("#menuPrice").value;
    let discountPrice = menuPrice;
    
    

    if (checkMember === true) {
        if (level.options[level.selectedIndex].value =="lv1") discountPrice *= 0.95;
        else if (level.options[level.selectedIndex].value == 'lv2') discountPrice *= 0.9;
        else if (level.options[level.selectedIndex].value == 'lv3') discountPrice *= 0.85;
        document.querySelector('.bill_membership').innerText = `할인가 : ${discountPrice.toLocaleString()}`

    }
    else
        alert("회원이 아님");
    
    
}
