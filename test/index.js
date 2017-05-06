var textfile = require('../index.js')
textfile.read('test/test.xml', 'xml', function(data) {
    console.log('data:', data)
    data.documentElement.getElementsByTagName('child')[0].textContent = 'test-change'
    textfile.write('temp/test.xml', data, 'xml', function(err) {
        if(!err){
            console.log('write success')
        }else{
            console.log('err:', err)
        }
    })
})