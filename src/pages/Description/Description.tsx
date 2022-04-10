import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import ContentLayout from "../../layout/ContentLayout";

export default function Description() {
  return (
    <ContentLayout>
      <p className="text-teal-700 mt-32 text-lg text-center">
        <span className="font-bold">Here for you</span> is a platform where you
        can express your thoughts and feelings with a friend without hesitation.
        All your secrets are safe with me.
      </p>
      <p className="text-teal-700 mt-8 text-lg text-center">
        Mental health is still a taboo in India. Trying to convince our parents,
        peers or even close friends that one requires counselling is looked down
        upon and is invited with judgement. There is a stigma associated with
        the ones who go through it. It is often mistaken for a lack of
        self-discipline and willpower.
      </p>
      <p className="text-teal-700 mt-8 text-lg text-center">
        If you need a psychologist or someone to talk to, I'm here to help you
        with your doubts and be a friend. Do not hesitate. You are not alone in
        this.
      </p>
      <div className="flex absolute bottom-60">
        <Link
          to="/"
          className=" flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all mr-4"
        >
          <IoChevronBack /> Prev
        </Link>
        <Link
          to="/letUsTalk"
          className="ml-4 flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all"
        >
          Next <IoChevronForward />
        </Link>
      </div>
    </ContentLayout>
  );
}
