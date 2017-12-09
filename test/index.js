var textfile = require('../index.js')
textfile.read('test/test.xml', 'xml')
    .then(data => {
        console.log('data:', data)
        data.documentElement.getElementsByTagName('child')[0].textContent = 'test-change'
        return textfile.write('temp/test.xml', data, 'xml')
    })
    .then(filePath => {
        console.log('write success: ', filePath)
    }, err => {
        console.error('err: ', err)
    })