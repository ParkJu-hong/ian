module.exports = {
    create: require('./gallery/create'),
    read: require('./gallery/read'),
    login: require('./user/index').login,
    isAuthorization: require('./user/index').isAuthorization
}