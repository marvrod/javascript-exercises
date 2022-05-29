const reverseString = function(text) {
 let textArray = text.split("");
 let length = textArray.length;
 let newText= "";

 if (text === "") {
     return "";
 }
 else {
 for (let i = length - 1; i >= 0; i--) {
    newText = newText + textArray[i];
 }

return newText;
};
}

// Do not edit below this line
module.exports = reverseString;
