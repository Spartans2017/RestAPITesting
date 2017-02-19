var exports = module.exports = {};

/**
 * Custom methods
 */

/**
 Check the correct format of email address
 */
exports.checkEmailFormat = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/**
 Get a random value from the list
 */
exports.getRandomValue = function (list) {
    return list[Math.floor(Math.random() * list.length)];
}