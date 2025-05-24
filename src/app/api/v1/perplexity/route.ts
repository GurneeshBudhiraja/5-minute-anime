import { generateImagePrompt } from "@/app/utils/perplexity"


/**
 * Generate image prompts and conditionally generate AI images
 */
export async function POST(request: Request) {
  try {
    const jsonBody = await request.json() as PerplexityImagePromptRouteBody
    // console.log(jsonBody)
    const {
      messages,
      generateImage = true, // generate image along with the image prompt
    } = jsonBody
    // Validates the `jsonBody`
    if (!messages) throw new Error("No `messages` provided")
    if (typeof generateImage !== "boolean") throw new Error("`generateImage` should be of type boolean ")

    if (!generateImage) {
      // TODO: remove in prod
      console.log("Generating image prompt")
      const imagePrompt = await generateImagePrompt(messages)
      return new Response(JSON.stringify({ success: true, data: imagePrompt }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    return new Response(JSON.stringify({ success: true, message: "Hello World" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }

}