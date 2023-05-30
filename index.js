const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function runCompletion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Please give me the console log in flutter",
  });
  console.log(completion.data.choices[0].text);
}

runCompletion();
