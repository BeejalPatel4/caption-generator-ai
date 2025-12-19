
export default function PricingPage() {
  return (
    <section className="text-white p-8  mt-20 ml-80 container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing</h1>
      <p className="text-white/80 mb-8 text-center">
        Choose the plan that fits your needs. Simple, transparent pricing.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-white/70 mb-4">Basic caption generation with limited features.</p>
          <p className="text-3xl font-bold mb-6">$0</p>
          <button className="bg-pink-200 text-black px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gray-800/50 rounded-xl p-6 border-2 border-pink-400">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-white/70 mb-4">Unlimited captions, faster processing, priority support.</p>
          <p className="text-3xl font-bold mb-6">$9.99/mo</p>
          <button className="bg-pink-400 text-black px-4 py-2 rounded-full">
            Upgrade
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-white/70 mb-4">Custom solutions for teams and businesses.</p>
          <p className="text-3xl font-bold mb-6">Contact Us</p>
          <button className="bg-pink-200 text-black px-4 py-2 rounded-full">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
