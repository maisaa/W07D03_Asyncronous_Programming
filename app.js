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

readFile();