const removeFromArray = function(array1, ...elements) {
 let length1 = array1.length;
 let length2 = elements.length;
 let newArray = array1;


 // First for loop for checkin each element in the rest parameter
 for (let i = 0; i <= length2 - 1; i++) {
    let element = elements[i];
    // Second for loop for comparing it to each element in the array1
    for (let j = 0; j <= length1 - 1; j++) {
        if (elements[i] === newArray[j]) {
            newArray.splice(j, 1);
        }
        else {
            newArray = newArray;
        }
    }
 }
 return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
