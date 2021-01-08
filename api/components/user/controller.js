const store = require("../../../store/dummy");

const TABLE = "user";

const list = () => store.list(TABLE);

module.exports = {
  list,
};
