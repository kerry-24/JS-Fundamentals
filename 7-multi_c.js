const args = process.argv.slice(2);
const x = parseInt(args[0]);
if (!Number.isInteger(x)) {
    console.log("Missing occurrences");
}
else {
    for (let i = 0; i < x; i++) console.log("C is fun");
}
