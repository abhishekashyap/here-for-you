import { useEffect, useState } from "react";
import MessageBox from "../../components/chat/MessageBox";
import { botMessages } from "../../components/chat/messages/messages";
import { Message } from "../../components/chat/messages/types";
import TextBox from "../../components/chat/TextBox";
import ContentLayout from "../../layout/ContentLayout";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([botMessages[0]]);

  useEffect(() => {
    (async function appendBotMessages() {
      await delay(1000);
      switch (messages.length) {
        case 2:
          setMessages((prevMsgs) => [...prevMsgs, botMessages[1]]);
          break;
        case 4:
          setMessages((prevMsgs) => [...prevMsgs, botMessages[2]]);
          break;
        case 6:
          setMessages((prevMsgs) => [...prevMsgs, botMessages[3]]);
          await delay(2000);
          setMessages((prevMsgs) => [...prevMsgs, botMessages[4]]);
          break;
        case 9:
          setMessages((prevMsgs) => [...prevMsgs, botMessages[5]]);
          break;
        case 14:
          setMessages((prevMsgs) => [...prevMsgs, botMessages[6]]);
          await delay(2000);
          setMessages((prevMsgs) => [...prevMsgs, botMessages[7]]);
          await delay(2000);
          setMessages((prevMsgs) => [...prevMsgs, botMessages[8]]);
          await delay(2000);
          setMessages((prevMsgs) => [...prevMsgs, botMessages[9]]);
          await delay(2000);
          setMessages((prevMsgs) => [...prevMsgs, botMessages[10]]);
          break;
        default:
          break;
      }
    })();
  }, [messages.length]);

  return (
    <ContentLayout>
      <div className="flex flex-col w-full mt-10">
        <MessageBox messages={messages} />
        <TextBox setMessages={setMessages} />
      </div>
    </ContentLayout>
  );
};

export default Chat;
