let localStrategy = require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let models = require('./models');

const validPassword = function(user, password) {
    return bcrypt.compareSync(password, user.password);
}

module.exports = function(passport) {
    passport.serialiseUser((user, done) => {
        done(null, user.id);
    });
    passport.deserialiseUser((id, done) => {
        modles.User.findOne({
            where: {'id': id}
        }).then(user => {
            if(user == null) done(new Error('Wrong User Id'));
            done(null, user);
        });
    });
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        return models.User.findOne({
            where: {
                'email': email
            }
        }).then(user => {
            // handle cases for validating the user and pass
            if(user == null) {
                req.flash('message', 'Incorrect credentials.');
                done(null, false);
            } else if(user.password == null || user.password == undefined) {
                req.flash('message', 'You must reset your password');
                done(null, false);
            } else if(!validPassword(user, password)) {
                req.flash('message', 'Incorrect credentials.');
                done(null, false);
            }
            return done(null, user);
        }).catch(err => {
            done(err, false);
        });
    }));
}