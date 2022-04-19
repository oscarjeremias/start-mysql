const connect = require("./connect");

connect.query(
  `CREATE TABLE user(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100))`,
  (err, results, fields) => {
    if (err) throw err;
    console.log(results, fields);
  }
);
