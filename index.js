const express = require('express');
const port = 7000;
const app = express();
const path=require('path')
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
const checkpost=(req,res,next)=>{
if(req.query.age >=18){
    return next();
}
return res.redirect('/')
}
app.get('/',(req,res)=>{
    return res.render('index');
})
app.get('/about',checkpost,(req,res)=>{
    return res.render('about')
})
app.get('/contact',checkpost,(req,res)=>{
    return res.render('contact')
})
app.get('/service',checkpost,(req,res)=>{
    return res.render('service')
})
app.get('/blog',checkpost,(req,res)=>{
    return res.render('blog')
})
app.use(checkpost);
app.listen(port,(err)=>{
    if(err){
        console.log("server not start");
    }
    console.log("server start on the port:-" +port);
})