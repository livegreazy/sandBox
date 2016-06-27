var price = 30;
var nyPercent = .08;
var bosPercent = .07;
var nyShirt = (30 - (price * nyPercent));
var bosShirt = (30 - (price * bosPercent));
var shirtDifference = (bosShirt - nyShirt);
var homeTeam = "Boston";
var rivalTeam = "New York";

console.log(" The difference between a shirt in " + homeTeam + " and a shirt in " + rivalTeam + " is " + shirtDifference +
  " with the shirt in " + rivalTeam + " costing $" + nyShirt + " and a shirt in " + homeTeam + " costing $" + bosShirt + ".");

// The Massachuesetts State sales tax
var tax = .0625;
// The Function takes in a price and returns the price after sales tax
function priceCalc(shirtPrice) {
  var finalPrice = (shirtPrice * tax) + shirtPrice;
  console.log(finalPrice);
}

priceCalc(60);
priceCalc(900);
priceCalc(23);