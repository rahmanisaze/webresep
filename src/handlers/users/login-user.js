const User = require('../../models/User');

const loginUser = async (request, h) => {
  const {email, password} = request.query;
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
      _id: result[0]['_id'],
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
};

module.exports = loginUser;
