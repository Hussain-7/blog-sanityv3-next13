import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 lg:items-center justify-between font-bold px-4 sm:px-10 py-5 mb-10">
      <div>
        <h1 className="text-5xl sm:text-7xl">Hussain's Daily Blog</h1>
        <h2 className="mt-5 md:mt-5">
          Welcome to {""}
          <span className="underline decoration-4 decoration-[#f7ab0a] ">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-md">
        New product features | The latest in technology | The weekly debugging
        nightmare & More!
      </p>
    </div>
  );
};

export default Banner;
