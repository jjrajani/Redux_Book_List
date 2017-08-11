/*
  - action creator returns and action.
  - an action is a function that runs though all
    of the state in our app.
*/

export function selectBook(book) {
  console.log('a book has been seleted', book.title);
}
