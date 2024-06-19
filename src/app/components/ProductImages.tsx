import Image from "next/image";

//create a list of images
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id:2,
    url:"https://images.pexels.com/photos/5938598/pexels-photo-5938598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:3,
    url:"https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:4,
    url:"https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="">
        <div className="w-1/2 h-32 relative gap-4 mt-8">
          <Image
            src="https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="">
          <Image
            src="https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>

        <div className="">
          <Image
            src="https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
