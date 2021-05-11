const fs = require("fs");
const axios = require("axios");


const readFile = () => {
    let content;
    fs.readFile("./data.txt", (err, data) => {
        if (err) throw err;
        content = data.toString();
        console.log("content :", content);
    })
};

// readFile();

const writeFile = () => {
    fs.writeFile("text.txt","A new file has been created",(err) => {
        if (err) throw err;
        console.log("The file has been saved");
    });
}

writeFile();