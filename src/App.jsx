import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import MouseFollower from './components/ui/MouseFollower.jsx'
import Hero from './components/sections/Hero.jsx'
import GlobalJobBoard from './components/sections/GlobalJobBoard.jsx'
import FeeFree from './components/sections/FeeFree.jsx'
import ShowcaseTalents from './components/sections/ShowcaseTalents.jsx'
import CTASection from './components/sections/CTASection.jsx'
import FAQSection from './components/sections/FAQSection.jsx'
import PricingSection from './components/sections/PricingSection.jsx'

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <MouseFollower />
      <Navbar />
      <Hero />
      <main>
        <GlobalJobBoard />
        <FeeFree />
        <ShowcaseTalents />
        <CTASection />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
