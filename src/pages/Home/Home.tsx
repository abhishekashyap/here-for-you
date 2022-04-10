import { IoChevronForward } from "react-icons/io5";
import Lottie from "lottie-react";
import gemAnimation from "../../static/animation/8214-diamond.json";
import { Link } from "react-router-dom";
import ContentLayout from "../../layout/ContentLayout";

export default function Home() {
  return (
    <ContentLayout>
      <Lottie loop autoPlay animationData={gemAnimation} />
      <Link
        to="/description"
        className="absolute bottom-60 flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all"
      >
        Get Started <IoChevronForward />
      </Link>
    </ContentLayout>
  );
}
