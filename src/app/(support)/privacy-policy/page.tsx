'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <header className="mb-16 border-b border-outline-variant pb-8">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Privacy Policy</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Last Updated: October 24, 2024</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:col-span-3 hidden md:block">
              <div className="sticky top-32 space-y-4 border-l border-outline-variant pl-4">
                <a href="#info-collection" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Information Collection</a>
                <a href="#how-we-use" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">How We Use Your Data</a>
                <a href="#data-security" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Data Security</a>
                <a href="#cookies" className="block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Cookies & Tracking</a>
              </div>
            </aside>

            {/* Document Content */}
            <article className="md:col-span-9 space-y-12 max-w-3xl">
              <section id="info-collection">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Information Collection</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  At Khushi Furniture, we are committed to safeguarding your privacy. When you interact with our atelier—whether browsing our collections, scheduling a bespoke consultation, or making a purchase—we may collect personal information such as your name, contact details, shipping address, and payment information.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We only collect information that is necessary to provide you with the exceptional service and high-quality craftsmanship you expect from us.
                </p>
              </section>

              <section id="how-we-use">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">How We Use Your Data</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  The data we collect is utilized strictly to fulfill your orders, communicate regarding bespoke commissions, and arrange white-glove delivery services. With your explicit consent, we may also send you curated newsletters featuring our latest collections and design inspiration.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-on-surface-variant font-body-md">
                  <li>Processing transactions securely</li>
                  <li>Providing updates on custom manufacturing lead times</li>
                  <li>Improving our website and showroom experience</li>
                </ul>
              </section>

              <section id="data-security">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Data Security</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We employ industry-standard encryption and robust security protocols to ensure your data is protected against unauthorized access. We do not sell, rent, or trade your personal information to third parties. Your data is only shared with trusted logistics partners strictly for the purpose of order fulfillment.
                </p>
              </section>

              <section id="cookies">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Cookies & Tracking</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our website utilizes cookies to enhance your browsing experience, remember your preferences, and provide analytical insights into website traffic. You may choose to disable cookies through your browser settings, though this may limit your ability to fully experience our digital portfolio.
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
