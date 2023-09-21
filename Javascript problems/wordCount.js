var speech = "I am a good person. I don't snore at night.";
var count = 0;
for(var i = 0; i < speech.length; i++) {
    var character = speech[i];
    if(character == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);