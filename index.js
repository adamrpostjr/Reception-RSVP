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


app.post('/RSVP', (req, res)=>{
    console.log(req.body.data)
})
app.post('/Sorry', (req, res)=>{
    console.log(req.body.data)
})


app.listen(8087, () => {
    console.log(`Server is up at port 8087`);
 });