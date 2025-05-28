# 5 Minute Anime

Turn any topic into a 5-page anime adventure—learn history, science, news, or any subject in manga style.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/GurneeshBudhiraja/5-page-anime
cd 5-page-anime

# Install dependencies
npm install
```

Next, create a `.env` file in the project root (or copy from `.env.example`) and add your API keys as shown below.

```env
# Perplexity API key
# refer https://docs.perplexity.ai/guides/getting-started
NEXT_PERPLEXITY_API=PERPLEXITY_API_KEY

# OpenAI API key
# refer https://platform.openai.com/api-keys
NEXT_OPENAI_API=OPENAI_API_KEY

# Gemini API key
# refer https://aistudio.google.com/
NEXT_GEMINI_API_KEY=GEMINI_API_KEY
```

```bash
# Run locally
npm run dev
```

## 🛠️ How It Works

1. **System Prompting**  
   The backend sends Sonar a prompt that combines your topic (and optional theme) with instructions to fetch source-backed facts and format them as a single storyboard panel.

2. **Page-by-Page Generation**  
   Sonar returns one narrative segment and its “image prompt” per request. We repeat this cycle for the specified number of pages to assemble the full story.

3. **Image Synthesis**  
   Each image prompt is sent to the AI model (Imagen + OpenAI GPT-1) to generate matching artwork.

4. **Final Output**  
   You get a complete, illustrated five-panel anime narrative—both entertaining **and** factually accurate.

## 🔧 Built With

- **Next.js** (React framework with API routes)
- **Perplexity Sonar API** (source-grounded narrative generation)
- **AI Image Model** (Imagen + OpenAI GPT-1)
