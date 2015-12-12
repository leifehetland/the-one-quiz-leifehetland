var FruitMaker = (function(fruitMaker) {

  fruitMaker.slices = function(fruit, amount) {
    var newArray = [];
    for(var i = 0; i < amount; i++) {
      newArray[i] = fruit;
    }
    return newArray;
  };

  return fruitMaker;

})(FruitMaker);

console.log("FruitMaker.slices('pineapples', 3) = ", FruitMaker.slices("pineapples", 3));