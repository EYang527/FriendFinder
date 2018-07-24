  var path=require("path");
 var personArr=[];
var friends=require("../data/friends.js")

  //API routes
  module.exports=function(app)
  {
    app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log(res);
    });

    app.post("/api/friends", function(req, res) {
    let newPerson=req.body;  // set newPerson with req
    console.log(newPerson);  // log new person

    var newArr=[];
    var arrBychar=[];
    
    var diff=0;

    for (var i in friends.friendsList)
    {
        console.log("\n",friends.friendsList[i].name);
        for ( var j=0;j<10;j++)
        {
           //console.log(" array indice ["+j+"]=> ",friends.friendsList[i].pArr[j]+"-"+newPerson.pArr[j]);
           diff=Math.abs(parseInt(friends.friendsList[i].pArr[j])-parseInt(newPerson.pArr[j]));
           
           //console.log(diff);
           newArr.push(parseInt(diff));
        }     
        arrBychar.push(friends.friendsList[i].name);
        arrBychar.push(newArr);
        newArr=[];
    }
    console.log("newArrChar\n",arrBychar);

    console.log("finding match ....");
//     var res;
// //https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332


var arr1=[];
var arrSum = arr => arr.reduce((a,b) => a + b, 0)
const arrMin = arr => Math.min(...arr); //or Math.min.apply(null, arr);

    for (var i=0 ;i<arrBychar.length;i++)
        {
           i++;
           
           arr1.push(arrSum(arrBychar[i]));
        }

        console.log("arrrr",arr1);   // arrays containing all results for all friends
        var match=arrMin(arr1);

        var indexMin= arr1.indexOf(match);
        console.log("your Match is ",friends.friendsList[indexMin].name)  

        let returnName= friends.friendsList[indexMin].name;
        let returnImage= friends.friendsList[indexMin].image;


        personArr.push(returnName);
        personArr.push(returnImage);
        res.json(personArr)
        personArr=[]; // empty for new search

        friends.friendsList.push(newPerson); //store new person
  
  });

}

  //https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
