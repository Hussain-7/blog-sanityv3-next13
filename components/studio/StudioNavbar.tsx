import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#db4437] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#db4437] mr-2" />
          Go to the Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
