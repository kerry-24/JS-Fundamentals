function factorial (n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n -1);
}
const args = parseInt(process.argv[2]);
console.log(factorial(isNaN(args) ? 0 : args));

