const express = require('express');
const router = express.Router();
const data = require('../Accounts/AccountModel');




router.get('/accounts/:id', async (req, res) => {
        const {id} = req.params;
        console.log(id)
        try{
        const retAccounts = await data.getAllUserAccounts(id);
            res.status(201).json(retAccounts);
        }catch({message}){
            console.log(res.json);
            res.status(500).json(message);
        }

});



module.exports = router;