
export function setTimer(callback, timeout){
    let count = 0;

    function recursive(){
        const timeoutID = setTImeout(() => {
            let ret = callback(count);
            if(! ret)
                clearTimeout(timeoutID);
            else
                recursive();

            count ++;     
     }, timeout);

    }

    recursive();

}

