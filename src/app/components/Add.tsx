"use client";

import { useState } from "react";

const Add = () => {
  //add the quantity part
  const [Quantity, setQuantity] = useState(1);

  //increment function
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  //decrease Quantity
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col gap-4 mt-3">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-3xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={decrementQuantity}
            >
              -
            </button>
            {Quantity}
            <button
              className="cursor-pointer text-3xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          {Quantity === 1 && (
            <div className="text-xs">
              Only <span className="text-orange-500"> items</span> left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          // onClick={() => addItem(wixClient, productId, variantId, quantity)}
          // disabled={isLoading}
          className="w-36 text-sm rounded-3xl ring-1 ring-cart text-cart py-2 px-4 hover:bg-cart hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
