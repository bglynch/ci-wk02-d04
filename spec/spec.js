
describe("Calculator tests", function(){
    describe("Addition tests", function() {
        it("should return 4", function() {
            expect(addition(2,2)).toBe(4);      //simple addition calc to check
        });
        it("should not retuen 4 for different numbers", function(){
            expect(addition(20,22)).toBe(42)
        });
        it("should show an alert for NaN", function(){
            spyOn(window, "alert");
            addition("Fish",22);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers"); //alert does not pop up on screen, jasmine traps it
        });
        it("should show an alert if we only supply one number",function() {
            spyOn(window, "alert");
            addition(22);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers");
        });
    });
    describe("Subtraction Test", function() {
        //Step 01
        it("should return 4", function(){
            expect(subtract(6,2)).toBe(4)
        });
        //Step 02
        it("should not return 4 for different numbers", function() {
            expect(subtract(10,2)).toBe(8)
        });
        //Step 03
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            subtract("Cat", 3);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers");
        });
        //Step 04
        it("should show an alert if we only supply one number", function() {
            spyOn(window, "alert");
            addition(22);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers");
        });
    });
    describe("Multiplication Test", function() {
        //Step 01
        it("should return 5", function(){
            expect(multiply(2,5)).toBe(10)
        });
        //Step 02
        it("should not return 5", function() {
            expect(multiply(10,8)).toBe(80);
        });
        //Step 03
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            multiply(true, 10);
            expect(window.alert).toHaveBeenCalledWith("Multiply arguements must both be numbers");
        });
        it("should retuen sqrt 4", function() {
            expect(multiply(Math.sqrt(4),2)).toBe(4)
        });
    });
})