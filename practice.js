const validator = require("validator");
const yargs = require("yargs");
console.log(validator.isEmail("abc@gmail.com"));
const chalk = require('chalk');
var sucess = "success";
console.log(chalk.red("Error"+" "+ chalk.green.inverse.bold(sucess)));
debugger
console.log(process.argv[2]);
console.log(yargs.argv)

