const User = require('../../models/User');

const specifiedUserById = async (request, h) => {
  try {
    const {id} = request.params;

    const userDetails = await User.findById(id);
    if (userDetails != null) {
      const response = h.response({
        status: 'success',
        data: userDetails,
      });
      response.code(200);
      return response;
    }

    const response = h.response({
      status: 'fail',
      message: 'user not found!',
    });
    response.code(404);
    return response;
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports = specifiedUserById;
