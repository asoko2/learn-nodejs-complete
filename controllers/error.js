exports.get404 = (req, res, next) => {
  res.render('404', {
    pageTitle: "Page Not Found!",
    path: '/404',
    isAuthenticated: req.session.isLoggedIn,
  })
}