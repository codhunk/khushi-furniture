'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReturnsPage() {
  return (
    <>
      <Head>
        <title>Returns & Exchanges | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <header className="mb-16 border-b border-outline-variant pb-8 text-center max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">replay</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Returns & Exchanges</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We stand behind the quality of our craftsmanship. Here is our policy regarding returns and exchanges.
            </p>
          </header>

          <div className="max-w-3xl mx-auto space-y-12">
            <section className="bg-surface-container-low p-8 rounded-xl wood-shadow border border-outline-variant/30">
              <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">handyman</span>
                Bespoke & Custom Orders
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                Because bespoke and custom furniture items are tailored specifically to your dimensions, material choices, and design specifications, <strong>they cannot be returned or exchanged.</strong>
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We involve you heavily in the 3D rendering and material selection process to ensure the final product matches your exact vision before production begins.
              </p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Standard Collection Returns</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                Items from our standard, non-customized collections may be returned within <strong>14 days of delivery</strong> for a refund or exchange, provided they are in their original, unused condition.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant font-body-md">
                <li>A 15% restocking fee applies to all standard furniture returns.</li>
                <li>The customer is responsible for return shipping and logistics costs.</li>
                <li>Items must be packaged securely in their original crating if possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Transit Damage & Defects</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                If your item arrives damaged due to transit, or you identify a manufacturing defect, please notify our concierge team within <strong>48 hours of delivery</strong>. Please retain all packaging materials.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We will dispatch a master craftsman to inspect the issue and, depending on the severity, we will either repair the item on-site, replace it, or issue a full refund at no cost to you.
              </p>
            </section>

            <div className="mt-16 text-center">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Need to initiate a return?</h3>
              <a href="mailto:concierge@khushifurniture.com" className="inline-block bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg hover:bg-primary-container transition-all shadow-md">
                Contact Concierge
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
