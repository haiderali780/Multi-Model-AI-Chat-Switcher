# AI Model Switcher Example

This project demonstrates how to build a model switcher in a chat application using the AI SDK. Key features:

- Uses `useChat` hook for managing chat state
- Implements `streamText` for streaming responses
- Creates a custom provider with multiple language models
- Allows users to switch between different AI models:
  - Claude 3.5 Sonnet
  - Claude 3.7 Sonnet
  - Claude 3.5 Haiku
  - OpenAI o3-mini
  - OpenAI GPT-4o Mini

## How It Works

The application uses a dropdown selector to let users choose different AI models during a conversation. The selected model ID is passed to the API route, which then uses the appropriate provider and model for generating responses.

The custom provider setup allows for easily adding or swapping models while maintaining a consistent interface.

## Implementation Details

- Uses the `customProvider` function to define available language models
- Validates model selection on the server side
- Streams responses to provide a better user experience
- Displays both user and assistant messages with proper formatting
## Getting Started

1. Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd model-switcher-ai-sdk
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file by copying the example:

```bash
cp .env.example .env.local
```

4. Add your API keys to the `.env.local` file:

```
ANTHROPIC_API_KEY=your_anthropic_api_key
OPENAI_API_KEY=your_openai_api_key
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open your browser and navigate to `http://localhost:3000` to see the application in action.