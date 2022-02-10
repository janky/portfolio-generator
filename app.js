const fs = require("fs");
const generatePage = require("./src/page-template.js");

// get input from command line then put into an array
const profileDataArgs = process.argv.slice(2);

//assignment destructuring to assign elements of an array to variable names in a single epression
const [name, github] = profileDataArgs;

//write template into file system as html doc to generate webpage, check for errors and print message 
fs.writeFile("index.html", generatePage(name, github), err => {
    if(err) throw new Error(err);
    console.log("Portfolio complete! Check out index.html to see the output!");
});