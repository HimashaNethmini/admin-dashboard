"use client";

import { useState } from "react";
import Image from "next/image";

const Navicons = () => {
  //use state
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  return (
    // right side of the homepage
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      {isProfileOpen && <div className=""></div>}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Navicons;
