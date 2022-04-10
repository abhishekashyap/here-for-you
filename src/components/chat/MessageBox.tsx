import { useState } from "react";
import { BotMessage } from "./messages/BotMessage";
import { Message } from "./messages/types";
import { UserMessage } from "./messages/UserMessage";

export default function MessageBox({ messages }: { messages: Message[] }) {
  // const [chats, Chats] = useState([
  //   <BotMessage>Hello Buddy</BotMessage>,
  //   <UserMessage>Hey</UserMessage>,
  //   <BotMessage>How are you?</BotMessage>,
  //   <UserMessage>I'm good, how are you?</UserMessage>,
  //   <BotMessage>I'm also good. So how are you feeling?</BotMessage>,
  //   <UserMessage>I'm feeling good</UserMessage>,
  //   <BotMessage>
  //     Well there's no need to be shy with me. You can share anything without
  //     hesitation. All your secrets are safe with me.
  //   </BotMessage>,
  //   <BotMessage>So tell me what's going on?</BotMessage>,
  //   <UserMessage>I haven't been feeling good lately</UserMessage>,
  //   <BotMessage>Hmm?</BotMessage>,
  //   <UserMessage>
  //     Everything around me seems so dull. I don't like my course, I haven't been
  //     eating properly, not working out.
  //   </UserMessage>,
  //   <UserMessage>
  //     Everything that I try to do just keeps on falling apart. It feels like
  //     everything is against me.
  //   </UserMessage>,
  //   <UserMessage>
  //     There's no friend that I can reach out to, who can hear me out. Everyone
  //     around me seems so busy.
  //   </UserMessage>,
  //   <UserMessage>
  //     I see no point in living. Like what's the point in living if eventually
  //     everyone is going to die?
  //   </UserMessage>,
  // ]);
  return (
    <div className="flex flex-col pb-2 flex-nowrap h-[50rem] overflow-auto hide-scrollbar">
      {messages.map((msg) =>
        msg.type === "bot" ? (
          <BotMessage key={msg.id}>{msg.message}</BotMessage>
        ) : (
          <UserMessage key={msg.id}>{msg.message}</UserMessage>
        )
      )}
    </div>
  );
}
