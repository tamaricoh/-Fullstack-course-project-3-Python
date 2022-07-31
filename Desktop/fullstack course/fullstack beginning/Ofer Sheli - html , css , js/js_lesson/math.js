let rnd = Math.random();
// get a random num in range (0,1)
// example - 0.02365259582590573

let rndRange = Math.random() * 10;
// get a random num in range (0,10)
// example - 8.958526708577164

let rndRangeRound = Math.round(rndRange);
// if rndRange is closer to its upper val it returns its upper val
// if rndRange is closer to its lower val it returns its lower val
// example -
// rndRange = 8.958526708577164
// rndRangeRound = 9

let rndRangeUpper = Math.ceil(rndRange);
// return its upper val
// example -
// rndRange = 8.958526708577164
// rndRangeUpper = 9
// we will never get 0 in this example

let rndRangeLower = Math.floor(rndRange);
// return its lower val
// example -
// rndRange = 8.958526708577164
// rndRangeLower = 8
// we will never get 10 in this example

let pow = Math.pow(4, 2);
// return 4^2
// pow = 16

let max = Math.max(1, 2, 3, 4, 5, 6);
// max = 6

let min = Math.min(1, 2, 3, 4, 5, 6);
// min = 1

let maxArr = Math.max(...[0, 1, 2, 3, 4, 5]);
// maxArr = 5

let minArr = Math.min(...[0, 1, 2, 3, 4, 5]);
// minArr = 0
