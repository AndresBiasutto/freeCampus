const {Chapter}= require("../../../../db")

const createChapter= async (chapter, moduleId)=>{
    try {
        const newChapter = await Chapter.create({
          name: chapter.name,
          description: chapter.description,
          moduleId: moduleId,
        });

    
        return newChapter;
      } catch (error) {
        throw new Error("Error creating module: " + error.message);
      }
}

module.exports= createChapter;