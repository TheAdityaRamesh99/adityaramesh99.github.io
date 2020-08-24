var http = require("http");
var fs = require("fs");
const url = require("url");

const avail = [
  "/about.html",
  "/contact-me.html"
];

//creating server
http.createServer(function(req, res){
  var parsedURL = url.parse(req.url, true);
  if(parsedURL.pathname === "/"){
    var filename = "./index.html";
  }
  else {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
  }
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("./404.html");
        return res.end();
      }
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    }

});
}).listen(8080);

console.log("Listening at port 8080");

