const connection = require('../../../db-config.js');
const db = connection.promise();

const getOne = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM books WHERE idbooks = ?', id)

    .then((result) => {
      if (result[0][0]) {
        res.status(200).send(result[0][0]);
      } else {
        res.status(404).send('not found');
      }
    })
    .catch((err) => {
      res.status(500).send('error retrieving data from database', err);
    });
};

module.exports = getOne;
