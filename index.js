const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
 });

app.post('/rscp', (res, req)=>{
    console.log('test')
})


app.listen(8087, () => {
    console.log(`Server is up at port 8087`);
 });