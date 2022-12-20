export function getSecondBiggest(arr) {

    // Valid input validations:

    // Check if the passed argument is an array:
    if (!Array.isArray(arr)) {
        return "Invalid input!";
    }

    // Check if there are at least 2 items in the array:
    if (arr.length < 2) {
        return "Array has less than 2 elements";
    }


    // Initialize variables to store the values for the biggest and second biggest items:
    let biggest = -Infinity;
    let secondBiggest;

    arr.forEach(item => {

        // If the current item is bigger than the "biggest" value -> "secondBiggest" is getting the previously biggest value,
        // And biggest get's the value of item.
        if (item > biggest) {
            secondBiggest = biggest;
            biggest = item;
        } 
        // If the current item is bigger than the "secondBiggest" value -> "secondBiggest" gets the value of the current item.
        else if (item > secondBiggest) {
            secondBiggest = item;
        }
    });
    
    return secondBiggest;
}
