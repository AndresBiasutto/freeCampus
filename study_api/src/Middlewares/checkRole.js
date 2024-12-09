const checkRole = (role) => (req, res, next) => {
    const userRoles = req.user['http://yourdomain.com/roles'] || [];
    if (userRoles.includes(role)) {
      return next();
    }
    res.status(403).send('No tienes permiso para acceder.');
  };
  
  app.get('/admin', checkJwt, checkRole('admin'), (req, res) => {
    res.send('Bienvenido, admin.');
  });