import { Key } from "lucide-react"
import AuthNavBar from "../nav/AuthNavBar"
import Navbar from "../nav/Navbar"




const Header = () => {
  return (
      <header className="w-full max-w-6xl mx-auto border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600">
                <Key className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EnvFlow</span>
            </div>
            <Navbar />
            <AuthNavBar />
          </div>
        </div>
      </header>
  )
}

export default Header