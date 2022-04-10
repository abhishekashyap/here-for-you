export const BotMessage: React.FC = ({ children }) => {
  return (
    <div className="bg-green-100 py-2 px-5 m-1 rounded-tl-full w-fit rounded-r-full hyphens-auto max-w-[50%] text-black mb-4">
      {children}
    </div>
  );
};
