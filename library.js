

class BookManager {
    constructor() {
        this.title = document.getElementById( 'title');
        this.author = document.getElementById( 'author');
        this.btn = document.getElementById( 'add');
        this.displayBooks = document.getElementById('book-container');
        this.books = []

        this.initEventListeners();
    }
    initEventListeners() {
        this.btn.addEventListener("click", (event) =>{
        event.preventDefault()
         this.addBook()
        })
    }

    addBook() {
        let title = this.title.value
        let author = this.author.value

        if(title === '' || author === '') {
            return alert('Please fill all the fields')
        }
        this.books.push({title, author})
        console.log(this.books)

        let bookElement = this.createBookElement(title, author)
        this.appendToContainer(bookElement)
        this.clearInputs()
    }

    createBookElement(title, author) {
        let div = document.createElement('div')
        div.className = 'book'
        const titleDisplay = document.createElement('h3')
        titleDisplay.className = 'book-title'
        titleDisplay.textContent = title
        const authorDisplay = document.createElement('p')
        authorDisplay.className = 'author'
        authorDisplay.textContent = author
        div.appendChild(titleDisplay)
        div.appendChild(authorDisplay)
        return div
    }

    appendToContainer(bookElement) {
        let container = this.displayBooks
        container.appendChild(bookElement)

    }

    clearInputs() {
        this.title.value = "";
        this.author.value = "";
    }
}

let App = new BookManager()
