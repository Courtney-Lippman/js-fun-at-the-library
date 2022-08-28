function createLibrary(name, shelves) {
   var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    };
  };
  return library
};

function addBook(library, book) {
  return library.shelves[book.genre].push(book);
};

function checkoutBook(library, title, genre) {
  var match = false;
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      match = true;
      library.shelves[genre].shift(library.shelves[genre][i]);
      return `You have now checked out ${title} from the ${library.name}`;
    };
  };
   if (match === false) {
     return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
   };
};


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
}
