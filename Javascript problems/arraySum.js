
function getArraySum(number) {
    var sum = 0;
    for (i = 0; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;
    }
    return sum;

}
var number = [45, 65, 78, 90, 100, 101, 102, 103];
var result = getArraySum(number);
console.log("Total of the numbers:", result);
var total = getArraySum([44, 44, 44, 44, 44, 44, 44, 45]);
console.log("Total of the numbers:", total);