import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 ">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/4194714/pexels-photo-4194714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
