import { BotMessage } from "./messages/BotMessage";
import { UserMessage } from "./messages/UserMessage";

export default function MessageBox() {
  return (
    <div className="flex flex-col pb-2 flex-nowrap h-[50rem] overflow-auto hide-scrollbar">
      <BotMessage>Hello Buddy</BotMessage>
      <UserMessage>Hey</UserMessage>
      <BotMessage>How are you?</BotMessage>
    </div>
  );
}
