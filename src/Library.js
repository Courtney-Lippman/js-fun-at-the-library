function createLibrary(name, shelves) {
   var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library
};

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    return library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    return library.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  };
};
function checkoutBook(library, title, genre) {
  if (genre === `fantasy`) {
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === title) {
        library.shelves.fantasy.shift(library.shelves.fantasy[i]);
        return `You have now checked out ${title} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
  else if (genre === `fiction`) {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === title) {
        library.shelves.fiction.shift(library.shelves.fiction[i]);
        return `You have now checked out ${title} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
  else if (genre === `nonFiction`) {
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title === title) {
        library.shelves.nonFiction.shift(library.shelves.nonFiction[i]);
        return `You have now checked out ${title} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
  return `You have now checked out ${title} from the ${library.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
