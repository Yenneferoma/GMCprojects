
const dataValidator = (req, res, next) => {
    const {email, message} = req.body;
    if (!email || !message) {
        return res.status(400).json({error: 'email and message are required'});
    }
    next();
};

module.exports = dataValidator;