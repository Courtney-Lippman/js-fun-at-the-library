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

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    reviews.push(newReview);
}
}

function calculatePageCount(bookTitle) {
return bookTitle.length * 20
};

 function writeBook(bookTitle, bookCharacter, genre) {
   var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
}
 return book
};

function editBook() {

};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
