const { Router } = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const helmet = require('helmet');

const sessionMiddleware = require('./session');
const urlnormalizeMiddleware = require('./urlNormalize');
const loginMiddleware = require('./login');
const authMiddleware = require('./auth');

const secret = '842d918ced1888c65a650f993077c3e36c8f114d';

module.exports = async function initMiddlewares() {
    const router = Router();
    router.use(helmet({ contentSecurityPolicy: false  }));
    router.use(urlnormalizeMiddleware());
    router.use(cookieParser(secret));
    router.use(sessionMiddleware(secret));
    router.use(loginMiddleware());
    router.use(authMiddleware());
    router.use(bodyParser.urlencoded({ extended: false }), csurf());

    return router;
};
