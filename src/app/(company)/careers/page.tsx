'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop">
          {/* Hero Section */}
          <section className="max-w-container-max mx-auto px-gutter mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Careers</span>
                <h1 className="font-display-lg text-display-lg text-primary mb-6">Join Our Family of Artisans.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  At Khushi Furniture, we aren't just making furniture; we are preserving heritage. We're always looking for passionate individuals who share our dedication to craftsmanship and luxury design.
                </p>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-xl wood-shadow">
                <img 
                  alt="Craftsman working" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                />
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="bg-surface-container-low py-section-padding-desktop mb-20">
            <div className="max-w-container-max mx-auto px-gutter">
              <h2 className="font-display-lg-mobile md:font-display-lg text-primary text-center mb-16">Why Work With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 wood-shadow">
                    <span className="material-symbols-outlined text-4xl">handyman</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">True Craftsmanship</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">We value traditional techniques passed down through generations, combining them with modern precision.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 wood-shadow">
                    <span className="material-symbols-outlined text-4xl">psychology</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Continuous Learning</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">We invest in our people. From apprenticeships to master classes, your growth is our priority.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 wood-shadow">
                    <span className="material-symbols-outlined text-4xl">diversity_3</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Family Heritage</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Since 1994, we've fostered a close-knit, supportive environment where everyone's voice is heard.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="max-w-3xl mx-auto px-gutter">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant pb-4">Open Roles</h2>
            
            <div className="space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl wood-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Master Carpenter</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span> Mumbai Atelier · Full-Time
                  </p>
                </div>
                <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-primary-container transition-all shadow-md">
                  Apply Now
                </button>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl wood-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Luxury Showroom Consultant</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span> Mumbai Flagship · Full-Time
                  </p>
                </div>
                <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-primary-container transition-all shadow-md">
                  Apply Now
                </button>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl wood-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Junior Interior Designer</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span> Remote / Mumbai · Contract
                  </p>
                </div>
                <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-primary-container transition-all shadow-md">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="mt-12 text-center p-8 bg-surface-container rounded-xl">
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Don't see a perfect fit? We're always looking for talent.</p>
              <a href="mailto:careers@khushifurniture.com" className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1 hover:text-primary transition-colors">
                Send us your portfolio
              </a>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
