function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return true;
        }
        return false;
    }
}

var result = isPrime(139);
console.log(result);