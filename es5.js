function Base (){}

Object.defineProperty(Base, 'foo', {
  get: function() {return this._foo},
  set: function(v) {this._foo = v}
})

Base.foo = [];
Base.foo.push('foo');

function Sub () {}
Sub.prototype = Object.create(Base.prototype)
Object.defineProperty(Sub, 'foo', Object.getOwnPropertyDescriptor(Base, 'foo'));
console.log(Sub.foo)
// class Sub1 extends Base {}


// // Prints "['foo'] undefined"
// console.log(Base.foo, Sub.foo);
// // Prints "['foo'] undefined"
// console.log(Base.foo, Sub1.foo);
// var foo = Object.getOwnPropertyDescriptor(Base, 'foo');
// console.log(foo.value)