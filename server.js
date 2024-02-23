const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (ar.length - 1))
    return ar[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/click', async (req, res) => {

    let randomNames = ['Zohaib', "Iqra", "Zoya", "Suhana"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Larkana", "Fateh Jang", "larkana", "Karachi"]
    for (let i = 0; i < 4; i++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 19000),
            language: getRandom(randomLang),
            city: getRandom(randomCities)
        })
        console.log(e)
 

    }

    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



