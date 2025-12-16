



const CallToAction = () => {
  return (
       <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-blue-600 to-indigo-600 p-12 md:p-16 text-center text-white  mx-auto shadow-2xl">
            <h2 className="mb-6 text-4xl font-bold">Ready to get started?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
              Join hundreds of developers who've stopped wasting time on environment variable chaos.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#" className="rounded-lg bg-white px-8 py-4 text-base font-medium text-blue-600 hover:bg-gray-50 transition-colors">
                Start Free Trial
              </a>
              <a href="#" className="rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors">
                Schedule a Demo
              </a>
            </div>
            <p className="mt-8 text-sm text-blue-100">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
  )
}

export default CallToAction