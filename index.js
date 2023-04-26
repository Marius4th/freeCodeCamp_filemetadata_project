var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
require('dotenv').config();

var app = express();

// Parses the POST body data and transforms it to JSON
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
