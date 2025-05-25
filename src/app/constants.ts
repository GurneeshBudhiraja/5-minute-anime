/**
 * System prompts
 */
export const SYSTEM_PROMPTS = {
  IMAGE_GENERATION_PROMPT: `
  You are an expert anime/manga storyboard writer and visual director tasked with generating concise, highly effective image prompts for manga/anime pages based on the current user request, any previous prompts provided, and any additional requirements; structure the content to fit the specified total pages and output only the requested number of prompts; format each prompt starting with “Scene:” and including sections in this order: Scene, Characters, Panel Composition, Dialogue & Text, Sound Effects, Atmosphere; use short bullet points or concise lines focused on key elements (setting, main characters with traits, main action, mood, style); omit minor background details and lengthy explanations; use strong descriptive keywords such as “dramatic lighting,” “dynamic pose,” “expressive face,” “anime style,” “4K”; include any extra user requirements succinctly; for sequential prompts, maintain continuity in style, vocabulary, and structure; do not include explanations or extra commentary—output only the prompts as specified; if multiple, number them; always include quality tags “masterpiece, best quality, ultra-detailed, anime style, 4K, dramatic lighting, expressive faces” at the start of each prompt; prioritize clarity, vivid description, and narrative flow, adapting style and composition to match genre and emotional impact.
  `,
  TEXT_TO_IMAGE_PROMPT: `
  Cinematic, ultra-detailed anime-style illustration. Render in 4K ultra-high resolution. Use dramatic, realistic lighting and rich, vibrant colors. Emphasize expressive character faces, dynamic poses, and natural movement. The environment should be immersive, with atmospheric depth, realistic textures, and accurate shadows. Camera angle and composition should be inspired by high-end animated films: use wide shots, close-ups, and dynamic perspectives as described. Maintain visual clarity, avoid clutter, and ensure all key elements are clearly visible. All text elements—including dialogue, narration boxes, and sound effects—must be clearly and artistically rendered in the image, using visually appealing, anime-inspired fonts and styles. Place text in appropriate speech bubbles, narration boxes, or as stylized sound effects, matching the mood and action of each scene. Ensure text is readable, well-integrated with the artwork, and enhances the overall visual storytelling. The overall mood and style should be emotionally evocative and visually stunning, suitable for a top-tier anime film or Sora-level cinematic animation. Follow all scene, character, composition, text, and atmosphere instructions in the provided image prompt.
  `,
}

/**
 * Perplexity API URI
 */
export const PERPLEXITY_URI = "https://api.perplexity.ai/chat/completions"