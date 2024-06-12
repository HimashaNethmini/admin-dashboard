import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Navicons from "./Navicons";

const Navbar = () => {
  return (
    // h-20 means 80 pixel, making responsive screen sizes using tailwind css
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">

      {/* Mobile - menu bar for only mobile users*/}
      <div className="h-full flex items-center justify-between md:hidden"> {/*gap between menu icon and header name */}
       <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>{/*add letter spacing */}
        </Link>
        <Menu />
      </div>

      {/*bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex items-center gap-8"> {/*gap between cart n name */}
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide"> LAMA </div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/" >Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <Navicons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
