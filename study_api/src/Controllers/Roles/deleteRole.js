const {Role}= require("../../db")

const deleteRole= async (id)=>{
    const role = await Role.findByPk(id);
    const roleName= role.name;
  await Role.destroy({ where: { id: id } });

  return {data:`El ${roleName} fue eliminado correctamente`}

}

module.exports= deleteRole;