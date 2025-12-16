import { Check } from "lucide-react"




const PricingSection = () => {
  return (
   <section id="pricing" className="py-12">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="mb-4 text-4xl font-bold text-gray-900">
        Simple, transparent pricing
      </h2>
      <p className="mx-auto max-w-2xl text-gray-600">
        Start free. Pay only when your team grows.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
      {/* Free Tier */}
      <div className="rounded-3xl border border-gray-200 bg-white p-10">
        <h3 className="mb-2 text-xl font-bold text-gray-900">Free</h3>
        <p className="mb-6 text-gray-600">For solo developers & small tests</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">$0</span>
          <span className="text-gray-600"> / month</span>
        </div>

        <ul className="space-y-4 text-gray-700 mb-8">
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>1 project included</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>Up to 3 team members</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>Secure environment variables</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>CLI access</span>
          </li>
        </ul>

        <a
          href="#"
          className="block w-full rounded-lg border border-gray-200 px-6 py-3 text-center font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          Get started for free
        </a>
      </div>

      {/* Usage Based Tier */}
      <div className="relative rounded-3xl border border-blue-600 bg-white p-10 shadow-xl">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
          Most Flexible
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">Pay as you grow</h3>
        <p className="mb-6 text-gray-600">Perfect for growing teams</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900">$5</span>
          <span className="text-gray-600"> / project</span>
        </div>

        <ul className="space-y-4 text-gray-700 mb-8">
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>First project free</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>$5 per additional project</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>3 members included per project</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>$1 per extra member</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 text-green-500 shrink-0" />
            <span>All features included</span>
          </li>
        </ul>

        <a
          href="#"
          className="block w-full rounded-lg bg-gray-900 px-6 py-3 text-center font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Start building
        </a>
      </div>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500">
      No hidden fees • Cancel anytime • Fair usage-based pricing
    </p>
  </div>
</section>
  )
}

export default PricingSection