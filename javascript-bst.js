/**
 * A lightweight JavaScript function to search through a sorted array using Binary Search Tree algorithm.
 * @param {(string[]|number[])} sorted_array - the sorted array to be searched from
 * @param {(string|number)} target - the value to be searched for
 * @param {string} sorted_array_order - 'asc' or 'desc'. defaults to 'asc'
 * @returns {Object} object - returns an object
 * @returns {boolean} object.found - Whether the target was found in the array.
 * @returns {number} object.iteration - Iterations that occured until the target was found or until the whole tree was traversed.
 * @returns {string} object.message - Additional message to inform if the function executed successfully.
 * @author JSON-G https://github.com/JSON-G/JavaScript-BST
 */
function searchSortedArray(sorted_array, target, sorted_array_order = "asc") {
    let sorted_array_length = sorted_array.length;

    let minIndex = 0;
    let maxIndex = sorted_array_length - 1;

    let currentIndex = Math.floor((minIndex + maxIndex) / 2);

    let found = false;
    let message = "Function OK.";

    let iteration = 0;
    while (true) {

        iteration++;

        if (minIndex === maxIndex || maxIndex < minIndex) {

            if (minIndex >= sorted_array_length) {
                currentIndex = minIndex - 1;
            } else if (maxIndex < minIndex) {
                currentIndex = maxIndex + 1;
            }


            if (target === sorted_array[currentIndex]) {
                found = true;
            }

            break;
        }

        if (target == sorted_array[currentIndex]) {
            found = true;
            break;
        }

        if (sorted_array_order === "asc") {
            if (target > sorted_array[currentIndex]) {
                minIndex = currentIndex + 1;
                currentIndex = Math.floor((minIndex + maxIndex) / 2);
            } else if (target < sorted_array[currentIndex]) {
                maxIndex = currentIndex - 1;
                currentIndex = Math.floor((minIndex + maxIndex) / 2);
            }
        } else if (sorted_array_order === "desc") {
            if (target < sorted_array[currentIndex]) {
                minIndex = currentIndex + 1;
                currentIndex = Math.floor((minIndex + maxIndex) / 2);
            } else if (target > sorted_array[currentIndex]) {
                maxIndex = currentIndex - 1;
                currentIndex = Math.floor((minIndex + maxIndex) / 2);
            }
        } else {
            message = "Wrong parameter for sorted_array_order. This parameter only accepts lowercase `asc` or `desc`.";
            break;
        }
    }

    return {
        found: found,
        iteration: iteration,
        message: message
    };
}