const User = require('../../models/User');

const registerUser = async (request, h) => {
  try {
    const {username, email, password} = request.payload;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const isRegistered = await User.findOne({email}).exec();
    if (isRegistered != null) {
      const response = h.response({
        status: 'fail',
        message: 'email already registered! Please use another account',
      });
      response.code(400);
      return response;
    }

    const user = new User({
      username, email, password, createdAt, updatedAt,
    });
    const result = await user.save();
    return h.response(result);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports = registerUser;
