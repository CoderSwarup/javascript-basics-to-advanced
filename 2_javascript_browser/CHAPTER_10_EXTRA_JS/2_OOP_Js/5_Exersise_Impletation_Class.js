// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach(element => {
      console.log(element);
    });
  }

  issueBook(bookname, user) {
    this.bookname = bookname;
    this.user = user;
    
     let a = this.issuedBooks[bookname];
    
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;

      console.log(` " ${this.user} " :  You deliverd  " ${bookname} " book`)
    
    }
    else {
      console.log("This book is already issued! To ", a);
    }
  }

  returnBook(bookname) {
    this.bookname = bookname;
     let b = this.issuedBooks[bookname];
     
       delete this.issuedBooks[bookname];
         console.log( b, " thanks for return : ", bookname , " Book")
    
  }
}


let sam = new Library(["newbuddy", "The coder Sam", "C++ Mastery ", "the legend"])
sam.getBookList()

sam.issueBook("newbuddy", "sammy")
//sam.returnBook("newbuddy")
sam.issueBook("The coder Sam", "sam")
//sam.returnBook("The coder Sam")
sam.issueBook("The coder Sam", "sam2")
