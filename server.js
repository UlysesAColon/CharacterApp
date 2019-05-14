const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();


// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

// app.use(express.static(path.join(__dirname, 'client/public')));

//if (process.env.NODE_ENV === 'production') {
//  app.use(express.static('client/public/'));
//  app.get('*', function(req, res){
//    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
//  });
//}

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname,'client','build','index.html'));
//   });
  
   //build
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname+'/client/public/index.html'));
   })

  app.listen(port, () => console.log(`Server started on port ${port}`));