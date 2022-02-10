var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var path = require('path')

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  cloud: './cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:8800/parse', // Don't forget to change to https if needed
  liveQuery:{
    classNames: ['pokemon']
  }  
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);


app.use(express.static(path.join(__dirname, './client/build')))
app.use(express.json())
app.use('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'./client/build/index.html' ))
})
// app.listen(8800, function() {  
//   console.log('parse-server-example running on port 8800.');
// });

// Initialize a LiveQuery server instance, app is the express app of your Parse Server
let httpServer = require('http').createServer(app);
httpServer.listen(8800);
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);