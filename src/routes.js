const User = require('./models/User');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => ({
      status: 'success',
      message: 'Hello Rahma',
    }),
  },
  {
    method: 'POST',
    path: '/users',
    handler: async (request, h) => {
      try {
        const {username, email, password} = request.payload;
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const user = new User({
          username, email, password, createdAt, updatedAt,
        });
        const result = await user.save();
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  },
  {
    method: 'POST',
    path: '/user',
    handler: async (request, h) => {
      const {email, password} = request.payload;
      const result = await User.find({'email': email}).limit(1).exec();

      if (result.length === 0) {
        const response = h.response({
          status: 'fail',
          message: 'Account Not Found!',
        });
        response.code(404);
        return response;
      }

      if (result[0]['password'] === password) {
        const response = h.response({
          status: 'success',
          message: 'Login Succesfully',
        });
        response.code(200);
        return response;
      } else {
        const response = h.response({
          status: 'fail',
          message: `Password doesn't match`,
        });
        response.code(400);
        return response;
      }
    },
  },
];

module.exports = routes;
