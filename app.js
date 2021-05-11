const fs = require("fs");
const axios = require("axios");
const { response } = require("express");
const { constants } = require("buffer");


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

const appendToFile = (data) => {
    fs.appendFile("./data.txt",data, (err) =>{
        if(err) throw err;
        console.log(data)
    })
}

// appendToFile(` hi from appendToFile`)

// const copyMFile = async (fileName) => {
//     try {
//         await fs.copyFile(fileName,'./copy_of_data.txt');
        
//     } catch  {
//         console.log("The file could not be copied")
        
//     }
// }
// copyMFile("./data.txt")

const copyMFile =  (fileName) => {

    let callback = (err) =>{
        if (err) throw err;
        //
        console.log("The file has been copied")
    }

    fs.copyFile(fileName,'./maisaa.txt', callback)


}
// copyMFile("./data.txt")

