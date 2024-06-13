import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div className="">Cart is Empty </div>
      ) : (
        <>
        <h2 className="flex items-center justify-center font-medium text-xl">Shopping Cart</h2>
        <div className="flex flex-col gap-8">

          {/* first shopping item */}
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={100}
            height={80}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* top */}

            <div className="">
              {/* title */}

              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm text-xs">$49</div>
              </div>

              {/* desc*/} 
              <div className="text-sm text-gray-500 ">
                Available
              </div>
            </div>
            {/* bottom */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty 1</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>

          {/* second shopping item */}
          <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/4194714/pexels-photo-4194714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={100}
            height={80}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* top */}

            <div className="">
              {/* title */}

              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm text-xs">$89</div>
              </div>

              {/* desc*/} 
              <div className="text-sm text-gray-500 ">
                Available
              </div>
            </div>
            {/* bottom */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty 3</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        </div>

        {/* / button */}
        <div className="">
          <div className="flex items-center justify-between font-semibold">
            <span className="">Subtotal</span>
            <span className="">$138</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="flex justify-between text-sm">
            <button className="bg-black text-white rounded-md py-3 px-4 ring-1 ring-gray-300"> Buy Now</button>
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 "> View Cart</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
