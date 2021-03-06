const recipe = {

    '1.반죽만들기': 3000,
    '2.1차 발효': 5000,
    '3.성형하기': 4200,
    '4.2차 발효': 2000,
    '5.튀기기': 5000,
    
};


function baking(step) {
    
    let stepName = Object.keys(recipe)[step];  //
    if (step !== 5) {
        setTimeout(() => {
            try {
                randomFail();
                console.log(`${stepName} 성공!`);
                baking(step + 1);
            }
            catch (error) { //randomfail 에 걸리면 catch로 내려옴
                console.log(`${stepName}, ${error}`);
                baking(step); //catch에 걸리면 baking 함수 재실행
            }
        }, recipe[stepName]); //트라이에 성공한 baking step을 recipe 배열에 저장
    }
};

baking(0); //베이킹함수 무한반복 실행

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)"; //랜덤적으로 0.2의 확률로 실패하게 함
}