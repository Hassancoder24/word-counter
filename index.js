#! /usr/bin/env node
//word counter 
import inquirer from "inquirer";
import chalk from "chalk";
//welcom msg
console.log(chalk.bgBlueBright("\t\nWellcome to my Word Counter Project\n"));
//functions
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "\t\n Please Enter your Sentence to count the Sentence words:\n"
    }
]);
const words = answers.Sentence.trim().split(" ");
//print a word in arrey
console.log(words);
//print a number count of words
console.log(chalk.yellowBright(`\t\nYour Secentence word count is ${words.length}\n`));
