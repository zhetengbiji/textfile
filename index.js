var fs = require('fs')
var DOMParser = require('xmldom').DOMParser

function read(filePath, type, cb) {
    var str = ''
    if(typeof type === 'function') {
        cb = type
        type = 'string'
    }
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, {
            encoding: 'utf-8'
        }, function(err, data) {
            if(err) {
                str = ''
            } else {
                if(type === 'json') {
                    try {
                        str = JSON.parse(data)
                    } catch(error) {
                        console.warn(error)
                        str = data
                    }
                } else if(type === 'xml') {
                    try {
                        str = new DOMParser().parseFromString(data)
                    } catch(error) {
                        console.warn(error)
                        str = data
                    }
                } else if(type === 'string') {
                    str = data
                }
            }
            if(typeof cb === 'function') {
                cb(str)
            }
            resolve(str)
        })
    })
}

function write(filePath, data, type, cb) {
    var str = ''
    if(typeof type === 'function') {
        cb = type
        type = 'string'
    }
    if(type === 'json') {
        try {
            str = JSON.stringify(data, null, 4)
        } catch(error) {
            str = data.toString()
        }
    } else if(type === 'xml' || type === 'string') {
        str = data.toString()
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, str, {
            encoding: 'utf-8'
        }, function(err) {
            if(typeof cb === 'function') {
                cb(err, filePath)
            }
            if(err) {
                reject(err)
            } else {
                resolve(filePath)
            }
        })
    })
}
var textFile = {
    read,
    write
}
module.exports = textFile;