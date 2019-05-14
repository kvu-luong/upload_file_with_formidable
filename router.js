const express = require('express');

var formidable = require('formidable');
const router = express.Router();




router.post('/', function (req, res){
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
      file.path = __dirname + '/public/images/' + file.name;
      console.log(file.path);
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });
  return res.status(200).json({ name: "helo brother" });
});

module.exports = router;