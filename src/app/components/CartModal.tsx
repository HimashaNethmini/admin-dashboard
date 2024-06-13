import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div className="">Cart is Empty </div>
      ) : (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={100}
            height={80}
            className="object-cover rounded-md"
          />
          <div className="">
            {/* top */}

            <div className="">
              {/* title */}

              <div className="">
                <h3>Product Name</h3>
                <div className="">$49</div>
              </div>

              {/* desc*/}
              <div className="div">
                Available
              </div>
            </div>
            {/* bottom */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
