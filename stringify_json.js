'use strict';

var fs = require('fs');

var input;
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err) {
    console.log("error: " + err);
  } else {
    fs.writeFile('stringed_' + process.argv[2], JSON.stringify(data, null, 4), 'utf8',  function(err){
      if(err) {
        console.log("error: " + err);
      } else {
        console.log("done");
      }
    });
  }
});
