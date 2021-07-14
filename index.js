const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
 });


var adultArray = []
app.post('/processAdults', (req, res) => {
    let myIndex = req.body.myIndex,
        name = req.body.name,
        food = req.body.food
    
    adultArray.splice(myIndex, 1, {Name: name, Food: food})
    res.json(adultArray)
})

app.post('/RSVP', (req, res)=>{
    console.log(req.body.data)
})


app.listen(8087, () => {
    console.log(`Server is up at port 8087`);
 });