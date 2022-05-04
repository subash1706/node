var fs = require('fs');
let contactData;
try {
    contactData = fs.readFileSync('phonebook.dat', 'utf-8');
    var text =  contactData.toString();
    var lines = text.split('\n');

    lines.forEach(function(line) {
        var parts = line.split(' ');
        var name = parts[0];
        var phone = parts[2];
        console.log(name = ' - ' + phone);
    });
} catch (ex) {
    console.log(`ERROR!!!: ${ex}`);
}
console.log('completed.....');
