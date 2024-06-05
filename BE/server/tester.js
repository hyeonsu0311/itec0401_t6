const { originalPool } = require("./configs/db.config");

(async () => {
  const [user, field] = await originalPool.query("SELECT * FROM Users");
  console.log(user);
})();
