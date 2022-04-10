import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import ContentLayout from "../../layout/ContentLayout";

export default function Description() {
  return (
    <ContentLayout>
      <p className="text-teal-700 mt-32 text-lg text-center">
        <span className="font-bold">Here for you</span> is a platform where you
        can share your thoughts, ideas, your feelings without hesitation. All
        your secrets are just between you and me.
      </p>
      <p className="text-teal-700 mt-8 text-lg text-center">
        In India, mental health is still a taboo topic. Convincing our parents,
        peers or even close friends that we require counselling is perceived
        with a sense of judgement and there is stigma associated with those
        having mental issues. They are also considered as being consequence of a
        lack of self-discipline and willpower.
      </p>
      <p className="text-teal-700 mt-8 text-lg text-center">
        Whether it's your need for psychologist or you need someone to talk to,
        I'm here to help you and clear all your doubts and hesitations.
      </p>
      <div className="flex absolute bottom-60">
        <Link
          to="/"
          className=" flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all mr-4"
        >
          <IoChevronBack /> Prev
        </Link>
        <Link
          to="/choice"
          className="ml-4 flex items-center text-2xl bg-green-500 hover:bg-teal-700 text-white py-4 px-6 rounded-full transition-all"
        >
          Next <IoChevronForward />
        </Link>
      </div>
    </ContentLayout>
  );
}
