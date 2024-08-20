const { Video, Chapter } = require("../../../../../db");

const postVideo = async (videoUrl, chapterId) => {
  const chapter = await Chapter.findByPk(chapterId);
  if (!chapter) {
    throw new Error('chapter not found');
  }
  const newVideo = await Video.create({
    videoUrl,
    chapterId,
  });

  await chapter.setVideo(newVideo);

  newVideo.chapter = {
    id: chapter.dataValues.id,
    name: chapter.dataValues.name,
    description: chapter.dataValues.description,
  };

  return newVideo;
};

module.exports = postVideo;