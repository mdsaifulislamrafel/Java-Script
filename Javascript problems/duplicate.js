var name = [3, 2, 1, 5, 2, 3, 9, 1, 2, 3, 5, 2, 3, 5, 2, 9, 6];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}

console.log(uniqueName);