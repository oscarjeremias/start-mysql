const connect = require("../connect");
function createUserControl(req, res) {
  const data = req.body;
  connect.query(
    `INSERT INTO user(name)
  VALUES("${data.name.toLowerCase()}")
  `,
    (err, results, fields) => {
      if (err) throw err;
      res.json(data);
    }
  );
}

module.exports = createUserControl;
