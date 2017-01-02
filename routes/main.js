/**
 * Created by Jang on 2016-04-20.
 */
var express = require('express'),
    fs      = require('fs');
var router  = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile('public/main.html', function(err, html){
        if(err) {
            console.log(err);
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    });
});


module.exports = router;
