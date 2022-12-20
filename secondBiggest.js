export function getSecondBiggest(arr) {

    if (!Array.isArray(arr)) {
        return "Invalid input!";
    }

    if (arr.length === 0) {
        return 0;
    }

    let biggest = -Infinity;
    let secondBiggest;

    arr.forEach(item => {
        if (item > biggest) {
            secondBiggest = biggest;
            biggest = item;
        } else if (item > secondBiggest) {
            secondBiggest = item;
        }
    });
    return secondBiggest;
}
