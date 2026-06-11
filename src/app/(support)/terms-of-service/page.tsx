'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <header className="mb-16 border-b border-outline-variant pb-8">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Terms of Service</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Last Updated: October 24, 2024</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <aside className="md:col-span-3 hidden md:block">
              <div className="sticky top-32 space-y-4 border-l border-outline-variant pl-4">
                <a href="#user-agreement" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">User Agreement</a>
                <a href="#bespoke-orders" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Bespoke Orders & Lead Times</a>
                <a href="#intellectual-property" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Intellectual Property</a>
                <a href="#liability" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Limitation of Liability</a>
              </div>
            </aside>

            <article className="md:col-span-9 space-y-12 max-w-3xl">
              <section id="user-agreement">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">User Agreement</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  By accessing the Khushi Furniture website or engaging our services, you agree to comply with and be bound by the following terms. These terms govern your use of our site, purchases, and custom commissions.
                </p>
              </section>

              <section id="bespoke-orders">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Bespoke Orders & Lead Times</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  As our furniture is predominantly handcrafted to order, quoted lead times are estimates based on current workshop capacity and material availability. While we strive to meet all deadlines, slight delays may occur due to the meticulous nature of our craftsmanship.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Once a bespoke design is approved and manufacturing begins, cancellations or significant design alterations cannot be accepted without incurring material and labor costs.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Intellectual Property</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  All designs, 3D renderings, product photography, and site content are the exclusive intellectual property of Khushi Furniture. Reproduction, distribution, or unauthorized use of our designs is strictly prohibited and protected by copyright laws.
                </p>
              </section>

              <section id="liability">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Limitation of Liability</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Wood is a natural material that will expand, contract, and develop a unique patina over time. We are not liable for minor variations in grain, color, or natural aging. Our liability for any claim shall not exceed the purchase price of the product in question.
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
