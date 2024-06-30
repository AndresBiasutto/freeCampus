const {Subject}= require("../../db")
const { Op } = require("sequelize");

const getSubjectByName= (name)=>{
   const fetchedSubject=  Subject.findAll({ where: { name: {
    [Op.iLike]: `%${name}%`
  } } })
    return fetchedSubject;
}
module.exports= getSubjectByName