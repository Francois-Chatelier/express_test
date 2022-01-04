const connection = require('../../../db-config.js');
const db = connection.promise();

const getAll = (req, res) => {
  //your code here
  db.query('SELECT * FROM books')
    .then((result) => {
      res.status(200).send(result[0]);
    })
    .catch((err) => {
      res.status(500).send('error retrieving data from database', err);
    });
};

module.exports = getAll;
