'use strict';

/**
 * 使用 import export 的语法,
 * 需要在 index.html 的 script 标签里指定 type="module"
 * 且要启一个 http-server 服务去访问 index.html, 否则将会有一个 CORS 保护报错
 * npm i -g http-server
 * cd 到工作目录下
 * http-server -c-1
 */
import Animation from '../src/animation.js'
const animation = new Animation()

console.log(animation.test())
function _$ (id) {
  return document.getElementById(id)
}