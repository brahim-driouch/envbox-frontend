import { Check, X } from "lucide-react"



const Scope = () => {
  return (
    <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gray-900 p-12 md:p-16 text-white  mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold">Honest about our scope</h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                We focus on one thing and do it really well
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-lg font-bold flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-400" />
                  What We Do
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-green-400 shrink-0" />
                    <span>Development environment management for small teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-green-400 shrink-0" />
                    <span>Simple CLI for local development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-green-400 shrink-0" />
                    <span>Team collaboration with access control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-green-400 shrink-0" />
                    <span>Dev and staging environment support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-bold flex items-center gap-2">
                  <X className="h-5 w-5 text-red-400" />
                  What We Don't Do
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 text-red-400 shrink-0" />
                    <span>Enterprise secrets management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 text-red-400 shrink-0" />
                    <span>Kubernetes or infrastructure secrets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 text-red-400 shrink-0" />
                    <span>Compliance certifications (SOC2, HIPAA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 text-red-400 shrink-0" />
                    <span>CI/CD pipeline secret management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Scope