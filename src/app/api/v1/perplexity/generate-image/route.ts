import { generateImageFromPrompt } from "@/app/utils/ai"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { imagePrompt = "", model } = body as {
      imagePrompt: string;
      model: "imagen" | "gpt-1"
    }

    // validates the imagePrompt
    if (!imagePrompt) throw new Error("missing `imagePrompt`")
    if (typeof imagePrompt !== "string") throw new Error("`imagePrompt` should be of type string")
    if (imagePrompt.trim().length < 20) throw new Error("`imagePrompt` should be at least 20 characters long")

    // validates the model
    if (!model) throw new Error("`model` missing")
    if (model !== "imagen" && model !== "gpt-1") throw new Error("`model` should be either `imagen` or `gpt-1`")

    const response = await generateImageFromPrompt(imagePrompt, model)
    if (!response.success) throw new Error("Error generating image")
    return new Response(JSON.stringify({ success: response.success, image: response.image }), {
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