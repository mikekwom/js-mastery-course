// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("United States", 10, "Washington DC"));
console.log(describeCountry("Japan", 8, "Tokyo"));
console.log(describeCountry("Mexico", 12, "Mexico City"));

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return `${((population / 7900) * 100).toFixed(1)}%`;
}
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld2 = function (population) {
  return `${((population / 7900) * 100).toFixed(1)}%`;
};
const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
console.log(percPortugal2, percChina2, percUSA2);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) =>
  `${((population / 7900) * 100).toFixed(1)}%`;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

// LECTURE: Functions Calling Other Functions
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )} of the world.`;
};
const descPortugal = describePopulation("Portugal", 10);
const descChina = describePopulation("China", 1441);
const descUSA = describePopulation("USA", 332);
console.log(descPortugal, descChina, descUSA);

// LECTURE: Intro to Arrays
const populations = [10, 1441, 332, 16];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
let neighbors = ["Canada", "Mexico", "Peru"];
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("germany")) {
  console.log("Probably not a central European country.");
}
neighbors[0] = "The Republic of Canada";
console.log(neighbors);

// LECTURE: Intro to Objects
const myCountry = {
  country: "United Staes",
  capital: "Washington DC",
  language: "English",
  population: 10,
  neighbors: ["Canada", "Mexico", "Portugal"],
};

// LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods
