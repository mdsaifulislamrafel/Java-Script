var marks = [45, 67, 81, 63, 89, 56, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}

console.log("Highlight value is: ", max);