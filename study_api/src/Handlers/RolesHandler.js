const createRole = require("../Controllers/Roles/createRole");

const postRoleHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await createRole(name); // Usar User directamente aquí
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {postRoleHandler};
