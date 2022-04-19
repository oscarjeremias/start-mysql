const connect = require("../connect");

function updateUserControl(req, res) {
  const data = req.body;

  connect.query(
    `UPDATE user SET name = "${data.name}" WHERE id = ${data.id}
  `,
    (err, results, fields) => {
      if (err) throw err;
      res.json(data);
    }
  );
}

module.exports = updateUserControl;
