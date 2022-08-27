function shelfBook(book, shelf) {
  if (shelf.length < 3) {
      shelf.unshift(book);
  };
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i,1);
    };
  };
};

function listTitles(shelf) {
  var allTitles = '';
  for (let i = 0; i < shelf.length; i++) {
    var title = shelf[i].title;
    if (i === 0) {
         allTitles += title;
    } else
         allTitles += ", " + title;
    };
return allTitles;
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
     var onShelf = true;
    } else {
     onShelf = false;
    };
  };
return onShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
