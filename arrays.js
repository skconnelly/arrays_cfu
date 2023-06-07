var foods = ["burger", "pizza", "kale", "pasta"];
var calories = [100, 550, 250, 18];
var rottenFoods = [true, false, false, true];

console.log(foods.slice(1,3))
// The `.slice` method outputs elements from index position[1] to index position[3]. 
// `.slice` includes its starting point [1], but not its ending point [3].

console.log(calories.push())
// The `.push` method appends (or adds) values to an array. 
// In this case, that means `.push` tells us that there are 4 elements. 

console.log(rottenFoods.shift())
// `.shift` outputs the first element in our array. 

// Index positions are the numerical assignments to each element, based on their order in the array. 
// We start counting from 0, so the first element has an index position of 0. 
// The fourth element would have an index position of 3. 