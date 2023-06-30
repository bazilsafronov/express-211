const express = require('express');
const router = express.Router();
const { User, Sequelize } = require('../../db/models');

router.get('/users', async (req, res) => {
        const result = await User.findAll({where: req.query});
        console.log(req.query);
        res.send(result);
});

router.post('/user-create', (req, res) => {
    User.create(req.body)
        .then((user)=>{console.log(res.json(user))})
        .catch((err)=>{res.json({err: err.message})})
}
);

module.exports = router;