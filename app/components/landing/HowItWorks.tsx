import { Code, Mail, Terminal } from "lucide-react"



const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Three simple steps</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Get your team up and running in minutes
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">
                1
              </div>
              <div className="mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <Code className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Create & Organize</h3>
              <p className="text-gray-600 leading-relaxed">
                Set up projects and add your environment variables. Organize by dev, staging, and production.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">
                2
              </div>
              <div className="mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50">
                <Mail className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Invite Your Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Add team members to projects. They get secure access without any manual setup.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">
                3
              </div>
              <div className="mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-green-50">
                <Terminal className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Use the CLI</h3>
              <p className="text-gray-600 leading-relaxed">
                Run <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">envflow inject</code> to securely load variables into your environment.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks