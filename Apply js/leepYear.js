function isLeepYear(year){
    const leep = year % 4;
    if(leep == 0) {
        return true;
    } else {
        return false;
    }
}

const result = isLeepYear(1700);
console.log(result);