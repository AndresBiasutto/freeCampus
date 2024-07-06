const { User } = require("../../db");

const patchUser = async (id, name, contactNumber, image, description) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return { error: "User not found" };
    }

    // Actualizar solo los campos proporcionados
    if (name) user.name = name;
    if (contactNumber) user.contactNumber = contactNumber;
    if (image) user.image = image;
    if (description) user.description = description;

    await user.save();

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = patchUser;