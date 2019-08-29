const split = (str, delim) => {
  let test = str.split(delim);
  return test;
};

const pairs = str => {
  let test = str.match(/(..?)/g);
  return test;
};

const reverse = str => {
  let test = str
    .split("")
    .reverse()
    .join("");
  return test;
};

module.exports = {
  split,
  pairs,
  reverse
};
