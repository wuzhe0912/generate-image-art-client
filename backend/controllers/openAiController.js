const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openAi.createImage({
      prompt: prompt,
    });
    const imageResult = response.data.data;
    res.status(200).json({
      success: true,
      data: imageResult,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateImage,
};
