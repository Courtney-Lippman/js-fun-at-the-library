function createLibrary(name, shelves) {
   var library = {
    name: name,
    shelves: { //How could I make this so that it could be any shelf?
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
//(denverLibrary, "Pride and Prejudice", "fiction")
function checkoutBook(library, title, genre) {
  //Go to library (library object:denverLibrary) inquire if they have a certain book. You give the librarian the title of the book (this will be param title) (given string: "prideAndPrejudice") and the genre (thi will be param genre) (given string: 'fiction').

  //The librarian goes to the shelf in the library that is associated with the genre you told them.

  if (genre === `fantasy`) {
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === title) {
   library.shelves.fantasy.shift(library.shelves.fantasy[i]);
  return `You have now checked out ${title} from the ${library.name}`;
} else if (!library.shelves.nonFiction[i].title === title){
   return `Sorry, there are currently no copies of ${title} at the ${library.name}`;
}
    }
  } else if (genre === 'fiction') {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === title) {
        library.shelves.fiction.shift(library.shelves.fiction[i]);
        return `You have now checked out ${title} from the ${library.name}`;
      } else if (!library.shelves.nonFiction[i].title === title) {
        return `Sorry, there are currently no copies of ${title} at the ${library.name}`;
      }
    }
  } else if (genre === 'nonFiction') {
     for (var i = 0; i < library.shelves.nonFiction.length; i++) {
       if (library.shelves.nonFiction[i].title === title)  {
         library.shelves.nonFiction.shift(library.shelves.nonFiction[i]);
                return `You have now checked out ${title} from the ${library.name}`;
       } else if (!library.shelves.nonFiction[i].title === title){
             return `Sorry, there are currently no copies of ${title} at the ${library.name}`
       }

     }
  }

  //clean up else if statements and for loops for all shelves.

  //The look through the shelf comparing the title they see with the title of the book that you gave them.

  // Once they find the book title that matches the book title you gave them, they take the book off the shelf. Or they go through the entire shelf and cannot match the titles.

  //They give the book to you and say `You have now checked out ${title} from the ${library.name}`. Or they come back and say `Sorry, there are currently no copies of ${title} at the ${library.name}`





  return `You have now checked out ${title} from the ${library.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
