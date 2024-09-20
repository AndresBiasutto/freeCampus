const createRole = require("../Controllers/Roles/createRole");
const deleteRole = require("../Controllers/Roles/deleteRole");
const getRoles = require("../Controllers/Roles/getRoles");

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
const deleteRoleHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteRole(id); // Usar User directamente aquí
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getRolesHandler = async (req, res) => {

  try {
    const response = await getRoles(); // Usar User directamente aquí
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {postRoleHandler, deleteRoleHandler, getRolesHandler};
