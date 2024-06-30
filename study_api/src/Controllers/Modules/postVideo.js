const { Video, Module } = require("../../db");

const postVideo = async (videoUrl, moduleId) => {
  const module = await Module.findByPk(moduleId);
  if (!module) {
    throw new Error('Module not found');
  }
  const newVideo = await Video.create({
    videoUrl,
    moduleId,
  });

  await module.setVideo(newVideo);

  newVideo.module = {
    id: module.dataValues.id,
    name: module.dataValues.name,
    description: module.dataValues.description,
  };

  return newVideo;
};

module.exports = postVideo;