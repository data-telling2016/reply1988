var express = require('express'),
    fs      = require('fs');

var router  = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var file = 'public/download_files/answerme1988_analysis.pdf';
  res.download(file);
});

module.exports = router;
