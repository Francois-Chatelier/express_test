const connection = require('../../../db-config.js');
const db = connection.promise();

const updateBook = (req, res) => {
  const { title } = req.body;
  const id = req.params.id;
  db.query('UPDATE books SET title = ? WHERE idbooks = ?', [title, id])
    .then((result) => res.status(204).send(result[0].title))
    .catch(() => res.send('error updating the book'));
};

module.exports = updateBook;
