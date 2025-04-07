"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

const models = [
  { key: "sonnet-3-5", value: "Sonnet 3.5" },
  { key: "sonnet-3-7", value: "Sonnet 3.7" },
  { key: "haiku", value: "Haiku" },
  { key: "o3-mini", value: "O3 Mini" },
  { key: "4o-mini", value: "4O Mini" },
];

type ModelId = (typeof models)[number]["key"];

export default function Chat() {
  const [modelId, setModelId] = useState<ModelId>("sonnet-3-7");
  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    body: { modelId },
  });
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <div className="mb-4">
          <Select
            value={modelId}
            onValueChange={(value) => setModelId(value as ModelId)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model.key} value={model.key}>
                  {model.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {messages.map((m) =>
            m.parts.map((p, i) => {
              switch (p.type) {
                case "text":
                  return (
                    <div key={i} className="whitespace-pre-wrap">
                      <div>
                        <div className="font-bold">{m.role}</div>
                        <p>{p.text}</p>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            }),
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
