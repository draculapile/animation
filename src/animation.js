'use strict';

/**
 * 常量定义
 */
// 初始化状态
const STATE_INITIAL = 0
// 开始状态
const STATE_START = 1
// 结束状态
const STATE_END = 2

// 同步任务
const TASK_SYNC = 0
// 异步任务
const TASK_ASYNC = 1

/**
 * 帧动画类
 */
export default class Animation {
  /**
   * taskQuene 任务链
   */
  constructor () {
    this.taskQuene = []
    this.timeline = new Timeline()
    this.state = STATE_INITIAL
    this.index = 0
  }

  test() {
    console.log('animate')
  }

  /**
   * 添加一个同步任务，去预加载图片
   * @param {Array} imglist
   */
  loadImage (imglist) {
    let taskFn = function (next) {
      loadImage(imglist.slice(), next())
    }
    let type = TASK_SYNC

    return this._add(taskFn, type)
  }

  /**
   * 往任务链上添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
   * @param {Object} ele dom 对象
   * @param {Array} positions 位置数组
   * @param {String} imageUrl 图片 src
   */
  changePosition (ele, positions, imageUrl) {

  }

  /**
   * 往任务链上添加一个异步定时任务，通过定时改变 image 标签的 src 属性，实现帧动画
   * @param {Object} ele dom 对象
   * @param {Array} imglist 图片地址数组
   */
  changeSrc (ele, imglist) {

  }

  /**
   * 高级用法，添加一个异步定时执行的任务
   * 该任务自定义动画每帧执行的任务函数
   * @param {Function} taskFn 任务函数
   */
  enterFrame (taskFn) {

  }

  /**
   * 添加一个同步任务，可以在上一个任务完成后执行回调函数
   * @param {Function} callback 回调函数
   */
  then (callback) {

  }

  /**
   * 开始执行任务，异步定时任务执行的间隔
   * @param {*} interval
   */
  start (interval) {

  }

  /**
   * 添加一个同步任务，该任务就是回退到上一个任务中，
   * 实现重复上一个任务的效果
   * 可以定义重复的次数
   * @param {*} times
   */
  repeat (times) {

  }

  /**
   * === repeat()
   * 无限循环上一次的任务
   */
  repeatForever () {

  }

  /**
   * 设置当前任务执行结束后到下一个任务开始前的等待时间
   * @param {*} time
   */
  wait (time) {

  }

  /**
   * 暂停当前的异步定时任务
   */
  pause () {

  }

  /**
   * 重新执行上一次暂停的异步任务
   */
  restart () {

  }

  /**
   * 释放资源（定时器）
   */
  dispose () {

  }
}

class Timeline {

}

/**
 *
 */
class LoadImage {
  /**
   *
   * @param {*} images 加载图片的数组或者对象
   * @param {*} callback 全部图片加载完毕后调用的回调函数
   * @param {*} timeout 加载超时的时长
   */
  constructor (images, callback, timeout) {

  }
}
