var fs = require('fs');
console.log('start reading the file...');
fs.readFile('phonebook.dat', function (err, contactData){
    if(err) {
        console.log(`ERROR!!! ${err}`);
        return console.log(err);
    }
    var text = contactData.toString();
    let myfunc = function () {
        console.log('INSIDE readFILE');
    }
    setTimeout(myfunc, 3000);
    var lines = text.split('\n');
    lines.forEach(function(line) {
        var parts  = line.split(' ');
        var name = parts[0];
        var phone = parts[2];
        console.log(name + ' - ' + phone);
    });
});
 console.log('end of the file')