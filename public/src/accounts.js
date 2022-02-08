

const findAccountById = (accounts, id) =>{
  return accounts.find((account) => account.id === id); 
  }
  
  function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 :1);
      return accounts;
  }
  
  
  function getTotalNumberOfBorrows(account, books) {
    let result = 0
    books.forEach(({borrows}) => {
      borrows.forEach(({id}) => {if (id == account.id) result ++ })
    })
    return result
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
     let result = []
    books.forEach((book) => {
      if (book.borrows[0].returned == false && book.borrows[0].id == account.id) {
        const first = book
        const author = authors.find((author) => author.id == book.authorId)
        const fullBookInfo = {...first, author}
        result.push(fullBookInfo)
      }
    })
    return result
  }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
