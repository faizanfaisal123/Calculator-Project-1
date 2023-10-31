#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';


type answerstype = {
    num1 : number,
    num2 : number,
    operation: string
}
inquirer
  .prompt([
   {
    type: "number",
    name: "num1",
    message: "Enter num1",
   },
   {
    type: "number",
    name: "num2",
    message: "Enter num2",
   },
   {
    type: "list",
    name: "operation",
    choices: ["+","-","*","/"],
    message: "choose operation",
   }
  ])
  .then((answers: answerstype) => {
    // console.log(answers)
      if(answers.operation == "+"){
        console.log(chalk.blue("The sum of num1 and num2 is: ",answers.num1+answers.num2))
      }
     else if(answers.operation == "-"){
        console.log(chalk.blue("The minus of num1 and num2 is: ",answers.num1-answers.num2))
      }
      else if(answers.operation == "*"){
        console.log(chalk.blue("The multiply of num1 and num2 is: ",answers.num1*answers.num2))
      }
      else if(answers.operation == "/"){
        console.log(chalk.blue("The divide of num1 and num2 is: ",answers.num1/answers.num2))
      }
      else{
        console.log(chalk.blue("The operation is not given"))
      }
    })