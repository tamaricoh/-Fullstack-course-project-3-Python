let x = 0;

// if else

if (x == 0) {
  // condition is true
  // what to do
} else {
  // condition is false
  // what to do
}

// switch case

switch (x) {
  // switch checks like === then , if we get data from user
  // we wiil need to check the cases as strings
  // example - case "0" :
  // check if x === 0
  case 0:
    //what to do
    break;
  // if x != 0 check if x === 1
  case 1:
    //what to do
    break;
  // if x != 0 and x != 1 check if x === 2
  case 2:
    //what to do
    break;
  // if x != 0 and x != 1 and x != 2 then do
  default:
    // what to do
    break;
}

// ternary if

x > 0 ? /*what to do if true*/ null : /*what to do if false*/ null;
