/**
 * Contains all the utilites related to the AI Generation
 */

import { PERPLEXITY_URI, SYSTEM_PROMPTS } from "../constants"
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";



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
      model: "sonar",
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
    return {
      aiResponse: "",
      citations: []
    }
  }

}




export async function generateImageFromPrompt(imagePrompt: string, model: "imagen" | "gpt-1") {
  try {
    console.log("Model used for image generation:", model)
    if (model === "gpt-1") {
      if (!imagePrompt) throw new Error("No image prompt provided")
      const openai = new OpenAI({
        apiKey: process.env.NEXT_OPENAI_API
      });
      const result: OpenAI.Images.ImagesResponse = await openai.images.generate({
        model: "gpt-image-1",
        quality: "high",
        prompt: `${SYSTEM_PROMPTS["TEXT_TO_IMAGE_PROMPT"]}\nImage prompt is: ${imagePrompt}`,
        size: "1024x1536",
      });

      const imageData = result.data![0].b64_json as string
      return { success: true, image: imageData }

    } else if (model === "imagen") {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_GEMINI_API_KEY });
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: `${imagePrompt}`,
        config: {
          numberOfImages: 1,
          aspectRatio: "3:4",
        },
      });

      for (const generatedImage of response.generatedImages!) {
        const imageData = generatedImage.image!.imageBytes as string;
        return { success: true, image: imageData }
      }
    }
    return { success: false, image: "" }

  } catch (error) {
    console.log("Error in `generateImageFromPrompt`", (error as Error).message)
    return { success: false, image: "" }
  }

}