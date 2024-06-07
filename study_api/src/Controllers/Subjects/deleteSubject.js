const {Subject}= require("../../db")

const deleteSubject=async (id)=>{
    const subjectSelected=await Subject.findByPk(id)
    console.log(subjectSelected);
    const subjectName=subjectSelected.name
    Subject.destroy({
        where: {
            id: id
        }
    })
    return `Subject ${subjectName} deleted.`
}

module.exports=deleteSubject;