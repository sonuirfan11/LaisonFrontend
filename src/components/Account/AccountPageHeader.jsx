import { ArrowLeft } from "lucide-react";

const PageHeader = ({ title }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded-full p-1 hover:bg-gray-100"
          onClick={() => window.history.back()}
        >
          <ArrowLeft />
        </button>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title}
        </h1>
      </div>

      <hr className="my-3 border-gray-200 " />
    </>
  );
};

export default PageHeader;
