const connect = require("../connect");

function deleteUserControl(req, res) {
  const { id } = req.params;
  connect.query(`DELETE FROM user WHERE id = ${id}`, (err, results, fields) => {
    if (err) throw err;
    res.end(`DELETADO id: ${id}`);
  });
}

module.exports = deleteUserControl;
