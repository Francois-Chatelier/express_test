const connection = require('../../../db-config.js');
const db = connection.promise();

const deleteBook = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM books WHERE idbooks = ?', [id])
    .then(() => {
      res.status(204).send('books deleted correctly');
    })
    .catch((err) => res.status(500).send('error updating the book', err));
};

module.exports = deleteBook;
