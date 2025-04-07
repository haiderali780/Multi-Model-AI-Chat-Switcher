# Multi-Model-AI-Chat-Switcher

This project demonstrates how to build a **real-time, multi-model AI chat application** using the [AI SDK](https://sdk.vercel.ai/). It features dynamic switching between multiple language models, seamless streaming of responses, and a modular architecture for future extensibility.

---

## 🚀 Key Features

- 🔄 **AI Model Switching** — Select from a list of powerful LLMs during any conversation.
- 💬 **Streaming Responses** — Implements `streamText` for real-time, token-by-token output.
- 🧠 **Chat State Management** — Uses `useChat` hook to maintain smooth conversation flow.
- ⚙️ **Custom Provider Architecture** — Easily add, remove, or swap models with a unified API.

---

## 🧠 Supported Models

Choose between multiple LLMs to compare and test performance:

- Anthropic Claude 3.5 Sonnet
- Anthropic Claude 3.7 Sonnet
- Anthropic Claude 3.5 Haiku
- OpenAI o3-mini
- OpenAI GPT-4o Mini

---

## 🛠️ How It Works

1. A dropdown selector in the chat UI allows users to choose a model.
2. The selected `modelId` is passed to the API route.
3. The server validates the model and routes the request to the correct provider.
4. The model response is streamed in real time to the client.
5. Messages are rendered with appropriate formatting for both user and assistant.

---

## ⚙️ Implementation Details

- `useChat` hook from the AI SDK handles chat input/output.
- The `customProvider` function defines and organizes all available models.
- Server-side validation ensures that only supported models are used.
- Streaming via `streamText` provides a fast, smooth UX.
- Built-in message formatting keeps conversations clean and readable.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/haiderali780/Multi-Model-AI-Chat-Switcher.git
cd Multi-Model-AI-Chat-Switcher
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file by copying the example:

```bash
cp .env.example .env.local
```

Add your API keys:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key
OPENAI_API_KEY=your_openai_api_key
```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app live.

---

## 📈 Future Enhancements

- 🧪 Side-by-side model output comparison
- 🧾 Token & latency metrics per model
- 🔒 User authentication & usage limits
- 💾 Persistent chat history (optional database support)
- 🎨 Improved UI/UX with theming support

---

## 📄 License

## 🌟 Feedback & Contributions

If you like this project, consider giving it a ⭐️!  
Contributions are welcome — feel free to open issues or submit pull requests.
