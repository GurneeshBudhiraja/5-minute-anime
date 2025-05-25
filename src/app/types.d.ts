/**
 * A single story page
 */
interface StoryPage {
  /**
   * Whether the image is getting generated for the given page number
   */
  isLoading: boolean;
  /**
   * Whether the contents for that page has been loaded
   */
  loaded: boolean;
  /**
   * base64 image
   */
  image: string;
  /**
   * List of citations
   */
  citations: string[];
  /**
   * The prompt used to generate the image
   */
  prompt: string;
}

/** Used in the api responsible for generating image prompts based on the story details */
interface PerplexityImagePromptRouteBody {
  messages: PerplexityMessage[];
  generateImage: boolean;
  model: "gpt-1" | "imagen"
}

/** Message sender role */
type Role = "system" | "user" | "assistant";

type UserMessageType =
  | [
    {
      type: "text";
      text: string;
    },
    {
      type: "image_url";
      image_url: {
        url: string;
      };
    },
  ]

/** 
 * A single chat message 
 * Message structure for the Perplexity API
 */
type PerplexityMessage = {
  /** The text content of the message */
  content: string;
  /** Message sender */
  role: Exclude<Role, "user">;
} | {
  /** The text content of the message */
  content: string | UserMessageType;
  /** Message sender */
  role: "user";
}


/** 
 * Models supported by the Perplexity API  
 * @see https://docs.perplexity.ai/models/model-cards 
 * */
type PerplexityModels =
  | "sonar"
  | "sonar-pro"
  | "sonar-deep-research"
  | "sonar-reasoning-pro"
  | "sonar-reasoning"
  | "r1-1776";


/** 
 * Configuration options for a Perplexity API request 
 * @see https://docs.perplexity.ai/api-reference/chat-completions 
 * */
interface PerplexityBody {
  /** Which model to invoke */
  model: PerplexityModels;
  /** Conversation history */
  messages: PerplexityMessage[];
  /** Maximum tokens to generate */
  max_tokens?: number;
  /** Sampling temperature (0–1) */
  temperature?: number;
  /** Nucleus sampling probability (0–1) */
  top_p?: number;
  /** Domains to restrict web searches to */
  search_domain_filter?: string[];
  /** Include images in the response */
  return_images?: boolean;
  /** Include related questions in the response */
  return_related_questions?: boolean;
  /** How recent web search results should be */
  search_recency_filter?: string;
  /** Number of top search results to consider */
  top_k?: number;
  /** Stream responses incrementally if true */
  stream: boolean;
  /** Penalty for new tokens based on presence */
  presence_penalty?: number;
  /** Penalty for token frequency */
  frequency_penalty?: number;
  /** Options controlling the embedded web search */
  web_search_options: {
    /** Amount of search context to include */
    search_context_size: "low" | "medium" | "high";
    /** Optional user location for personalized search */
    user_location?: {
      /** User’s latitude coordinate */
      latitude?: number;
      /** User’s longitude coordinate */
      longitude?: number;
      /** User’s country code */
      country?: string;
    };
  };
  /** Response format for the Perplexity Output */
  response_format?: Record<string, unknown>;
}


/**
 * Citations to the sources used to answer the user query - provided by Perplexity API
 */
type Citation = string;



/**
 * Return value type of the generateImagePrompt function 
 */
interface GenerateImagePromptReturnType {
  aiResponse: string;
  citations: Citation[]
}

interface GeneratePromptAndImageReturnType {
  aiResponse: {
    prompt: string;
    image: string;
  }
  citations: Citation[]
}


/**
 * Type for the story details type
 */
interface StoryState {
  topic: string;
  pages: number;
  info: string;
}

/**
 * Type for the application status
 */
interface ApplicationStatus {
  currentViewPage: number;
  aiGeneratedPages: StoryPage[]
}