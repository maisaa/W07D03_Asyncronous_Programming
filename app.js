const fs = require("fs");
const axios = require("axios");
const { response, json } = require("express");
const { constants } = require("buffer");


const readFile = () => {
    let content;
    fs.readFile("./data.txt", (err, data) => {
        if (err) throw err;

        content = data.toString();
        console.log("plus check...2.....content :", content);
    })
};

readFile();

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const writeFile = () => {
    fs.writeFile("text.txt", "A new file has been created", (err) => {
        if (err) throw err;

        console.log("plus check...3.....The file has been saved");
    });
}

writeFile();

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const getPost = (id) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            console.log("plus check...4.....getPost : ", response.data);
        })
        .catch((err) => {
            throw err
        })
}
getPost(1);
// getPost(100);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const getPostAsync = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log("plus check...5.....getPostAsync :", response.data);
    } catch (err) {
        throw err;
    }
}

getPostAsync(1)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const appendToFile = (data) => {
    fs.appendFile("./data.txt", data, (err) => {
        if (err) throw err;
        //
        console.log("Practice...1....appendToFile :", data)
    })
}
appendToFile(`  Practice...1....appendToFile `)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const copyMFile = (fileName) => {
    let callback = (err) => {
        if (err) throw err;
        //
        console.log("Practice...2......The file has been copied")
    }
    fs.copyFile(fileName, './maisaa.txt', callback)
}
copyMFile("./data.txt")

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const newPost = JSON.stringify({
    id: 1,
    title: "New Title",
    body: "New body",
    userId: 1,
});

const createPost = async (post) => {
    let response = await axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: post
    });
    console.log("Practice...3.....createPost :", response.data)
};
createPost(newPost)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const newPost2 = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
});

const updatePost = async (id, data) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
        console.log("Practice...4....updatePost :", response.data);
    } catch (err) {
        throw err;
    }
}
updatePost(1, newPost2);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//============================================================
const getUsers = () =>{
    
}