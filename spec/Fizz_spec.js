/**
 * Created by HZ on 3/25/17.
 */
var game=require("../main");
describe("FizzGame",()=> {
    describe("getInputArr",()=> {
        it("test 345", () => {
            expect(game.getInputArr(3,4,5)).toEqual([3,4,5])
        });
    });
    describe("isInclude",()=> {
        it("test [3,5,6] 3", () => {
            expect(game.isInclude([3, 5, 6], 3)).toBe("Fizz")
        });
        it("test [3,5,7] 1", () => {
            expect(game.isInclude([3, 5, 7], 1)).toBe('')
        });
        it("test [3,5,7] 8", () => {
            expect(game.isInclude([3, 5, 7], 8)).toBe('')
        });
        it("test [3,5,7] 73", () => {
            expect(game.isInclude([3, 5, 7], 73)).toBe("Fizz")
        });
        it("test [3,5,7] 79", () => {
            expect(game.isInclude([3, 5, 7], 79)).toBe('')
        });
    });

    describe("isMultiple",()=>{
        it("test [4,5,6] 4",()=>{
            expect(game.isMultiple([4,5,6],4)).toBe("Fizz")
        });
        it("test [4,5,6] 10",()=>{
            expect(game.isMultiple([4,5,6],10)).toBe("Buzz")
        });
        it("test [4,5,6] 42",()=>{
            expect(game.isMultiple([4,5,6],42)).toBe("Whizz")
        });
        it("test [3,5,7] 30",()=>{
            expect(game.isMultiple([3,5,7],30)).toBe("FizzBuzz")
        });
        it("test [4,5,7] 35",()=>{
            expect(game.isMultiple([4,5,7],35)).toBe("BuzzWhizz")
        });
        it("test [4,5,6] 24",()=>{
            expect(game.isMultiple([4,5,6],24)).toBe("FizzWhizz")
        });
        it("test [2,3,5] 30",()=>{
            expect(game.isMultiple([2,3,5],30)).toBe("FizzBuzzWhizz")
        });
        it("test [4,5,6] 2",()=>{
            expect(game.isMultiple([4,5,6],2)).toBe('');
        });
    })

    describe("getResultOne",()=> {
        it("test Fizz Whizz 3", () => {
            expect(game.getResultOne("Fizz", "Whizz",3)).toBe("Fizz")
        });
        it("test '' FizzWhizz 6", () => {
            expect(game.getResultOne('', "FizzWhizz",6)).toBe("FizzWhizz")
        });
        it("test '' '' 21", () => {
            expect(game.getResultOne('', '',21)).toBe('21');
        });
    });
    describe("gameMain",()=> {
        it("test 3，5，7", () => {
            spyOn(console, 'log');
            const result =
                '1'
                '2'
                'Fizz'
                '4'
                'Buzz'
                'Fizz'
                'Whizz'
                '8'
                'Fizz'
                'Buzz'
                '11'
                'Fizz'
                'Fizz'
                'Whizz'
                'FizzBuzz'
                '16'
                '17'
                'Fizz'
                '19'
                'Buzz'
                'FizzWhizz'
                '22'
                'Fizz'
                'Fizz'
                'Buzz'
                '26'
                'Fizz'
                'Whizz'
                '29'
                'FizzBuzz'
                'Fizz'
                'Fizz'
                'Fizz'
                'Fizz'
                'BuzzWhizz'
                'Fizz'
                'Fizz'
                'Fizz'
                'Fizz'
                'Buzz'
                '41'
                'FizzWhizz'
                'Fizz'
                '44'
                'FizzBuzz'
                '46'
                '47'
                'Fizz'
                'Whizz'
                'Buzz'
                'Fizz'
                '52'
                'Fizz'
                'Fizz'
                'Buzz'
                'Whizz'
                'Fizz'
                '58'
                '59'
                'FizzBuzz'
                '61'
                '62'
                'FizzWhizz'
                '64'
                'Buzz'
                'Fizz'
                '67'
                '68'
                'Fizz'
                'BuzzWhizz'
                '71'
                'Fizz'
                'Fizz'
                '74'
                'FizzBuzz'
                '76'
                'Whizz'
                'Fizz'
                '79'
                'Buzz'
                'Fizz'
                '82'
                'Fizz'
                'FizzWhizz'
                'Buzz'
                '86'
                'Fizz'
                '88'
                '89'
                'FizzBuzz'
                'Whizz'
                '92'
                'Fizz'
                '94'
                'Buzz'
                'Fizz'
                '97'
                'Whizz'
                'Fizz'
                '100'
                ;
            game.gameMain(3,5,7);

            expect(console).toHaveBeenCalledWith(result);
        });

    })
})


