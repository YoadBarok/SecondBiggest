import { getSecondBiggest } from './secondBiggest';


describe("Testing on fixed values", () => {
    test("Should return 8", () => {
        const arr = [5, 2, 3, 1, 8, 10, 6];
        expect(getSecondBiggest(arr)).toBe(8);
    });
    test("Should return 5", () => {
        const arr = [4, 6, 2, 5, 3];
        expect(getSecondBiggest(arr)).toBe(5);
    });
    test("Should return -10", () => {
        const arr = [-100, -24, -10, 1];
        expect(getSecondBiggest(arr)).toBe(-10);
    });
    test("Should return `Invalid input!`", () => {
        const arr = ".";
        expect(getSecondBiggest(arr)).toBe("Invalid input!");
    });
    test("Should return `Array has less than 2 elements`", () => {
        const arr = [3];
        expect(getSecondBiggest(arr)).toBe("Array has less than 2 elements");
    });
    test("Should return `Array has less than 2 elements`", () => {
        const arr = [];
        expect(getSecondBiggest(arr)).toBe("Array has less than 2 elements");
    });
    test("Should return 1", () => {
        const arr = [1, 2];
        expect(getSecondBiggest(arr)).toBe(1);
    })

})


describe("Testing with random values", () => {
    test("Random test 1", () => {
        const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
        arr.sort((a, b) => b - a);
        expect(getSecondBiggest(arr)).toBe(arr[1]);
    });
    test("Random test 2", () => {
        const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
        arr.sort((a, b) => b - a);
        expect(getSecondBiggest(arr)).toBe(arr[1]);
    });
})