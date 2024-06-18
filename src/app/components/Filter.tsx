const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" onChange={handleFilterChange}>
                

            </select>
        </div>
    </div>
  )
}

export default Filter