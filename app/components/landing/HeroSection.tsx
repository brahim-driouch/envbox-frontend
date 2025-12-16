import { Shield } from "lucide-react"



const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <Shield className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Secure Environment Management</span>
          </div>
          <h1 className="mb-6 text-6xl font-bold text-gray-900 leading-tight">
            Environment variables,
            <span className="block mt-2 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              finally done right
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Stop sharing secrets in Slack. Skip the enterprise complexity. EnvFlow is the simple, secure way for small teams to manage development environment variables.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="rounded-lg bg-gray-900 px-8 py-4 text-base font-medium text-white hover:bg-gray-800 transition-all hover:scale-105">
              Start Free Trial
            </a>
            <a href="#how-it-works" className="rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              See How It Works
            </a>
          </div>
        </div>
      </section>
  )
}

export default HeroSection