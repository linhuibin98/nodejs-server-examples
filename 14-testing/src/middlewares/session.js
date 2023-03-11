const session = require('express-session');
const sessionSequelize = require('connect-session-sequelize');
const redis = require('redis');
const RedisStore = require('connect-redis').default;

const { sequelize } = require('../models');
const { redisOptions, sessionCookieSecret, sessionCookieMaxAge } = require('../config');
const { name } = require('../../package.json');

module.exports = function sessionMiddleware() {
    let store;

    if (process.env.WITH_REDIS) {
        const redisClient = redis.createClient(redisOptions);
        redisClient.connect().catch(console.error);
        store = new RedisStore({
            client: redisClient,
            prefix: name
        });
    } else {
        const SequelizeStore = sessionSequelize(session.Store);
        store = new SequelizeStore({
            db: sequelize,
            modelKey: 'Session',
            tableName: 'session',
        });
    }

    return session({
        secret: sessionCookieSecret,
        cookie: { maxAge: sessionCookieMaxAge },
        store,
        resave: false,
        proxy: true,
        saveUninitialized: false,
    });
};
