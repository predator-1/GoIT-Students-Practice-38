const database = new Map();

export const saveUser = (email, password) => {
  database.set(email, password);
};

export const isValidUser = (email, password) => {
  return database.has(email) ? database.get(email) === password : false;
};
