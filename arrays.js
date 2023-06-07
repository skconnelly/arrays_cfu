var foods = ["burger", "pizza", "kale", "pasta"];
var calories = [100, 550, 250, 18];
var rottenFoods = [true, false, false, true];

console.log(foods.slice(1,3))
// The `.slice` method outputs elements from element[1] to element[3]. 
// `.slice` includes its starting point [1], but not its ending point [3].

console.log(calories.push())
// The `.push` method appends (or adds) values to an array. 
// In this case, that means `.push` tells us that there are 4 elements. 

console.log(rottenFoods.shift())
// `.shift` outputs the first element in our array. 