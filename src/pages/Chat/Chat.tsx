import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import Gems from "../../components/Gems/Gems";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  return (
    <>
      <Gems />
      <div className="h-screen w-screen font-sans bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center justify-center p-2 2xl:p-6">
        <div className="max-w-2xl h-full w-full relative">
          {/* ChatItems */}
          <div className="h-[92%] flex flex-col justify-end pb-2">
            <div className="bg-green-600 py-2 px-5 m-1 rounded-tr-full rounded-l-full hyphens-auto max-w-[50%] text-white self-end mb-4">
              Ut nostrud aute irure enim do qui esse commodo.
            </div>
            <div className="bg-green-100 py-2 px-5 m-1 rounded-tl-full rounded-r-full hyphens-auto max-w-[50%] text-black mb-4">
              Ut nostrud aute irure enim do qui esse commodo.
            </div>
          </div>
          {/* TextBox */}
          <div
            className={`h-[8%] bottom-2 flex rounded-full bg-white w-full transition-all border-4 ${
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
              autoFocus
            />
            <button
              type="button"
              className={`flex rounded-full p-4 items-center m-2 px-4 py-2 font-semibold text-gray-100 transition-all ${
                message.length > 0
                  ? "bg-green-500"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={message.length === 0}
            >
              Send <IoSend className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
