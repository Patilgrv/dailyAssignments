const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`Given array of seasonal fruits: [${arraySeasonalFruits}]`);
console.log("-------step 1--------");
console.log(`First element in the given array is: ${arraySeasonalFruits[0]}`);
console.log(`Last element in the given array is: ${arraySeasonalFruits[arraySeasonalFruits.length-1]}`);
console.log("-------step 2--------");
console.log(`Adding Papaya before Banana `);
arraySeasonalFruits.unshift('Papaya')
console.log( arraySeasonalFruits);
console.log("-------step 3--------");
console.log(`Removing 'Mango' from the array`);
arraySeasonalFruits.splice(4,1)
console.log(arraySeasonalFruits);
console.log("-------step 4--------");
console.log(`Inserting 'Pineapple' at the last position`);
arraySeasonalFruits.push('Pineapple')
console.log(arraySeasonalFruits);
console.log("-------step 5--------");
console.log('Inserting "Dragon Fruit" before "WaterMelon"');
arraySeasonalFruits.splice(4,0,'Dragon Fruit')
console.log(arraySeasonalFruits);
console.log("-------step 6--------");
console.log(`Replace 'Orange with 'Kiwi'`);
arraySeasonalFruits.splice('2',1,'Kiwi')
console.log(arraySeasonalFruits);
console.log("-------step 7--------");
console.log(`Log the element for index starting from 1 to 4`);
let newFruitarray = arraySeasonalFruits.slice(1,5)
console.log(newFruitarray);
console.log("-------step 8--------");
console.log('Last 3 element in array using length property');
let last3Fruits = arraySeasonalFruits.slice(-3)
console.log(last3Fruits);