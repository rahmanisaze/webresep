const User = require('../../models/User');

const editUser = async (request, h) => {
  try {
    const {
      id,
    } = request.params;
    const {
      username,
      email,
      password,
    } = request.payload;
    const updatedAt = new Date().toISOString();

    if (password !== undefined) {
      const result = await User.findByIdAndUpdate(id, {
        password,
        updatedAt,
      });
      if (result != null) {
        const response = h.response({
          status: 'success',
          messages: 'Password Changed Successfully',
        });
        response.code(200);
        return response;
      }
    }

    if (username !== undefined || email !== undefined) {
      const result = await User.findByIdAndUpdate(id, {
        username,
        email,
        updatedAt,
      });
      if (result != null) {
        const response = h.response({
          status: 'success',
          messages: 'Updated Successfully!',
        });
        response.code(200);
        return response;
      }
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = editUser;
