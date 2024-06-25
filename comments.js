// create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];
// create web server
http.createServer(function(req, res) {
    // parse url
    var urlObj = url.parse(req.url, true);
    // get path name
    var pathname = urlObj.pathname;
    // read file
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            }
        });
    } else if (pathname === '/getComments') {
        var json_str = JSON.stringify(comments);
        res.end(json_str);
    } else if (pathname === '/addComment') {
        var comment = urlObj.query;
        comments.push(comment);
        res.end('ok');
    } else {
        fs.readFile(path.join(__dirname, pathname), function(err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    }
}).listen(3000, function() {
    console.log('running...');
});