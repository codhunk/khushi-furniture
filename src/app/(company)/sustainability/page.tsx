'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SustainabilityPage() {
  return (
    <>
      <Head>
        <title>Sustainability | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop">
          {/* Hero Section */}
          <section className="max-w-container-max mx-auto px-gutter mb-20">
            <div className="relative h-[600px] rounded-2xl overflow-hidden wood-shadow flex items-center justify-center text-center px-4">
              <div className="absolute inset-0">
                <img 
                  alt="Lush green forest" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                />
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
              </div>
              <div className="relative z-10 max-w-3xl">
                <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-6 block">Our Commitment</span>
                <h1 className="font-display-lg text-display-lg text-white mb-6">Crafting with Conscience.</h1>
                <p className="font-body-lg text-body-lg text-white/90">
                  True luxury shouldn't cost the earth. We are dedicated to creating timeless pieces through ethical sourcing, responsible manufacturing, and community upliftment.
                </p>
              </div>
            </div>
          </section>

          {/* Initiatives */}
          <section className="max-w-container-max mx-auto px-gutter space-y-24">
            
            {/* 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl text-secondary">forest</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-6">100% FSC-Certified Wood</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Every piece of timber we use is strictly sourced from sustainably managed forests. We ensure that our supply chain combats deforestation and protects biodiversity. For every tree we use, we fund the planting of three more.
                </p>
                <div className="flex gap-4 mt-8">
                  <div className="bg-surface-container-low p-4 rounded-lg flex-1 text-center wood-shadow border border-outline-variant/20">
                    <span className="font-display-lg-mobile text-primary block mb-1">50K+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs">Trees Planted</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 h-[400px] rounded-xl overflow-hidden wood-shadow">
                <img src="https://images.unsplash.com/photo-1588612140409-95a9754f7dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wood grains" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="h-[400px] rounded-xl overflow-hidden wood-shadow">
                <img src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Recycling materials" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl text-secondary">recycling</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-6">Zero-Waste Workshop</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  We've redesigned our manufacturing process to ensure nothing goes to a landfill. Wood scraps are repurposed into smaller decor items, and sawdust is donated to local farms for agricultural use.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">check</span> Non-toxic, water-based finishes
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">check</span> 100% recyclable packaging
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">check</span> Solar-powered atelier
                  </li>
                </ul>
              </div>
            </div>

          </section>

          {/* Call to Action */}
          <section className="max-w-4xl mx-auto px-gutter mt-32 text-center bg-surface-container p-16 rounded-2xl border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Read our 2024 Impact Report</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Transparency is key to accountability. Dive deep into our sustainability metrics, goals, and achievements from the past year.
            </p>
            <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg hover:bg-primary-container transition-all shadow-md">
              Download Full Report (PDF)
            </button>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
