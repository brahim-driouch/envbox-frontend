import Link from "next/link";




const Navbar = () => {
  const linkClasses = "text-gray-700 hover:text-gray-900";
  return (
    <nav className="hidden md:block  flex-1 ml-10">
        <ul className="flex justify-center space-x-8">
            <li>
              <Link className={linkClasses}  href={"/"}> Home</Link>
            </li>
            <li>
              <Link className={linkClasses} href={"/#features"}> Features</Link>
            </li>
            <li>
              <Link className={linkClasses} href={"/#pricing"}> Pricing</Link>
            </li>
            <li>
              <Link className={linkClasses} href={"/docs"}> docs</Link>
            </li>
            <li>
              <Link className={linkClasses} href={"/contact"}> Contact</Link>
            </li>
        </ul>

    </nav>

    );
};

export default Navbar;