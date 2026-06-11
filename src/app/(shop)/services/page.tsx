'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Services | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop">
          {/* Hero Section */}
          <section className="max-w-container-max mx-auto px-gutter mb-20 text-center reveal-on-scroll">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Bespoke Furniture Services</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Beyond creating individual pieces, we offer comprehensive services to transform your spaces. From initial consultation to white-glove delivery, our master artisans are dedicated to realizing your vision.
            </p>
          </section>

          {/* Services Grid */}
          <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Service 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 wood-shadow group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Custom Furniture Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Commission a one-of-a-kind piece tailored to your exact specifications. Choose your wood, finish, and upholstery, and watch our master craftsmen bring your heirloom to life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> 3D Renderings
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Material Selection
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Artisan Craftsmanship
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 wood-shadow group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">home_repair_service</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Antique Restoration</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Breathe new life into your cherished heirlooms. Our delicate restoration process preserves the history and integrity of your antique furniture while ensuring structural stability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Wood Refinishing
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Upholstery Replacement
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Structural Repair
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 wood-shadow group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">weekend</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Space Planning & Interior Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Our design consultants work closely with you to curate cohesive environments. We ensure every piece harmonizes perfectly with your home's architecture and your personal lifestyle.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> In-Home Consultation
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Floor Plans
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Color & Fabric Pairing
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 wood-shadow group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">White-Glove Delivery</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Luxury extends beyond the workshop. Our dedicated logistics team ensures your furniture is transported safely, assembled meticulously, and placed exactly where you desire.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Fully Insured Transport
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> On-site Assembly
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Packaging Removal
                </li>
              </ul>
            </div>

          </section>

          {/* CTA Section */}
          <section className="max-w-container-max mx-auto px-gutter mt-20 reveal-on-scroll">
            <div className="bg-primary text-on-primary rounded-2xl p-12 text-center relative overflow-hidden wood-shadow">
              <div className="absolute inset-0 wood-texture-overlay opacity-10"></div>
              <div className="relative z-10">
                <h2 className="font-display-lg-mobile md:font-display-lg mb-6">Ready to transform your space?</h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto mb-8">
                  Schedule a private consultation with our master artisans today.
                </p>
                <a href="/contact" className="inline-block bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-lg active:scale-95">
                  Book a Consultation
                </a>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
