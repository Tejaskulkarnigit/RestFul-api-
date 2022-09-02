const { query } = require('express');
const express = require('express');
const app = express();
const testRoute = require('./api/routes/test.js')
const test1Route = require('./api/routes/test1.js')
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect =require('./config1');






app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.send('restful api');
});

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + " ")
        }
    })
}).single("file");
app.post("/upload", upload, (req, resp, next) => {
    const file = req.file;
    if (!file) {
        return resp.status(200).send({
            msg: 'please upload file'

        })
    }
    connect.query('INsert INTO uploaded_document_fact() VALUES  (" ' + req.file.filename +   '" )' , file, function(err, result){
       return resp.send ({msg:'File is successfully uploaded .', file} )

    });
});



app.use('/test.js', testRoute)
app.use('/test1.js', test1Route)
app.use((req, res) => {
    res.status(200).json({

    })
})








module.exports = app


