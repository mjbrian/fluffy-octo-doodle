const models = require('../models');

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Express', user: req.user });
}
