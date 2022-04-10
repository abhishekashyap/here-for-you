import { IoChevronForward } from "react-icons/io5";
import Lottie from "lottie-react";
import gemAnimation from "../../static/animation/8214-diamond.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl text-teal-700 pb-4">We're</h2>
      <h1 className="text-8xl text-teal-500">Here for You</h1>
      <Lottie loop autoPlay animationData={gemAnimation} />
      <button className="flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all">
        Get Started <IoChevronForward />
      </button>
    </main>
  );
}
