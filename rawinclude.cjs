//import * as fsPromises from 'fs/promises';

//export const rawinclude =  await fsPromises.readFile(fileName, { encoding: 'utf8' } );

var fs = require('fs');

module.exports = {
    rawinclude: function(path) {
        return fs.readFileSync(path);
    }
};