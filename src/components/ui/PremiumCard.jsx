import { Check } from 'lucide-react'
import { MEMBERSHIP_FEATURES } from '../../data/index.js'

export default function PremiumCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200 p-6 w-72 border border-gray-100">
      <p className="text-xs text-gray-400 mb-2 font-medium">Your Membership Plan</p>

      <div className="flex items-center gap-2 mb-4">
        <img
          src="/RR Icon Logo.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-7 w-7 object-contain"
        />
        <span className="text-xl font-bold text-[#0B1E4F]">Premium</span>
      </div>

      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Features
      </p>

      <ul className="space-y-2 mb-5">
        {MEMBERSHIP_FEATURES.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-gray-700">
            <Check size={13} className="text-[#3B5BF5] shrink-0" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        <img
          src="/paypal.png"
          alt="PayPal"
          loading="lazy"
          className="h-5 object-contain"
        />
        <div>
          <p className="text-[10px] text-gray-400">Upcoming Payment</p>
          <p className="text-xs font-semibold text-gray-700">14 Days – $79.99</p>
        </div>
      </div>
    </div>
  )
}
