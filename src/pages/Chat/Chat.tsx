import MessageBox from "../../components/chat/MessageBox";
import TextBox from "../../components/chat/TextBox";
import ContentLayout from "../../layout/ContentLayout";

const Chat = () => (
  <ContentLayout>
    <div className="flex flex-col w-full mt-10">
      <MessageBox />
      <TextBox />
    </div>
  </ContentLayout>
);

export default Chat;
