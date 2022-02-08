const {limitList} = require("./home.js")

function findAuthorById(authors, id) {
return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
return books.find((book) => book.id === id);  
}

function partitionBooksByBorrowedStatus(books){
  let result = []
  let borrowed = books.filter((book) => book.borrows[0].returned == false)
  let notBorrowed = books.filter((book) => book.borrows[0].returned == true)
  result =[borrowed, notBorrowed]
  return result
}

function getBorrowersForBook(book, accounts) {
let result = []
  accounts.forEach((account) => {
  if (book.borrows.some((borrow) => borrow.id == account.id)){
      const first = account
      book.borrows.forEach((borrow) => {
         if(borrow.id == account.id) {
          let {returned} = borrow
          const borrowerInfo = {...first, returned}
          result.push(borrowerInfo)  
        }
      })
    }
  })
  return limitList(result, 10) 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};