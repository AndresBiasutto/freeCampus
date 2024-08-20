const { File, Chapter } = require("../../../../../db");

const getFiles = async () => {
  try {
    console.log("Fetching all files with their associated chapters...");
    const allFiles = await File.findAll({
      include:{
        model: Chapter,
        as: "Chapter",
        attributes: ["id", "name", "description"]
      }
    });
    console.log("Files fetched successfully: ", allFiles);
    return allFiles;
  } catch (error) {
    console.error("Failed to fetch files: ", error.message);
    throw new Error(`Failed to fetch files: ${error.message}`);
  }
};

module.exports = getFiles;