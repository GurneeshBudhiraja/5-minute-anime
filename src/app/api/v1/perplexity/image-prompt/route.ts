import { generateImageFromPrompt, generateImagePrompt } from "@/app/utils/ai"

/**
 * Generate image prompts and conditionally generate AI images based on the request body
 */
export async function POST(request: Request) {
  try {
    const jsonBody = await request.json() as PerplexityImagePromptRouteBody
    const {
      messages,
      generateImage, // generate image along with the image prompt
      model,
    } = jsonBody

    // validates the `jsonBody`
    if (!messages) throw new Error("No `messages` provided")

    // validates the `generateImage`
    if (generateImage === undefined) throw new Error("No `generateImage` provided")
    if (typeof generateImage !== "boolean") throw new Error("`generateImage` should be of type boolean ")
    if (typeof (generateImage) !== "boolean") throw new Error("`generateImage` should be of type boolean ")

    // validates the `model`
    if (!model) throw new Error("`model` missing")
    if (model !== "imagen" && model !== "gpt-1") throw new Error("`model` should be either `imagen` or `gpt-1`")

    // gets the image prompt from the Perplexity model
    console.log("Generating the image prompt using Perplexity AI")
    const imagePrompt = await generateImagePrompt(messages)

    // return just the prompt
    if (!generateImage) {
      return new Response(JSON.stringify({ success: true, data: imagePrompt }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      // generate image 
      console.log("Generating image using Perplexity prompt")
      const { success, image } = await generateImageFromPrompt((imagePrompt?.aiResponse as string), model)
      if (!success) throw new Error("Error generating image")
      return new Response(JSON.stringify(
        {
          success: true,
          data: {
            citations: imagePrompt?.citations,
            aiResponse: {
              image,
              prompt: imagePrompt?.aiResponse
            }
          } as GeneratePromptAndImageReturnType
        }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }

}