let books = [];
let id = 0;

module.exports = {
    create(req, res, next) {
        req.body.id = id;
        books.push(req.body);
        id += 1;
        res.json(books);
    },
    read(req, res, next) {
        res.json(books);
    },
    update: (req, res) => {
        const updateID = req.params.id;
        let index = books.findIndex(book => book.id == updateID);

        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        };

        res.json(books);
    },
    delete(req, res, next) {
        bookID = books.findIndex(book => book.id == req.params.id);
        books.splice(bookID, 1);
        res.json(books);
    }
};