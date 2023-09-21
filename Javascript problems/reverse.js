function reverseString(str) {
    var reverse ="";
    for(var i = 0; i<str.length; i++) {
        var character = str[i];
        reverse = character + reverse;
        reverse = character + reverse;
    }
    return reverse;
}

var  = "Hello Alien bhai brother.";
var forAlien = reverseString();
console.log(forAlien);