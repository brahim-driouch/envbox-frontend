
"use client";

import Link from "next/link"



const AuthNavBar = () => {
  return (
    <nav className="">
        <ul className="flex space-x-6">
            <li>

              <Link className="px-4 py-2 rounded hover:bg-gray-50" href={"/auth/login"}> Login</Link>  
                
            </li>
            <li>
                <Link className="px-4 py-2  border-2-transparent bg-black text-white rounded hover:bg-black/85 hover:border-2-black" href={"/auth/register"}> Get started</Link>
            </li>
        </ul>
    </nav>
  )
}

export default AuthNavBar