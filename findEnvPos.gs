// Finds where previous sounds should be inserted for modern null 'sounds'
function findEnvPos(word = "", env = "", bool = true) {
  if (env[0] == "#" && env[env.length - 1] == "#" && word == splice([env.slice(1, env.length - 1)], env.indexOf("_") - 1, 1, [""])[0]) {
    return [env.indexOf("_") - 1];
  }
  if (word.length < env.length - 1) {
    return -1;
  }
  if (bool && env[env.length - 1] == "#" && word.slice(word.length - env.length + 2, word.length) == splice([env.slice(0, env.length - 1)], env.indexOf("_"), 1, [""])[0]) {
    return [word.length - env.length + env.indexOf("_") + 2];
  }
  if (env[0] == "#" && word.slice(0, env.length - 2) == splice([env.slice(1, env.length)], env.indexOf("_") - 1, 1, [""])[0]) {
    return [env.indexOf("_") - 1];
  }
  if (word.slice(word.length - env.length + 1, word.length) == splice([env], env.indexOf("_"), 1, [""])[0]) {
    return [word.length - env.length + env.indexOf("_") + 1];
  }
  return findEnvPos(word.slice(0, word.length - 1), env, false);
}