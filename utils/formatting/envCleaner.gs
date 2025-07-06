// Iterates through environment until it has the proper format for processing
function envCleaner(env = "") {
  if (env.includes("*")) {
    return envCleaner(splice([env], env.indexOf("*"), 1, [""])[0]);
  }
  if (env.includes("∅")) {
    return envCleaner(splice([env], env.indexOf("∅"), 1, ["*"])[0]);
  }
  if (env.includes("$")) {
    return envCleaner(splice([env], env.indexOf("$"), 1, ["#"])[0]);
  }
  return env;
}