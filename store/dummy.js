const db = {
  user: [{ id: 1, name: "Carlos" }],
};
const list = table => db[table];
const get = (table, id) => {
  let col = list(table);
  return col.filter(item => item.id === id)[0] || null;
};
const upsert = (table, data) => {
  db[collection].push(data);
};
const remove = (id, table) => {
  true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
