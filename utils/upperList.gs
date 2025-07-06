// Returns an array containing pairs of uppercase chars and their index in a given str
function upperList(str = "") {
  const findUppers = (char, index) => {
    if(/[A-Z]/.test(char)) {
      return [char, index];
    }
    return -1;
  }
  const uppers = str.split("").map(findUppers);
  return uppers.filter(function(x) {return x != -1});
}
