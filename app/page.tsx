import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { BookkeepingSection } from '@/components/bookkeeping-section'
import { ServicesSection } from '@/components/services-section'
import { TrustSection } from '@/components/trust-section'
import { FaqSection } from '@/components/faq-section'
import { LocationSection } from '@/components/location-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BookkeepingSection />
        <ServicesSection />
        <TrustSection />
        <FaqSection />
        <LocationSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
