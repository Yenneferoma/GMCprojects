<<<<<<< HEAD
const workingHours = (req, res, next) => {
=======
module.exports = (req, res, next) => {
>>>>>>> 1797b807b23d7108d60eb502114068d9a6c49136
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
        next();
    } else {
        res.send('Sorry, this application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
<<<<<<< HEAD
};


module.exports = workingHours;
=======
};
>>>>>>> 1797b807b23d7108d60eb502114068d9a6c49136
