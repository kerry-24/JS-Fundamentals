//get the command line arguments
const args = process.argv.slice(2);
//check if the first argument exist
if (args[0] === undefined) {
    console.log("No argument");
}
else {
    console.log(args[0]);
}
