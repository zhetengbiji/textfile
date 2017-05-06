var fs = require('fs');
var DOMParser = require('xmldom').DOMParser;

function read(path, type, cb) {
    var str = '';
    if(typeof type === 'function') {
        cb = type
        type = 'string'
    }
    fs.readFile(path, {
        encoding: 'utf-8'
    }, function(err, data) {
        if(err) {
            str = '';
        } else {
            if(type === 'json') {
                try {
                    str = JSON.parse(str);
                } catch(error) {
                    str = data;
                }
            } else if(type === 'xml') {
                try {
                    str = new DOMParser().parseFromString(data)
                } catch(error) {
                    str = data;
                }
            } else if(type === 'string') {
                str = data;
            }
        }
        if(typeof cb === 'function') {
            cb(str);
        }
    });
}

function write(path, data, type, cb) {
    var str = '';
    if(typeof type === 'function') {
        cb = type
        type = 'string'
    }
    if(type === 'json') {
        try {
            str = JSON.stringify(data)
        } catch(error) {
            str = data.toString()
        }
    } else if(type === 'xml' || type === 'string') {
        str = data.toString()
    }
    fs.writeFile(path, str, {
        encoding: 'utf-8'
    }, cb);
}
var textFile = {
    read,
    write
}
module.exports = textFile;