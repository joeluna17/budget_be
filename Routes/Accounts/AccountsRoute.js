const express = require("express");
const router = express.Router();
const data = require("../Accounts/AccountModel");

router.get("/accounts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const retAccounts = await data.getAllUserAccounts(id);
    res.status(201).json(retAccounts);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post("/accounts/add-account", async (req, res) => {
  const account = req.body;
  console.log(account);

  try {
    const addedAccount = await data.addAccount(account);
    res.status(200).json(addedAccount);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete("/accounts/remove-account/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAccount = await data.deleteAccount(id);
    res.status(201).json(deletedAccount);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
