var ep = require("express");
var ap = ep();
ap.use(ep.static(__dirname + '/Frontend'));
ap.get('/', function(req,res){
    res.sendFile(__dirname + '/Frontend/HTML/index.html');
});
ap.get('/resume', function(req,res){
    res.sendFile(__dirname + '/Frontend/HTML/resume.html');
});
ap.get('/mail', function(req,res){
    res.send("Mail Service Will be Added soon!!");
});
ap.get('/clock', function(req,res){
    res.sendFile(__dirname + '/Frontend/HTML/clock.html');
});

var po = process.env.PORT || 3000;
ap.listen(po,function(){
    console.log("Site Running on http://localhost:" + po);
});