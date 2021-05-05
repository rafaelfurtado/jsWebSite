const fs = require("fs");
const https = require("https");

const express = require('express');
const path = require('path');


const app = express();
app.use(express.json());
app.use(express.static('express'));

// URL padrão do site
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/node-example-website/express/index.html'));
});

const options = {
	key: fs.readFileSync("./c35e9_8f64f_d627b7efd01db3b408159defb18febc7.key", "utf8"),
	cert: fs.readFileSync("./iniciativaseeds_com_br_c35e9_8f64f_1628035199_414c6cf7092a0b94b568b810b42129d3.crt", "utf8")
};

https.createServer(options, app).listen(3000);
