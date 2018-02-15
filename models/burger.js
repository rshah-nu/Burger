const {orm} = require('../config/orm')


const burgerCommands = {
    selectAllBurgers: (cb) => {
        orm.selectAll("burgers", (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },
    insertOneBurger: (value, cb) => {
        orm.insertOne("burgers", "burger_name", value, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },
    updateOneBurger: (newValue, whereValue, cb) => {
        orm.updateOne("burgers", "devoured", newValue, "id", whereValue, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    }
};

module.exports = {
    burgerCommands
};