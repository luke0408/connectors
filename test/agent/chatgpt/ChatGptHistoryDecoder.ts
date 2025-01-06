import OpenAI from "openai";

import { INestiaChatPrompt } from "../structures/INestiaChatPrompt";

export namespace ChatGptHistoryDecoder {
  export const decode = (
    history: INestiaChatPrompt,
  ): OpenAI.ChatCompletionMessageParam[] => {
    // NO NEED TO DECODE DESCRIBE
    if (history.kind === "describe") return [];
    else if (history.kind === "text")
      return [
        {
          role: history.role,
          content: history.text,
        },
      ];
    else if (history.kind === "select" || history.kind === "cancel")
      return [
        {
          role: "assistant",
          tool_calls: [
            {
              type: "function",
              id: history.id,
              function: {
                name: `${history.kind}Functions`,
                arguments: JSON.stringify({
                  functions: history.functions.map((t) => ({
                    name: t.function.name,
                    reason: t.reason,
                  })),
                }),
              },
            },
          ],
        },
        {
          role: "tool",
          tool_call_id: history.id,
          content: "",
        },
      ];
    return [
      {
        role: "assistant",
        tool_calls: [
          {
            type: "function",
            id: history.id,
            function: {
              name: history.function.name,
              arguments: JSON.stringify(history.arguments),
            },
          },
        ],
      },
      {
        role: "tool",
        tool_call_id: history.id,
        content:
          typeof history.response.body === "string"
            ? history.response.body
            : JSON.stringify(history.response.body),
      },
    ];
  };
}
