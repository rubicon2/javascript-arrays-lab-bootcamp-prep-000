// Add your functions and code here
kittens;

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newArray = kittens;
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = kittens;
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}