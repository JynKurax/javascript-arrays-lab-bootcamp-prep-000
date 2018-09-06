// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destuctivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  kittens = [...kittens, name]
  return kittens
}

function prependKitten(name){
  kittens = [name, ...kittens]
  return kittens
}

function removelastkitten(){
  kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten(){
  kittens.slice()
  return kittens
}