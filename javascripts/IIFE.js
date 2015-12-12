var FruitMaker = (function() {

  var Fruits = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits : function() {
      return Fruits;
    },
    setFruits : function(newFruits) {
      myFruits = newFruits;
    },
    addFruit : function(toAddFruit) {
      myFruits.push(toAddFruit);
    }
  };

})();

console.log("FruitMaker.getFruits() = ", FruitMaker.getFruits());