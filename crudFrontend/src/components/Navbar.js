import React from "react";

const Navbar = () => {
    return(
        <div className='bg-slate-800 h-16 px-16 items-center flex'>
     <h2 className="text-3xl font-bold text-purple-300">👨🏼‍💻EM Service</h2>

      <nav className="ml-auto flex gap-8 text-1xl font-semibold">
     <a className="hover:text-purple-400 transition duration-200" href="/">Home</a>
     <a className="hover:text-purple-400 transition duration-200" href="/">Profile</a>
     <a className="hover:text-red-400 transition duration-200"  href="/"> LogOut</a>
     </nav>
     
    </div>
    )
}

export default Navbar;