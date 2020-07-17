//Problem-1: feet To mile convert (Start)
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(10000);
console.log("The value of mile is :", result);

//Problem-2: woodCalculation (Start)
function woodCalculator(chair, table, bed) {
  var chair = chair * 1;
  var table = table * 3;
  var bed = bed * 5;
  var totalValue = chair + table + bed;
  return totalValue;
}
var totalQubicWood = woodCalculator(2, 3, 3);
console.log("Total number of QUbic wood is :", totalQubicWood);

//Problem-3: brickCalculator (Start)

function brickCalculator(value) {
  var feetValue = 1;
  for (var i = 1; i <= value; i++) {
    if (i <= 10) {
      feetValue = i * 1.5;
    } else if (i > 10 && i <= 20) {
      feetValue = i * 1.2 + 3;
    } else if (i > 20 && i <= 30) {
      feetValue = i * 1 + 7;
    } else {
      console.log("Floor not found");
      break;
    }
  }
  return feetValue;
}
var totalFeet = brickCalculator(21);
var totalBricks = totalFeet * 1000;
console.log('Total Bricks is :', totalBricks);

//Problem-4: Find out the tinyFriend name (Start)

function tinyFriend(name) {
  var smallestName = name[0];
  for (var i = 0; i < name.length; i++) {
    var currentName = name[i];
    if (currentName.length < name.length) {
      smallestName = currentName;
    }
  }
  return smallestName;
}
var result = tinyFriend(["sadia", "mim", "jemi", "rafiq"]);
console.log("Smallest name is :", result);
