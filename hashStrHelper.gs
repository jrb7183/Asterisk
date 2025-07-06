// Checks for word-initial/final environments
// RIGHT NOW THIS IS A WEAK CHECK, SO SOME FALSE POSITIVES CAN OCCUR. THEY'RE FILTERED OUT IN A SECOND CHECK LATER, BUT, IDEALLY, THAT WOULDN'T HAVE TO BE THE CASE
function hashStrHelper(str = "", env = "") {
  if (env.includes("#")) {
    const hashPos = env.indexOf("#");
    if (hashPos == 0 && str.includes(env.slice(1, env.length))) {
      return true;  
    } if (hashPos == env.length - 1 && str.includes(env.slice(0, env.length - 1))) {
      return true;
    } if (hashPos == 0 && env.slice(1, env.length).includes("#") && str == env.slice(1, env.length - 1)) {
      return true;
    }
  }
}