
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const projectdata = async () => {
    const dataref = db.collection('live');
const snapshot = await dataref.get();
snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });

snapshot.forEach(doc => {
  console.log(doc.data());
});
}
// projectdata()

// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("We are live on Port 3000");
});

// *** GET Routes - display pages ***
// Root Route
// app.get('/', function (req, res) {
//     res.render('pages/index');
// });
app.get('/', function (req, res) {
    var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
    
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        listnames: listnames,
    });
});



var str = JSON.parse('[{"name":"bill", "age":"26"}, {"name":"jeff", "age":"32"}]');

str.forEach(function(data){
    console.log(data.name);
});

app.get('/', function(req, res){
    res.render('pages/index', {str: JSON.stringify(str) });
});

