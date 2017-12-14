/**
 * 全局设置
 */
let debug = process.env.NODE_ENV === 'development';
// url base
export const apiUrl = debug ? 'http://api.iskcy.com' : 'http://localhost:8888';
