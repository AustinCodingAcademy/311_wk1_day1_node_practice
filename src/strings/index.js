const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  return str.match(/.{2}/g);

}

const reverse = (str) => {
  let s = str.split('');
  let r = s.reverse('');
  return r.join('');

}

module.exports = {
  split,
  pairs,
  reverse
}