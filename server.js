//Header
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const { ObjectId } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//PORT
app.listen(process.env.PORT || PORT, (req,res)=>{
    console.log(`Listening on ${PORT} my main guy`)
})

//Middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

//MongoDB Constants
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'mainBacklog'

//MongoDB and CRUD
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connection to MongoDB Complete. Ready to game')
        const db = client.db(dbName)//Database Name
        const master = db.collection('master')
                
        //Main Page EJS
        app.get('/', (req,res)=>{
            master.find().toArray().then(result=>{
                res.render('index.ejs', { master: result})         
        })
            .catch(error => console.error(error))
        })

        //About
        app.get('/about', (req,res)=>{
            res.render('about.ejs')
        })
        //Contact
        app.get('/contact', (req,res)=>{
            res.render('contact.ejs')
        })
        //Test
        app.get('/test', (req,res)=>{
            res.render('test.ejs')
        })
        //Add Game
        app.post('/addGame', (req,res) =>{
            master.insertOne({player: req.body.player, platform: req.body.platform, name: req.body.name, complete: false})
            .then(result => {
                console.log(`Game Added`)
                res.redirect('/')
            })
           .catch(error => console.error(error))
        })
        //Finish Game

        //Delete Game
        app.delete('/deleteGame', (req, res) => {
            master.deleteOne({player: req.body.player, name: req.body.name})
            .then(result => {
                console.log(`Game Deleted`)
                res.json(`Game Deleted`)
            })
            .catch(error => console.error(error))
        })
        app.put('/finishGame', (req,res) => {
            master.findOneAndUpdate({player: req.body.player, name: req.body.name, platform: req.body.platform, complete: req.body.complete},{
                $set: {
                    complete: true
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log(`Game Finished`)
                res.json(`Game Finished`)
            })
            .catch(error => console.error(error))
        })
    })
