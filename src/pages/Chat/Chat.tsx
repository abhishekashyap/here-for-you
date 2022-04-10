import { useState } from "react";
import MessageBox from "../../components/chat/MessageBox";
import { botMessages } from "../../components/chat/messages/messages";
import { Message } from "../../components/chat/messages/types";
import TextBox from "../../components/chat/TextBox";
import ContentLayout from "../../layout/ContentLayout";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([botMessages[0]]);
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
