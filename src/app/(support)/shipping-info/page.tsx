'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShippingInfoPage() {
  return (
    <>
      <Head>
        <title>Shipping Information | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">local_shipping</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Shipping & Delivery</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We ensure your investment arrives safely and is set up perfectly in your home.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-surface-container-lowest p-8 rounded-xl wood-shadow border border-outline-variant/30 text-center">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Standard Delivery</h3>
                <p className="text-secondary font-headline-sm mb-4">Free Nationwide</p>
                <p className="font-body-md text-on-surface-variant mb-4">Curbside delivery for smaller items and accessories.</p>
                <p className="font-label-md text-outline">Usually ships in 5-7 business days.</p>
              </div>
              
              <div className="bg-primary-container text-on-primary-container p-8 rounded-xl wood-shadow text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">Recommended</div>
                <h3 className="font-headline-md text-headline-md mb-2">White-Glove Service</h3>
                <p className="text-secondary-fixed mb-4 font-headline-sm">$150 Flat Rate</p>
                <p className="font-body-md text-on-primary-container/90 mb-4">In-home placement, full assembly, and packaging removal.</p>
                <p className="font-label-md opacity-80">Scheduled via appointment.</p>
              </div>
            </div>

            <article className="space-y-12">
              <section>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">The White-Glove Experience</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our premier White-Glove delivery is designed for large, solid wood furniture pieces. Our trained logistics team will bring the items into your designated room (including up to two flights of stairs), assemble the furniture if required, ensure perfect placement, and remove all crates and packing materials.
                </p>
              </section>

              <section>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Lead Times</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Because Khushi Furniture items are predominantly handcrafted to order, please allow <strong>4 to 8 weeks</strong> for manufacturing before shipping. Once your piece passes our final quality assurance check, our concierge will contact you to schedule delivery.
                </p>
              </section>

              <section>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">International Shipping</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We proudly ship our heirloom pieces worldwide via sea and air freight. International shipping costs are calculated post-checkout based on volumetric weight and destination. Please contact our international sales team for an exact quote.
                </p>
              </section>
            </article>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
