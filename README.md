# textfile
## 引用
```
var textfile = require('textfile')
```
## 读取文件
```
textfile.read(file,type,cb)
```
* file *必选* 文件路径
* type *可选* 文件类型（xml/json/string)
* cb *必选* 回调函数，传入读取到的数据，xml/json类型会转为对象，xml对象操作请参考：[https://www.npmjs.com/package/xmldom](https://www.npmjs.com/package/xmldom)
```
## 写入文件
textfile.write(file,data,type,cb)
```
* file *必选* 文件路径
* data *必选* 要写入的数据
* type *可选* 文件类型（xml/json/string)
* cb *可选* 回调函数，失败会传入err对象