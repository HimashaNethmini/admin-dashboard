"use client";

import Image from "next/image";
import { useState } from "react";

//create a list of images
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/5938598/pexels-photo-5938598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImages = () => {
  //use effect to change
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="70vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {/* check images when clicking on it */}
        {images.map((img, i) => (
          <div 
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={()=> setIndex(i)} > 
              <Image 
                src={img.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
