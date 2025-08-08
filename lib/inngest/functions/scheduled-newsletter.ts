import { fetchArticles } from "@/lib/news";
import { inngest } from "../client";

export default inngest.createFunction(
  { id: "newsletter/scheduled" },
  { event: "newsletter.schedule" },
  async ({ event, step, runId }) => {
    const categories = ["technology", "business", "politics"];
    const allArticles = await step.run("fetch-news", async () => {
      return fetchArticles(categories);
    });

    const summary = await step.ai.infer("summarize-news", {
      model: step.ai.models.openai({ model: "gpt-40" }),
      body: {
        messages: [
          {
            role: "system",
            content: `
              You are a professional news editor.
              Your task is to read a list of news articles and create a concise summary for a newsletter.
              Follow these rules:
              1.  **Focus on the most important information.** Extract the main points, key figures, and outcomes.
              2.  **Summarize each article individually,** unless multiple articles cover the exact same event. In that case, combine them into one comprehensive summary.
              3.  **Keep it brief.** Each summary should be 2-3 sentences long.
              4.  **Adopt a neutral, objective tone.** Do not add any personal opinions or speculation.
              5.  **Format the output clearly.** Use a headline for each summary, followed by the text.
              6.  **Do not include links, author names, dates, or any other metadata.** The summary itself is the only thing needed.`,
          },
          {
            role: "user",
            content: `Create a newsletter summary for these articles from the past week, Categories requested: ${categories.join(
              ", "
            )}

            Articles:
              ${JSON.stringify(allArticles, null, 2)}`,
          },
        ],
      },
    });
  }
);
