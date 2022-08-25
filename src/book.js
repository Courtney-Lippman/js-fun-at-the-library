function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
var mainCharacter =  {
    name: name,
  age: age,
  pronouns: pronouns
}
return mainCharacter;

}


module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
