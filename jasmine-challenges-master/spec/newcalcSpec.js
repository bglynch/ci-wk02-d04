describe("Extra calculator functions", function() {
    //---------------------------------------------------Area of a Circle
    describe("Area of Circle function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        //Step 01
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            areaOfCircle(true);
            expect(window.alert).toHaveBeenCalledWith("Area of Circle: value needs to be a number");
        });
    });

    //--------------------------------------------------Squareroot
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        //Step 01
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            squareRoot(true);
            expect(window.alert).toHaveBeenCalledWith("Square Root: value needs to be a positive number");
        });
        //Step 02
        it("should show alet for negative number", function() {
            spyOn(window, "alert");
            squareRoot(-1);
            expect(window.alert).toHaveBeenCalledWith("Square Root: value needs to be a positive number");
        });
    });

    //----------------------------------------------To the Power of 2
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        //Step 01
        it("should return number other than 9", function() {
            expect(squareMe(4)).toBe(16);
        });
        //Step 02
        it("should show alet for negative number", function() {
            spyOn(window, "alert");
            squareMe(true);
            expect(window.alert).toHaveBeenCalledWith("Power of 2: value needs to be a number");
        });
    });

    //----------------------------------------------To the Power of 3
    describe("Cubed Function", function() {
        it("should return 27 for 3 cubed", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("should return -27 for -3 cubed", function() {
            expect(cubeMe(-3)).toBe(-27);
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            cubeMe(true);
            expect(window.alert).toHaveBeenCalledWith("Cubed Function: value needs to be a number");
        });
    });

    //----------------------------------------------Area of a Triangle
    describe("Area of Triangle Function", function() {
        it("should return 20 for sides of 4 and 5", function() {
            expect(areaOfTriangle(4, 5)).toBe(10);
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            areaOfTriangle(true, 4);
            expect(window.alert).toHaveBeenCalledWith("Area of Triangle: both values must be numbers");
        });
        it("Input numbers must be positive", function() {
            spyOn(window, "alert");
            areaOfTriangle(5, -4);
            expect(window.alert).toHaveBeenCalledWith("Area of Triangle: Both numbers must be positive");
        });

    });
    
    //----------------------------------------------Area of a Triangle
    describe("Area of Triangle Function", function() {
        it("Should return 8", function(){
            expect(to2018(2000)).toBe(18);
        });
        it("Should show an alert for NaN", function() {
            spyOn(window, "alert");
            to2018(true);
            expect(window.alert).toHaveBeenCalledWith("must be a number");
        });
    });
    
    //----------------------------------------------Fizzbuzz
    describe("Fizzbuzz Game", function() {
        it("Should return fizz", function(){
            expect(fizzbuzz(3)).toBe("Fizz")
        });
        it("Should return buzz", function(){
            expect(fizzbuzz(5)).toBe("Buzz")
        });
        it("Should return fizzbuzz", function(){
            expect(fizzbuzz(13)).toBe("Fizz")
        });
        it("Should return fizzbuzz", function(){
            expect(fizzbuzz(15)).toBe("Fizz"+"Buzz")
        });
        it("Should return fizz", function(){
            expect(fizzbuzz(23)).toBe("Fizz")
        });
        it("Should return fizz", function(){
            expect(fizzbuzz(30)).toBe("Fizz"+"Buzz")
        });
    });
    
   //----------------------------------------------Drink About
   describe("Drink Anout Challenge",function() {
       it("Should return Age Incorrect", function(){
           expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect")
       });
        it("Should return Drink Toddy", function(){
           expect(whatCanIDrink(8)).toBe("Drink Toddy")
       });
        it("Should return Drink Coke", function(){
           expect(whatCanIDrink(15)).toBe("Drink Coke")
       });
        it("Should return Drink Beer", function(){
           expect(whatCanIDrink(19)).toBe("Drink Beer")
       });
        it("Should return Drink Whisky", function(){
           expect(whatCanIDrink(50)).toBe("Drink Whisky")
       });
   });

    
});
