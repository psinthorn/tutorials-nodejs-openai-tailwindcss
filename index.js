const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const srvPort = process.env.PORT || 8000; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.status(200).json({ msg: "hello Nodejs and OpenAi :)"})
});

app.listen(srvPort, () => {
    console.log("server is up and running on port: ", srvPort);
});
