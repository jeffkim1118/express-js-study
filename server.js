const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req,res) => {
    console.log("Here")
    res.render('index', {text:"Hello world"})
    // res.download('server.js')
    res.json({message:"error"})
    // res.send("Hi")
})

app.listen(3000)