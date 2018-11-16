// Static Methods and Inheritance
// Suppose you have a simple ES6 class with a static method.
let too = 34
class Base {
  static foo(){
    return 42
  }
  static get too() { return too; }
  static set too(v) { too = v }
  static get three() {return this.hasOwnProperty('_three')? this._three: void 0}
  static set three(v) { this._three = v}
}
Base.three = [];
// You can use extends to create a subclass and still have access to the foo() function
class Sub extends Base {}
console.log(Base.three, Sub.three)
// Prints "[] undefined"
console.log(Base.three, Sub.three);
console.log(Base.three === Sub.three); // false

Base.three.push('foo');

// Prints "['foo'] undefined"
console.log(Base.three, Sub.three);
console.log(Base.three === Sub.three); // false
// console.log(Sub.foo())

// console.log(Base.too, Sub.too);
// Sub.too = 44;
// console.log(Base.too, Sub.too);


// console.log(Base.three, Sub.three);
// Sub.three.push('foo');
// console.log(Base.three, Sub.three)
// console.log(Base.three === Sub.three)