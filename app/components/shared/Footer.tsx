import { Key } from "lucide-react"


const Footer = () => {
  return (
     <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-indigo-600">
                  <Key className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EnvFlow</span>
              </div>
              <p className="mt-4 max-w-md text-gray-600">
                Making development environment variable management simple and secure for small teams.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-center md:flex-row md:space-y-0 md:space-x-8">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Contact Us</a>
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Documentation</a>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} EnvFlow. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer