// Declare Marvel and DC hero arrays
let marvelHeroes = ["Thor", "Iron Man", "Spider-Man"];
let dcHeroes = ["Superman", "Flash", "Batman"];

// ❌ Incorrect merge using push (creates nested array)
marvelHeroes.push(dcHeroes);
console.log("Using push:", marvelHeroes); // ["Thor", "Iron Man", "Spider-Man", ["Superman", "Flash", "Batman"]]

// ✅ Correct merge using concat (returns new array)
let allHeroesConcat = marvelHeroes.concat(dcHeroes);
console.log("Using concat:", allHeroesConcat); // ["Thor", "Iron Man", "Spider-Man", "Superman", "Flash", "Batman"]

// ✅ Preferred merge using spread operator
let allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log("Using spread:", allHeroesSpread); // ["Thor", "Iron Man", "Spider-Man", "Superman", "Flash", "Batman"]

// Flatten deeply nested array
let nestedArray = [1, 2, [3, 4], [5, [6, 7]], 8];
let flatArray = nestedArray.flat(Infinity);
console.log("Flattened array:", flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// Check if a value is an array
console.log("Is array?", Array.isArray("Hitesh")); // false

// Convert string to array
let strToArray = Array.from("Hitesh");
console.log("Array from string:", strToArray); // ["H", "i", "t", "e", "s", "h"]

// Convert multiple variables to array using Array.of
let score1 = 100,
  score2 = 200,
  score3 = 300;
let scoresArray = Array.of(score1, score2, score3);
console.log("Array of scores:", scoresArray); // [100, 200, 300]
