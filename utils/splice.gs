/*
Slices a string or strings in a list at the given index start, removes the number of chars after start specified by 
plicelength, and inserts a given string into the original string(s). Always returns a list
*/

function splice(inputs = [""], start, length, inserts = [""]) {
  newList = []

  inputs.forEach(input => {
    newList = newList.concat(inserts.map(insert => input.slice(0, start) + insert + input.slice(start + length)));
  });

  return newList
}