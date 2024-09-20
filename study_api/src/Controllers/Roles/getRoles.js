const {Role}= require("../../db")

const getRoles= async ()=>{
    const roles= Role.findAll();

    return roles;
}

module.exports= getRoles;