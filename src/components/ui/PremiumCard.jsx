import { Check } from 'lucide-react'
import { MEMBERSHIP_FEATURES } from '../../data/index.js'

export default function PremiumCard() {
  return (
    <div
      className="relative bg-white rounded-[28px] p-9 w-[360px]"
      style={{ boxShadow: '0 20px 60px rgba(59, 91, 245, 0.13), 0 0 0 1px rgba(200, 215, 255, 0.25)' }}
    >
      {/* RR logo — overlapping right edge */}
      <div className="absolute -right-9 top-14 w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-teal-200/50 bg-[#397CB1]">
        <img
          src="/RR Icon Logo.png"
          alt="RemoteRecruit"
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover p-7"
        />
      </div>

      <p className="text-[18px] text-gray-400 mb-2 tracking-wide">Your Membership Tier</p>

      <h3 className="text-[32px] font-bold leading-tight mb-6" style={{ color: '#397CB1' }}>
        Premium
      </h3>

      <p className="text-[14px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Features
      </p>

      <ul className="space-y-[14px] mb-8">
        {MEMBERSHIP_FEATURES.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-[15px] text-gray-600">
            <span
              className="flex-shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#397CB1' }}
            >
              <Check size={13} className="text-white" strokeWidth={3} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Payment footer */}
      <div className="bg-[#F4F5FF] rounded-4xl px-5 py-4 flex items-center gap-4 -ml-24 w-72 bg-white" style={{ boxShadow: '0 0 0 6px #F4F5FF, 0 16px 60px 25px #F4F5FF' }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 bg-[#D8DEFD]">
          <img
            src="/paypal.png"
            alt="PayPal"
            loading="lazy"
            className="h-5 object-contain"
          />
        </div>
        <div>
          <p className="text-[15px] text-blue-900 font-medium">Upcoming Payment In...</p>
          <p className="text-[15px] font-bold text-gray-800">14 Days - $79.99</p>
        </div>
      </div>
    </div>
  )
}
