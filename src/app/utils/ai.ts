/**
 * Contains all the utilites related to the AI Generation
 */

import { PERPLEXITY_URI, SYSTEM_PROMPTS } from "../constants"
import { GoogleGenAI, Modality } from "@google/genai";
import fs from "fs"



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
    return null
  }

}


import OpenAI from "openai";

export async function generateImageFromPrompt(imagePrompt: string) {
  try {
    if (!imagePrompt) throw new Error("No image prompt provided")
    // const openai = new OpenAI({
    //   apiKey: process.env.NEXT_OPENAI_API
    // });
    // const result = await openai.images.generate({
    //   model: "gpt-image-1",
    //   quality: "high",
    //   prompt: `${SYSTEM_PROMPTS["TEXT_TO_IMAGE_PROMPT"]}\nImage prompt is: ${imagePrompt}`,
    //   size: "1024x1536"
    // });

    // // Save the image to a file
    // const imageData = result.data[0].b64_json;
    // const image_bytes = Buffer.from(imageData, "base64");
    // fs.writeFileSync(`testing-imagen.png`, image_bytes);
    // return { success: true, image: imageData }

    // TODO: replace with OpenAI image generation model
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_GEMINI_API_KEY });
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: `${imagePrompt}`,
      config: {
        numberOfImages: 1,
        aspectRatio: "3:4",
      },
    });

    let idx = 1;
    for (const generatedImage of response.generatedImages) {
      let imageData = generatedImage.image.imageBytes;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync(`imagen-${idx}.png`, buffer);
      idx++;
      return { success: true, image: imageData }
    }

    // const response = await ai.models.generateImages({
    //   model: "image",
    //   contents: `System instructions: ${SYSTEM_PROMPTS["TEXT_TO_IMAGE_PROMPT"]}\nImage prompt: ${imagePrompt}`,
    //   config: {
    //     responseModalities: [Modality.TEXT, Modality.IMAGE],
    //   },
    // });
    // for (const part of response.candidates[0].content.parts) {
    //   // Based on the part type, either show the text or save the image
    //   if (part.text) {
    //     console.log(part.text);
    //   } else if (part.inlineData) {
    //     const imageData = part.inlineData.data as string;
    //     const buffer = Buffer.from(imageData, "base64");
    //     fs.writeFileSync(`testingImage${Date.now()}.png`, buffer);
    //     console.log(imageData)
    //     return { success: true, image: imageData }
    //   }
    // }
    // let idx = 1;
    // for (const generatedImage of response.generatedImages) {
    //   let imgBytes = generatedImage.image.imageBytes;
    //   const buffer = Buffer.from(imgBytes, "base64");
    //   fs.writeFileSync(`imagen-${idx}.png`, buffer);
    //   idx++;
    // }

    return { success: true }
  } catch (error) {
    console.log("Error in `generateImageFromPrompt`", (error as Error).message)
    return { success: false }
  }

}