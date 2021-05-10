// // var声明的变量会挂到window上，而let和const不会
// // var声明的变量存在变量提升，而let和const不会
// // let和const声明形成块作用域，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
// // 同一作用域下let和const不能声明同名变量，而var可以
// // 暂时性死区，let和const声明的变量不能在声明前被使用
// // Object.defineProperty(global, 'b', {
// //   value: 1,
// //   writable: false
// // })
//
// const obj = {
//   name: 'haha',
//   methods1() {
//     console.log(this.name + `${arguments | 'no args'}`)
//   }
// }
//
// function list () {
//   return Array.prototype.slice.call(arguments)
// }
//
// function addArgs(arg1, arg2) {
//   return arg1 + arg2
// }
//
// const methodsX = obj.methods1
// methodsX()
//
// const leadingMethods = list.bind(null, 66)
//
// const leadingMethodsSeven = addArgs.bind(null, 10)
//
// console.log(leadingMethodsSeven(10))
// console.log(leadingMethods(1, 2, 3))


// function list() {
//   return Array.prototype.slice.call(arguments)
// }
//
// function addArguments(arg1, arg2) {
//   return arg1 + arg2
// }

// Function.prototype.myCall = function (fatherForBind, ...args) {
//   const fn = Symbol('fn')
//   fatherForBind = fatherForBind || (window ? window : global)
//   console.log(fatherForBind)
//   fatherForBind[fn] = this
//   const result = fatherForBind[fn](...args)
//   delete fatherForBind[fn]
//   return result
// }
//
// foo.myCall(obj)
//
// Function.prototype.myBind = function (fatherForBind, ...args) {
//   let afterBindFun = null
//   const fn = Symbol('fn')
//   fatherForBind[fn] = this
//   afterBindFun = fatherForBind[fn]
//   return afterBindFun
// }

// Function.prototype.myBind = function (thisArg, ...args) {
//   const self = this
//
//   // new优先级
//   function FBound() {
//     // this instanceof self 当函数被new时 this 指向fBound的实例，this 为 self 的实例是因为 fBound.prototype = Object.create(self.prototype)
//     // 非 new 的情况 this 指向执行的上下文对象
//     const thisOfApply = this instanceof self ? this : thisArg
//     const lastInputArgumentsArr = Array.prototype.slice.call(arguments)
//     self.apply(thisOfApply, args.concat(lastInputArgumentsArr))
//   }
//
//   // 继承原型上的属性和方法
//   FBound.prototype = Object.create(self.prototype)
//
//   return FBound
// }
//
// //测试
// const obj = {name: '写代码像蔡徐抻'}
//
// function foo() {
//   console.log(this.name)
//   console.log(arguments)
// }
//
// const prev = 1
//
// const testArr = [1, 2, 3, [2, 3]]
//
// function reducer (accumulator, currentValue) {
//   return accumulator.concat[currentValue instanceof Array ? redu]
// }
//
// console.log(testArr.reduce(reducer, []))


// function Foo(name, age) {
//     this.name = name;
//     this.age = age
// }
//
// Foo.prototype.getName = function () {
//   return this.name
// }
//
// function myNew (factoryFun, ...args) {
//   const obj = Object.create(factoryFun.prototype)
//
//   const result = factoryFun.apply(obj, args)
//
//   return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
// }
//
// console.log(myNew(Foo, 'name1', 2).__proto__)

// 原型链继承

// function Parent() {
//   this.name = 'Parent'
// }
//
// Parent.prototype.getName = function () {
//   return this.name
// }

// function Child() {
//
// }
//
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
//
// const child = new Child()
// console.log(child.__proto__ === Child.prototype)

function Parent(name = 'untitled') {
  this.name = name
}

Parent.prototype.getName = function () {
  return this.name
}

function Child(params) {
  Parent.call(this, params)
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

//测试
const child = new Child()
console.log(child.__proto__ === Child.prototype)
const parent = new Parent()
child.getName()                  // ['zhangsan']
parent.getName()                 // 报错, 找不到getName()

