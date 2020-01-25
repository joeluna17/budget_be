const db = require("../../data/knex");

const getAllUserAccountsJoined = id => {
  return db("users as u")
    .join("accounts as ac","u.id", "=", "ac.user_id")
    .where("u.id", "=", id)
    .select("ac.id", "ac.name", "ac.type", "ac.value")
    .orderBy("ac.type");
};



const getAllUserAccounts = id => {
    return db('accounts as ac')
    .where("ac.user_id", "=", id)
    .select("ac.id", "ac.name", "ac.type","ac.value")
    .orderBy("ac.type");
};


//save / post
  const addAccount = (account) => {
      return db('accounts').insert(account);
  }



//update /put



//delete

const deleteAccount = (id) => {
    return db('accounts as ac').where("ac.id", "=", id).del();
};


module.exports = {
    getAllUserAccounts,
    getAllUserAccountsJoined,
    deleteAccount, 
    addAccount
};
