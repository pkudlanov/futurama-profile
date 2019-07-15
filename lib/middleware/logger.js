module.exports = (req, res, next) => {
    // 'GET /test' -- request method and path
    console.log(`${req.method} ${req.path}`);
    req.hasLogged = true;
    next();
};
