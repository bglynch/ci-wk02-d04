//--------Addition Test
//Step 01
/*
function addition(num1, num2){
    return 4
    }
*/

//Step 02
/*
function addition(num1, num2){
    return num1+num2;
    }
*/

//Step 03 & 04
function addition(num1, num2){
    if(typeof(num1)=="number" && typeof(num2)=="number"){
    return num1+num2;
    }else{
        alert("Arguements must both be numbers");
    }
}

//-------Subtraction Test
//Step 01
/*
function subtract(num1, num2){
    return 4;
}
*/

//Step 02
/*
function subtract(num1, num2){
    return num1-num2;
}*/

//Step 03 & 04
function subtract(num1, num2){
    if(typeof(num1)=="number"&&typeof(num2)=="number"){
        return num1-num2;
    }else{
        alert("Arguements must both be numbers");
    }
}

//-------Multiplication Test
//Step 01
/*
function multiply(num1,num2){
    return 10;
}*/

//Step 02
/*
function multiply(num1,num2){
    return num1*num2;
}*/

//Step 03
function multiply(num1,num2){
    if(typeof(num1)=="number" && typeof(num2)=="number"){
        return num1*num2;
    }else{
        alert("Multiply arguements must both be numbers");
    }
}
