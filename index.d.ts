declare module textFile {
    function read(filePath: string, type: string, callback?: Function): Promise<object | string>
    function write(filePath: string, data: object | string, type: string, callback?: Function): Promise<string | object>
}
export default textFile