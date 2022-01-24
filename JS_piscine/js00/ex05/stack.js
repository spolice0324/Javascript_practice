const stackCreate = () => ({
    arr: []
});

function stackEmpty(stack) {
        return stack.arr.length === 0;
}

function stackPush(stack,data) { 
    const temp = new Array(stack.arr.length + 1);
        for(let i = 0; i < stack.arr.length; i++)
        {
            temp[i] = stack.arr[i];
        }
        temp[stack.arr.length] = data;
        stack.arr = temp;

    }

function stackPeek(stack) {

    if (stackEmpty(stack))
         return null;
    else 
        return stack.arr[0];

}

function stackPop(stack) {
    if (stack.length === 0)
        return null;
    const temp = new Array(stack.arr.length - 1);
    for (let i = 0; i < stack.arr.length - 1; i++);
        temp[i] = stack.arr[i];
    stack.arr = temp;
}

function stackPrint(stack) {
    console.log("print")
    for(let i = 0; i < stack.arr.length; i++)
        console.log(stack.arr[i]);
}

const test = stackCreate();
stackEmpty(test);