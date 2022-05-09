

//fail 상태 -> a번 삶기 실패와 재시도의 연속이 이어지고 있는 코드 상태임. 수정 필요


function randomFail() {
    return (Math.random() < 0.2)
} 
    let fail_case = randomFail();

const A_step = {
    'a1. 면 삶기' : 10000,
};
const B_step = {
    'b1. 브로콜리 데치기' : 1000,
    'b2. 마늘과 양파 볶기' : 2000,
    'b3. 베이컨과 햄 볶기' : 2000,
    'b4 소스, 남은 야채 넣고 다같이 볶기' : 3000,
};
const C_step = {
    'c1. 면까지 넣고 다 같이 볶기': 3000,
};

let checkA = false;
let checkB = false; 


function A_step_making() {
    let step_set = Object.keys(A_step)[0];
    return promise = new Promise((resolve, reject) => {
        console.log(`${step_set}`);
        setTimeout(() => {
            if (!fail_case)
                resolve();
            else 
                reject();
        }, step[step_set]);
    })
    .then(()=> {
        console.log(`${step_set} A_step 끝남`);
        checkA = true;
        if(checkB == true) 
                C_step_making();
        
    })
    .catch(()=>{
        console.log('A과정 실패 재시도');
        return A_step_making();
    });

}

const B_step_making = (step) => {
    let step_set = Object.keys(B_step)[step];
    let promise =  new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (!fail_case)
                resolve();
            else
                reject();
        }, step[b_stepName]);
    })
    .then(() => {
        console.log(`${b_stepName} B_step 끝남`);
        checkB = true;
        if (checkA == true) C_step_making();

    })
    .catch(()=> {
        console.log(`${b_stepName} B_step 실패 재시도`);
        return B_step_making();
    });
};


const C_step_making = () => {
    return new Promise((resolve, reject) => {
        let c_stepName = Object.keys((C_step)[0]);
        setTimeout(() => {
            if (!fail_case)
                resolve();
            else
                reject();
        }, step[c_stepName]);
    })
    .then(()=>{
        console.log(`${stepName} C_step 성공! 요리가 완성되었음`);
    })
    .catch(() => {
        console.log(`${c_stepName} C_step 실패 재시도`);
        return C_step_making();
    });
}

A_step_making();
B_step_making(0);