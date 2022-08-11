//Header
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
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
        const tomBacklog = db.collection('tomBacklog')
        const tomBacklogComplete = db.collection('tomBacklogComplete')
        const stephenBacklog = db.collection('stephenBacklog')
        const stephenBacklogComplete = db.collection('stephenBacklogComplete')
        const seanBacklog = db.collection('seanBacklog')
        const seanBacklogComplete = db.collection('seanBacklogComplete')

        //Main Page EJS
        app.get('/', (req,res)=>{
            tomBacklog.find().toArray().then(resultTomB=>{
                stephenBacklog.find().toArray().then(resultStephenB=>{
                    tomBacklogComplete.find().toArray().then(resultTomComplete =>{
                        stephenBacklogComplete.find().toArray().then(resultStephenComplete =>{
                            seanBacklog.find().toArray().then(resultSeanB=>{
                                seanBacklogComplete.find().toArray().then(resultSeanComplete =>{
                                    res.render('index.ejs', { tomBacklog: resultTomB, stephenBacklog: resultStephenB, tomBacklogComplete: resultTomComplete, stephenBacklogComplete: resultStephenComplete, seanBacklog: resultSeanB, seanBacklogComplete: resultSeanComplete})    
                        })
                    })
                })
            })
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
        //Tom Add Game
        app.post('/addTomGame', (req,res) =>{
            tomBacklog.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result => {
                console.log('Tom Game Added')
                res.redirect('/')
            })
           .catch(error => console.error(error))
        })
        //Tom Finish Game
        app.post('/finishTomGame', (req,res) =>{
            tomBacklogComplete.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result =>{
                console.log('Tom finished a game! Moved to Completed')
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })
        //Stephen Add Game        
        app.post('/addStephenGame', (req,res) =>{
            stephenBacklog.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result => {
                console.log('Stephen Game Added')
                res.redirect('/')
            })
           .catch(error => console.error(error))
        })
        //Stephen Finish Game
        app.post('/finishStephenGame', (req,res) =>{
            stephenBacklogComplete.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result =>{
                console.log('Stephen finished a game! Moved to Completed')
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })
        //Sean Add Game
        app.post('/addSeanGame', (req,res) =>{
            seanBacklog.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result => {
                console.log('Sean Game Added')
                res.redirect('/')
            })
           .catch(error => console.error(error))
        })
        //Sean Finish Game
        app.post('/finishSeanGame', (req,res) =>{
            seanBacklogComplete.insertOne({name: req.body.name, platform: req.body.platform, likes: 0})
            .then(result =>{
                console.log('Sean finished a game! Moved to Completed')
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })
        //Tom Add One Like
        app.put('/addOneTomLike', (req,res)=>{
            tomBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Tom')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Tom Sub One Like
        app.put('/subOneTomLike', (req,res)=>{
            tomBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Tom')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Tom Add One Like Finish
        app.put('/addOneTomLikeFinish', (req,res)=>{
            tomBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Tom')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Tom Sub One Like Finish
        app.put('/subOneTomLikeFinish', (req,res)=>{
            tomBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Tom')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Stephen Add One Like
        app.put('/addOneStephenLike', (req,res)=>{
            stephenBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Stephen')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Stephen Sub One Like
        app.put('/subOneStephenLike', (req,res)=>{
            stephenBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Stephen')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Stephen Add One Like Finish
        app.put('/addOneStephenLikeFinish', (req,res)=>{
            stephenBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Tom')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Stephen Sub One Like Finish
        app.put('/subOneStephenLikeFinish', (req,res)=>{
            stephenBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Tom')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Sean Add One Like
        app.put('/addOneSeanLike', (req,res)=>{
            seanBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Sean')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Sean Sub One Like
        app.put('/subOneSeanLike', (req,res)=>{
            seanBacklog.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Sean')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Sean Add One Like Finish
        app.put('/addOneSeanLikeFinish', (req,res)=>{
            seanBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes + 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Added One Like -Tom')
                res.json('Like Added')
            })
            .catch(error => console.error(error))
        })
        //Sean Sub One Like Finish
        app.put('/subOneSeanLikeFinish', (req,res)=>{
            seanBacklogComplete.updateOne({name: req.body.name, platform: req.body.platform, likes: req.body.likes},{
                $set: {
                    likes:req.body.likes - 1
                }
            },{
                sort: {_id: -1},
                upsert: true
            })
            .then(result => {
                console.log('Minus One Like -Tom')
                res.json('Like Removed')
            })
            .catch(error => console.error(error))
        })
        //Tom Delete Game
        app.delete('/deleteTomGame', (req, res) => {
            tomBacklog.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Tom Game Deleted')
                res.json('Tom Game Deleted')
            })
            .catch(error => console.error(error))
        })
        //Tom Delete Finished Game
        app.delete('/deleteTomGameFinish', (req, res) => {
            tomBacklogComplete.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Tom Game F Deleted')
                res.json('Tom Game F Deleted')
            })
            .catch(error => console.error(error))
        })
        //Stephen Delete
        app.delete('/deleteStephenGame', (req, res) => {
            stephenBacklog.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Stephen Game Deleted')
                res.json('Stephen Game Deleted')
            })
            .catch(error => console.error(error))
        })
        //Stepehen Delete Finished Game
        app.delete('/deleteStephenGameFinish', (req, res) => {
            stephenBacklogComplete.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Stephen Game F Deleted')
                res.json('Stephen Game F Deleted')
            })
            .catch(error => console.error(error))
        })
        //Sean Delete
        app.delete('/deleteSeanGame', (req, res) => {
            seanBacklog.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Tom Game Deleted')
                res.json('Tom Game Deleted')
            })
            .catch(error => console.error(error))
        })
        //Sean Delete Finished Game
        app.delete('/deleteSeanGameFinish', (req, res) => {
            seanBacklogComplete.deleteOne({name: req.body.name})
            .then(result => {
                console.log('Sean Game F Deleted')
                res.json('Sean Game F Deleted')
            })
            .catch(error => console.error(error))
        })
    })
})