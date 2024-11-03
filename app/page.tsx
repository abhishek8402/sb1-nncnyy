import { LandingHero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Pricing } from '@/components/landing/pricing';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LandingHero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}