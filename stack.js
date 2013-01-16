var assert = require('assert');

var Stack = function() {
  this.contents = [];
};

Stack.prototype.push = function(el) {
  // implement this using splice() and length
};

Stack.prototype.pop = function() {
  // implement this using splice() and length
};

var s = new Stack();

assert.deepEqual(s.contents, []);

// push ------------------------------------------------
//assert.deepEqual(s.push(1), [1]);
//assert.deepEqual(s.contents, [1]);

//assert.deepEqual(s.push(2), [1, 2]);
//assert.deepEqual(s.contents, [1, 2]);

//assert.deepEqual(s.push(3), [1, 2, 3]);
//assert.deepEqual(s.contents, [1, 2, 3]);
// -----------------------------------------------------

// pop -------------------------------------------------
//assert.strictEqual(s.pop(), 3);
//assert.deepEqual(s.contents, [1, 2]);

//assert.strictEqual(s.pop(), 2);
//assert.deepEqual(s.contents, [1]);

//assert.strictEqual(s.pop(), 1);
//assert.deepEqual(s.contents, []);

//assert.strictEqual(s.pop(), null);
//assert.deepEqual(s.contents, []);
// -----------------------------------------------------

console.log('PASS!');
