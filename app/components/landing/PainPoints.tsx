import { Shield, Users, X } from "lucide-react"



const PainPoints = () => {
  return (
    <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">The old way is broken</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Managing environment variables shouldn't be this painful
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="rounded-2xl bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Slack & Email Chaos</h3>
              <p className="text-gray-600 leading-relaxed">
                Variables get lost in chat history, sent to wrong channels, or buried in email threads.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Over-Engineered Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise solutions are too complex, too expensive, and built for teams 10x your size.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Onboarding Hell</h3>
              <p className="text-gray-600 leading-relaxed">
                New developers waste hours setting up environments with missing or outdated secrets.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PainPoints