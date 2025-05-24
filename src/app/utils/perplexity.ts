import { PERPLEXITY_URI, SYSTEM_PROMPTS } from "../constants"



export async function generateImagePrompt(messages: PerplexityMessage[]): Promise<GenerateImagePromptReturnType | null> {
  try {

    if (messages.length === 0) {
      throw new Error("No `messages` provided")
    }
    const perplexityBody: PerplexityBody = {
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPTS["IMAGE_GENERATION_PROMPT"]
        },
        ...messages
      ],
      model: "sonar-pro",
      stream: false,
      web_search_options: {
        search_context_size: "medium"
      },
      top_k: 0,
      top_p: 0.9,
      temperature: 0.2,
      presence_penalty: 0,
      frequency_penalty: 1,
    }

    const perplexityRequestOptions: RequestInit = {
      body: JSON.stringify(perplexityBody),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PERPLEXITY_API}`
      }
    }

    const response = await fetch(PERPLEXITY_URI, perplexityRequestOptions);
    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content ?? "";
    const citations = data.citations
    return { aiResponse, citations }
  } catch (error) {
    console.log("Error in `generateImagePrompt`", (error as Error).message)
    return null
  }

}
