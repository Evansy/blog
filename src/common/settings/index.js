/**
 * 全局设置
 */
let debug = process.env.NODE_ENV === 'development';
// url base
export const apiUrl = debug ? 'http://dengyan.iok.la' : 'http://10.52.88.100:7777';
