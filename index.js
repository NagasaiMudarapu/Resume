var ep = require("express");
var ap = ep();
ap.get('/', function(req,res){
    res.sendFile(__dirname + '/Frontend/HTML/index.html');
});
ap.get('/resume', function(req,res){
    res.sendFile(__dirname + '/Frontend/HTML/resume.html');
});
var po = process.env.PORT || 3000;
ap.listen(po,function(){
    console.log("Site Running on http://localhost:" + po);
});