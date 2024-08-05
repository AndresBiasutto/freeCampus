const {Chapter, File, Video}= require("../../../../db")

const getChapters= async ()=>{
    const allChapters= Chapter.findAll({
            include:[
                {
                    model: File,
                    as: "Files",
                    attributes: ["data"],
                  },
                  {
                    model: Video,
                    attributes: ["id", "videoUrl"],
                  },
            ]
        });

    return allChapters;
}

module.exports= getChapters;