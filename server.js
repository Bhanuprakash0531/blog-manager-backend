
// const {greetUser}=require('./controllers/greetController');
// const {getUserProfile}=require('./controllers/profileController');
//const express= require ('express');

import { getUserProfile } from './controllers/profileController.js';
import { greetUser } from './controllers/greetController.js';
import { getBlogList } from './controllers/blogListController.js';
import { createBlogPost } from './controllers/blogController.js';

import express from 'express';
const app= express();
app.use(express.json());

app.get('/api/greet',greetUser);
app.get('/api/profile',getUserProfile);
app.get('/api/blog-list',getBlogList);
app.post('/api/blog-post',createBlogPost);

app.listen(3001,()=>console.log("server listening on port 3001"));


































/*const { stringify } = require('querystring');
const { json } = require('stream/consumers');
const { parse } = require('path');
const { error } = require('console');


const express = require('express');
const app =express();

// normal express server
app.get('/',(req,res)=>{res.send('Hello from Express!')});

//express server with json format
app.get('/api',(req,res)=>{res.json({message:'Welcome to Express API'})});

//greeting endpoint
app.get('/api/greet',(req,res)=>{
    const name=req.query.name;
    if(name){
        res.json({greeting:`Hello, ${name}`});
    }
    else{
        res.json({greeting:`Hello anonymous!`});
    }
})
app.listen(3001,()=>{console.log('Server listening on port 3001')});

*/



/////////////////////////////////////////////////////////////////////////////////

/*
const http =require('http');
const url =require('url');
const server= http.createServer((req, res)=>{
    const parsedUrl=url.parse(req.url,true);

    if(req.url ==='/api'&& req.method ==='GET'){
        const responseData = {message: 'Hello from the API!'};
    res.statusCode= 200;
    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify(responseData));
    }

    if(req.url ==='/api/test'&& req.method ==='GET'){
        const testResponseData = {message: 'Hello from test response'};
        res.statusCode=200;
        res.setHeader('Content-type','application/json');
        res.end(JSON.stringify(testResponseData));
    }
    
   
    if(req.url ==='/api/greeting'&& req.method =='GET'){
        const greetingsResponseData={message: 'Hello from your new endpoint'};
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(greetingsResponseData));
    }
        

    if(req.url ==='/api/text' && req.method =='GET'){
        res.statusCode=200;
        res.setHeader('content-type','text/plain');
        res.end("Your custom text goes here");
    }
    
    if(req.url ==='/api/details'&& req.method =='GET'){
        const detailsResponse= {user: 'Alice',age: '25',status:'active'};
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(detailsResponse));
    }
    if (parsedUrl.pathname ==='/api/greeting' && req.method=='GET'){
        const name=parsedUrl.query.name;
        const message =name ? `hello, ${name}`: 'Hello there!';
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify({message}));
        return;
    }
    if(parsedUrl.pathname==='/api/info' && req.method =='GET'){
        const queryName=parsedUrl.query.name;
        const queryAge=parsedUrl.query.age;
        let infoResponse;
        if(queryName && queryAge){
            infoResponse=`Hello, ${queryName}! Your are ${queryAge} year old`;
        }else if(queryName){
            infoResponse = `Hello, ${queryName}! Your age is not provided`
        }
        else{
            infoResponse='Hello anonymous';
        }
      //  let infoResponse = queryName 
        //? queryAge 
       // ? `Hello, ${queryName}! You are ${queryAge} years old.` 
        //: `Hello, ${queryName}! Your age is not provided.`
        //: 'Hello anonymous'; 

        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify({infoResponse}));
        return;
    }
    if(req.url==="/api/users" && req.method ==="GET"){
        const usersResponse=[{"id":1, "name ": "Alice"},{"id":2,"name":"Bob"}]
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(usersResponse));
    }
    if(parsedUrl.pathname === "/api/isEven" && req.method ==='GET'){
        const num=parseInt(parsedUrl.query.num,10);
        let numResponse;
        if(isNaN(num)){
            numResponse={error:"Enter the valid number"}
        }
        else if(num%2===0){
            numResponse={status:`${num} is a even`};
        }else{
            numResponse={status: `${num} is odd`};
        }
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(numResponse));
    }
    if(parsedUrl.pathname === "/api/uppercase" && req.method==='GET'){
        const word=parsedUrl.query.word;
        let convertWord;
        if(word){
            convertWord={uppercase:word.toUpperCase()};
        }else{
            convertWord={error:"Invalid input"};
        }
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(convertWord))
    }
    if(parsedUrl.pathname ==="/api/book" && req.method==='GET'){
        const title=parsedUrl.query.title;
        const author=parsedUrl.query.author;
        let bookResponse;
        if(title && author){
            bookResponse={description: `${title} by ${author}`};
        }else{
            bookResponse={error:`invalid input`};
        }
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.end(JSON.stringify(bookResponse))
    }
    
    else
    res.statusCode=404;
    res.setHeader('content-type','text/plain');
    res.end('Not found');
});

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
});*/