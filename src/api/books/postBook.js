const connection = require('../../../db-config.js');
const db = connection.promise();

const postBook = (req, res) => {
  const { title, genre, picture, artist, summary, year } = req.body;
  db.query(
    'INSERT INTO books (title, genre, picture, artist, summary, year) VALUES ( ?, ?, ?, ?, ?, ?)',
    [title, genre, picture, artist, summary, year]
  )
    .then((result) => {
      res.status(201).json({ idbooks: result[0].insertId, ...req.body });
    })
    .catch(() => res.status(404).send('error posting new book'));
};

module.exports = postBook;
