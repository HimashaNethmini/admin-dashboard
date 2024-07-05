"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

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
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-14 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

    {/* notiifcation */}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

    {/*cart handling */}
    <div 
      className="relative cursor-pointer"
      onClick={() => setIsCartOpen((prev) => !prev)}>

      <Image
        src="/cart.png"
        alt=""
        width={22}
        height={22} 
      />
      
      <div className="absolute -top-4 -right-3 w-5 h-6 m-1  bg-cart text-xs text-white rounded-full flex items-center justify-center">2</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
  );
};

export default Navicons;
