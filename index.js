require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const db = require('monk')(`${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/hgp`)
const responses = db.get('responses')


app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
 });


app.post('/RSVP', (req, res)=>{
    res.json('wooo')
    let realResp = req.body

    
    responses.insert(realResp)
})
app.post('/Sorry', (req, res)=>{
    res.json('its okay!')
    let realResp = req.body
    responses.insert(realResp)
})


app.listen(8087, () => {
    console.log(`Server is up at port 8087`);
 });