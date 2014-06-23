// problem: why does it log out out 1000?
// fix it to log 100, 200, 300, 400, 500 etc

// loops 10 times from 0 - 1000 in increments of 100

// ANSWER: Create a self invoking anonymous function so that each 
// waitFor is called with a different value of i (local to the function)
for (var i = 0; i < 1000; i += 100) {
	(function(k) {
		waitFor(k, function then() { console.log(k) }); // k + 100 if you need [100, 1000]
	})(i);
}

// this will run a callback function after waiting milliseconds
function waitFor(milliseconds, callback) {
	setTimeout(callback, milliseconds)
}
