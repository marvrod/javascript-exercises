const repeatString = function(string, number) {
 
 let word = "";
 
 if (string === "") {
     return "";
 }
 
 else if (number < 0) {
    return "ERROR";
}

else {
 for (let i = 0; i <= number; i++) {


    if (i == 0) {
        word = word;
    }
    else if (i > 0) {
        word = word + string;
    }
    else {
        return "Invalid input";
    }
};

 return  word;
}
};

// Do not edit below this line
module.exports = repeatString;
