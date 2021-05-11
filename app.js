const fs = require("fs");
const axios = require("axios");
const { response } = require("express");


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

// writeFile();

const getPost = (id) => {

    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch ((err) => {
        throw err
    })
}
// getPost(1);
// getPost(100);

const getPostAsync = async (id) =>{
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log("getPostAsync :",response.data);
    } catch (err) {
        throw err;
    }
}

// getPostAsync(1)