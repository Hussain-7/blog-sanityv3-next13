import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={"/logo.png"}
        className="rounded-full object-cover"
        height={50}
        width={50}
        alt={"Logo"}
      />
      <div className="text-lg font-bold px-3">Blog Studio</div>
    </div>
  );
};

export default Logo;
