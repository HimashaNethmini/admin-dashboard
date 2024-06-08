"use client"; //have to make this a client component to make user interaction

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import "../../../public/menu.png";

const Menu = () => {
  //use state to open the menu bar in mobile view
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />{
        open && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10">
                <Link href="/" >Homepage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/"> Cart(2)</Link>
            </div>
            )

      }
    </div>
  );
};

export default Menu;
