module.exports.isLoggedIn = (req, res, next) => { 
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing");
        return res.redirect("/users/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl; // Fixed typo here from res.localas to res.locals
        delete req.session.redirectUrl; // Optional: Clear the stored redirect URL after using it
    }
    next();
};
