import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { customProvider, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const languageModels = {
  "sonnet-3-5": anthropic("claude-3-5-sonnet-latest"),
  "sonnet-3-7": anthropic("claude-3-7-sonnet-20250219"),
  haiku: anthropic("claude-3-5-haiku-latest"),
  "o3-mini": openai("o3-mini"),
  "4o-mini": openai("gpt-4o-mini"),
};
const myProvider = customProvider({
  languageModels,
});

export async function POST(req: Request) {
  const { messages, modelId } = await req.json();

  const validModelIds = Object.keys(languageModels);
  const isValidModelId = validModelIds.includes(modelId);
  if (!isValidModelId) {
    throw new Error(`Invalid model ID: ${modelId}`);
  }

  const selectedModel = myProvider.languageModel(modelId);

  const result = streamText({
    system: `You are a helpful assistant. Always respond first with a hello and what model you are. You are ${selectedModel.modelId} by ${selectedModel.provider}`,
    model: selectedModel,
    messages,
  });

  return result.toDataStreamResponse();
}
