const { default: store } = require('../../src/store');

St = require('./api/models/StoreModel')

module.exports = function(app) {
    app.get("/", (req, res) => {
        User.find(function(err, store) {
            if (err) { 
                res.send(err);
            }
            res.json(store); 
        });
           
    })
}

