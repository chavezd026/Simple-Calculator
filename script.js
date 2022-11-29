//button function

function displayNum(num){
    result.value += num;
}

//AC button function 

function clearBox(){
    result.value="";
}

// result button function

function evaluateExpression(){
    // expression=result.value;
    // output=eval(expression);
    // result.value=output;

    result.value=eval(result.value);
}
// backspace function

function removeLast(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}