import { useEffect, useRef, useState } from "react";
import { BotMessage } from "./messages/BotMessage";
import { Message } from "./messages/types";
import { UserMessage } from "./messages/UserMessage";

export default function MessageBox({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("hello");
    ref.current?.scrollIntoView();
  }, [messages.length]);

  return (
    <div
      ref={ref}
      className="flex flex-col pb-2 flex-nowrap h-[50rem] overflow-auto hide-scrollbar"
    >
      {messages.map((msg) =>
        msg.type === "bot" ? (
          <BotMessage key={msg.id}>{msg.message}</BotMessage>
        ) : (
          <UserMessage key={msg.id}>{msg.message}</UserMessage>
        )
      )}
      <div ref={ref} />
    </div>
  );
}
