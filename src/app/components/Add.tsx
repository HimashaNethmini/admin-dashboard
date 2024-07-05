const Add = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium mt-3"> Choose a Quantity</h4>
      <div className=""></div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-cart text-cart py-2 hover:bg-cart hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
    </div>
  )
}

export default Add