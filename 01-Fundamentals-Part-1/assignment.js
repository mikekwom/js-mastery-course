// ASSIGNMENT 1
const country = "United States";
const continent = "America";
const population = 10;
console.log(country, continent, population);
// ASSIGNMENT 2
let isIsland = false;
let language;
console.log(typeof isIsland, typeof language);
// ASSIGNMENT 3
language = "English";
// ASSIGNMENT 4
console.log(population + 1);
let description = `${country} is in ${continent} and its population of ${population} people speak ${language}`;
// ASSIGNMENT 5
description = `${country} is in ${continent} and its population of ${population} people speak ${language}`;
// ASSIGNMENT 6
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 - population} below average.`);
}
// ASSIGNMENT 7
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
// ASSIGNMENT 8
// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );
// if (Number(numNeighbors) === 1) {
//   console.log(`Only ${numNeighbors} border.`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border.`);
// } else {
//   console.log("No borders.");
// }
// ASSIGNMENT 9
if (language === "English" && population < 50) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} doesn't meet your criteria.`);
}
// ASSIGNMENT 10
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers.");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd in native speakers.");
    break;
  default:
    console.log("Great language too.");
}
// ASSIGNMENT 11
population > 33
  ? console.log(`${country}'s population is above average.`)
  : console.log(`${country}'s population is below average.`);
// better way
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
