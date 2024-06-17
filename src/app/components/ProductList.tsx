import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default ProductList;
