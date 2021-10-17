
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

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


app.get('/',async function(req, res){
  let project_data = [];
  const snapshot = await db.collection('live').get()
    console.log(snapshot.docs.map(doc => project_data.push(doc.data())));
    res.render('pages/index', {
      project: project_data
     });
});

