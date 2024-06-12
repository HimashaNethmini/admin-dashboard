"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navicons = () => {

  //login route
  const router = useRouter();

  //use state
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //tempprary 
  const isLoggedIn = false

  //handle login function
  const handleProfile = () =>{
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen ((prev) => !prev);
    };
  

  return (
    // right side of the homepage
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && <div className="">
        <Link href="/">Profile</Link>
        <div className="mt-2 cursor-pointer">Logout</div>
      </div>}


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
