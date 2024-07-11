// /api/user/routes/User.js
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/register',
        handler: 'User.register',
      },
      {
        method: 'POST',
        path: '/login',
        handler: 'User.login',
      },
    ],
  };
  