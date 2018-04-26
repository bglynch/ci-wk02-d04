//----------------------Area of a Circle
//Step 01 - Cannot be NaN
//Step 02 - cannot be less than 0
function areaOfCircle(n) {
    if(typeof(n)=="number" && n > 0){
        let result = 3.1416 * (n * n);
        return Number(result.toFixed(2));
    }else{
        alert("Area of Circle: value needs to be a number");
    }
}


//----------------------Squareroot
//Step 01 - cannot be NaN
//Step 02 - cannot be <0
function squareRoot(n) {
    if(typeof(n)=="number" && n > 0){
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
    }else{
        alert("Square Root: value needs to be a positive number");
    }
}

//----------------------To the Power of 2
//Step 01 - number other than 9
//Step 02 - cannot be NaN
function squareMe(n) {
    if(typeof(n)=="number"){
    let result = n*n;
    return Number(result.toFixed(2));
    }else {
        alert("Power of 2: value needs to be a number");
    }
}

//----------------------To the Power of 3
//Step 01 - work for 3power2 = 27
//Step 02 - number other than 9
//Step 02 - cannot be NaN
function cubeMe(n){
    if(typeof(n)=="number"){
        let result = n*n*n;
        return  Number(result.toFixed(2));
    }else{
        alert("Cubed Function: value needs to be a number");
    }
}

//----------------------Area of a Triangle
//Step 01 - Must work for varity of numbers
//Step 02 - Cant be negative numbers
//Step 03 - Cant be NaN
function areaOfTriangle(base,height){
    if(typeof(base)!=="number" || typeof(height)!=="number"){
        alert("Area of Triangle: both values must be numbers");
        
    }else if(base<0 || height<0){
        alert("Area of Triangle: Both numbers must be positive");
    }
    else if(base>0 && height>0){
        let result = 0.5*base*height;
        return Number(result.toFixed(2));
    }
}

//----------------------Years to 2018
function to2018(n){
    if(typeof(n)!="number"){
        alert("must be a number") ;   
    }else{
        return 2018-n;
    }
}

//----------------------Fizzbuzz
function fizzbuzz(n){
    if (n%3==0  && n%5==0){
        return "Fizz"+"Buzz";
    }else if((n-3)%10==0){
        return "Fizz";
    }else if((n-3)%10==0 && n%3==0){
        return "Fizz"+"Fizz";    
    }else if(n%5==0){
        return "Buzz";
    }else if(n%3==0){
        return "Fizz";
    }else{
        return n
    }
}

function whatCanIDrink(n){
    if (n < 0){
        return "Sorry. I can't tell what drink because that age is incorrect";
    }else if(n<14){
        return "Drink Toddy";
    }else if(n<18){
        return "Drink Coke";
    }else if(n<21){
        return "Drink Beer";
    }else if(n<130){
        return "Drink Whisky";
    }else{
        return "Sorry. Your faaaaaaaaar too old";
    }
}