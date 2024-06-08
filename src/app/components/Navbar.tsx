import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
    return (
      // h-20 means 80 pixel, making responsive screen sizes using tailwind css
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"> 
        <div className="h-full flex items-center justify-between">  {/*gap between menu icon and header name */}
        
          {/* Mobile - menu bar for only mobile users*/}
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div> {/*add letter spacing */}
          </Link>
          <Menu/>

        </div>

      </div>
    )
  }
  
  export default Navbar