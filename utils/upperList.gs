// Returns an array containing pairs of uppercase chars and their index in a given str
function upperList(str = "") {
  let uppers = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if(/[A-Z]/.test(char)) {
      uppers = uppers.concat([[char, i]]);
    }
  }
  return uppers;
}
