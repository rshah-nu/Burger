const {connection} = require('./connection');

debugger;
const orm = {
    insertOne: (tableName, fieldName, values, cb) => {
        var query = `INSERT INTO ${tableName} (${fieldName}) VALUES ('${values}')`
        connection.query(query, (error, results, fields) => {
            if (error){
                cb(error)
            }
            cb(undefined, results)
        });
    },
    selectAll: (tableName, cb) => {
        var query = `SELECT * from ${tableName}`;
        connection.query(query, (error, results, fields) => {
            if (error){
                cb(error);
            }
            cb(undefined, results)
        });
    },
    updateOne: (tableName, fieldName, newValue, whereField, whereValue, cb) => {
        var query = `UPDATE ${tableName} SET ${fieldName} = ${newValue} WHERE ${whereField} = ${whereValue}`
        connection.query(query, (error, results, fields) => {
            if (error){
                cb(error);
            }
            cb(undefined, results)
        });
    }
};

module.exports = {
    orm
};

