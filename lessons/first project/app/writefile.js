var fs = require('fs');
var content = 'Tom and Jerry are very good friends';
var writestream = fs.createWriteStream('movies.txt');
writestream.write(content, 'UTF-8');
writestream.end();

writestream.on('finish', function(){
    console.log('content written to the file');
});
writestream.on('error', function (err){
    console.log(`ERROR!!! ${err.stack}`);
});
console.log('END......');