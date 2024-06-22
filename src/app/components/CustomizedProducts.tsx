const CustomizedProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium"> Choose a colour</h4>
      <div className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500"></li>
      </div>
      <h4 className="font-medium">Choose a size</h4>
      <div className="flex items-center gap-3"></div>
    </div>
  )
}

export default CustomizedProducts