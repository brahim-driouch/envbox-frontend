import { Key, Lock, Server, Terminal, Users, Zap } from "lucide-react"




const Features = () => {
  return (
   <section id="features" className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Everything you need, nothing you don't</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Simple enough for small teams, powerful enough to scale
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Secure by Default</h3>
              <p className="text-gray-600">
                End-to-end encryption, audit logs, and role-based access control built in.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <Terminal className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Developer-First CLI</h3>
              <p className="text-gray-600">
                Simple commands that work with any tech stack. No complex configuration.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600">
                Invite members, assign projects, and control access levels with ease.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Get started in minutes. No infrastructure to manage or complex setup.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Environment Profiles</h3>
              <p className="text-gray-600">
                Separate configs for development, staging, and production environments.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                <Key className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">Version History</h3>
              <p className="text-gray-600">
                Track all changes, rollback when needed, and see who changed what.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features