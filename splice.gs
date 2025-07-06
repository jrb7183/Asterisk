/*
Slices a string or strings in a list at the given index start, removes the number of chars after start specified by 
plicelength, and inserts a given string into the original string(s). Always returns a list
*/

function splice(input = [""], start, spliceLength, insert = [""]) {
  if (input.length == 1) {
    let tempList = [];
    tempList = insert.map((x) => input[0].slice(0, start).concat(x).concat(input[0].slice(start + spliceLength)));
    return tempList;
  }
  return splice([input[0]], start, spliceLength, insert).concat(splice(input.slice(1), start, spliceLength, insert));
}