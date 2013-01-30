var assert = require('assert');

var Stack = function() {
  this.contents = [];
};

Stack.prototype.push = function(el) {
  this.contents.splice(this.contents.length,0,el);
  return this.contents;
};

Stack.prototype.pop = function() {
  if(this.contents.length==0){
  	return null;
  }
  x = this.contents.length;
  this.contents.splice(this.contents.length-1,1);
  return x;
};

var s = new Stack();

assert.deepEqual(s.contents, []);

// push ------------------------------------------------
assert.deepEqual(s.push(1), [1]);
assert.deepEqual(s.contents, [1]);

assert.deepEqual(s.push(2), [1, 2]);
assert.deepEqual(s.contents, [1, 2]);

assert.deepEqual(s.push(3), [1, 2, 3]);
assert.deepEqual(s.contents, [1, 2, 3]);
// -----------------------------------------------------

// pop -------------------------------------------------
assert.strictEqual(s.pop(), 3);
assert.deepEqual(s.contents, [1, 2]);

assert.strictEqual(s.pop(), 2);
assert.deepEqual(s.contents, [1]);

assert.strictEqual(s.pop(), 1);
assert.deepEqual(s.contents, []);

assert.strictEqual(s.pop(), null);
assert.deepEqual(s.contents, []);
// -----------------------------------------------------

console.log('PASS!');
