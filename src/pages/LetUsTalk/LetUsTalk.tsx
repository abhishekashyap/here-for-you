import ContentLayout from "../../layout/ContentLayout";
import fistBump from "../../static/animation/90428-fist-bump.json";
import Lottie from "lottie-react";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LetUsTalk() {
  return (
    <ContentLayout>
      <Lottie autoPlay animationData={fistBump} />
      <Link
        to="/chat"
        className="absolute bottom-60 flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all"
      >
        Let's Talk <IoChevronForward />
      </Link>
    </ContentLayout>
  );
}
