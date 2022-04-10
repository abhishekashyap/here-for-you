import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Message } from "./messages/types";

export default function TextBox({
  setMessages,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  const onSubmit = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 10,
        type: "user",
        message,
      },
    ]);
    setMessage("");
  };
  return (
    <div
      className={`h-20 bottom-2 flex rounded-full bg-white w-full transition-all border-4 ${
        isFocused ? "border-green-500" : " "
      }`}
    >
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-none bg-transparent px-4 py-1 outline-none focus:outline-none"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : null)}
        autoFocus
      />
      <button
        type="button"
        className={`flex rounded-full p-4 items-center m-2 px-4 py-2 font-semibold text-gray-100 transition-all ${
          message.length > 0 ? "bg-green-500" : "bg-gray-500 cursor-not-allowed"
        }`}
        disabled={message.length === 0}
        onClick={() => onSubmit()}
      >
        Send <IoSend className="ml-2" />
      </button>
    </div>
  );
}
