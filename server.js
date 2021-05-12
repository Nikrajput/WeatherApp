const express=require('express')
const app=express()
const expressLayouts=require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('errorPage')
})

app.listen(process.env.PORT || 8796)