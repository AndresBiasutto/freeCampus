const {Chapter, File, Video}= require("../../../../db")

const getChapter= async (id)=>{
    const chapter= await Chapter.findByPk(id, {
        include: [
            {
              model: File,
              as: "Files",
              attributes: ["id", "data"],
            },
            {
              model: Video,
              attributes: ["id", "videoUrl"],
            },
          ],
    })
    return chapter;
}

module.exports= getChapter;