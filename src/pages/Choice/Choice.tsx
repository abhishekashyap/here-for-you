import ContentLayout from "../../layout/ContentLayout";

export default function Choice() {
  return (
    <ContentLayout>
      <h3>What do you need?</h3>

      <div className="flex justify-around">
        <div className="w-[40%] mb-12 px-8 bg-slate-600 p-6">
          <img
            alt="..."
            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
            className="shadow-lg rounded-full mx-auto"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold text-blueGray-700">
              Psychologist
            </h5>
            <p className="mt-1 text-sm text-blueGray-400">
              You need to discuss your issues with a psychologist
            </p>
          </div>
        </div>
        <div className="w-[40%] mb-12 px-8 bg-slate-600">
          <img
            alt="..."
            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
            className="shadow-lg rounded-full mx-auto"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold text-blueGray-700">
              Psychologist
            </h5>
            <p className="mt-1 text-sm text-blueGray-400">
              You need to discuss your issues with a psychologist
            </p>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
