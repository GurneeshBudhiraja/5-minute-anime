import { generateImageFromPrompt } from "@/app/utils/ai"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { imagePrompt = "" } = body as {
      imagePrompt: string
    }
    if (!imagePrompt) throw new Error("missing `imagePrompt`")
    if (typeof imagePrompt !== "string") throw new Error("`imagePrompt` should be of type string")
    if (imagePrompt.trim().length < 20) throw new Error("`imagePrompt` should be at least 20 characters long")
    const response = await generateImageFromPrompt(imagePrompt)
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