//dependencies
var path=require("path");

module.exports=function(app) {
// root page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// link to survey.html page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/deleteFr", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/delete.html"));
});
// --- any another path redirect to home using "*"
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});  

}
