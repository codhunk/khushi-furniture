'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PressPage() {
  return (
    <>
      <Head>
        <title>Press Kit | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <header className="text-center mb-20 border-b border-outline-variant pb-16">
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Press & Media</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to write about Khushi Furniture. For press inquiries, interview requests, and high-resolution imagery, please contact our PR team.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="mailto:press@khushifurniture.com" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg hover:bg-primary-container transition-all shadow-md">
                Contact PR Team
              </a>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Brand Assets */}
            <div className="lg:col-span-5 space-y-12">
              <h2 className="font-headline-md text-headline-md text-primary">Brand Assets</h2>
              
              <div className="bg-surface-container-low p-8 rounded-xl wood-shadow border border-outline-variant/30">
                <div className="w-full h-32 bg-primary flex items-center justify-center rounded-lg mb-6">
                  <span className="font-display-lg text-display-lg text-on-primary tracking-tight">KF</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Logos & Guidelines</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Download our official vector logos and comprehensive brand identity guidelines.</p>
                <button className="text-secondary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                  Download .ZIP (12MB) <span className="material-symbols-outlined text-[16px]">download</span>
                </button>
              </div>

              <div className="bg-surface-container-low p-8 rounded-xl wood-shadow border border-outline-variant/30">
                <div className="grid grid-cols-2 gap-2 mb-6 h-32">
                  <div className="bg-surface-variant rounded-tl-lg rounded-bl-lg overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr4ve9S5Q6u4th6xNu0Zh21QhwIgO8_ifx9jVCn3pjd8SxmTg5ASsV_S3OH83qJjvE-Voi1IohTi2ASIJfRtEpHBusbJZp8AEJmqXPApF_nBXkFFEom5Ci21sl0wt8bFIn5HknOIdw8TT-kl_sSXVWrOxxISwijeX6lbrOgNw1_Y8ara3PNiZY-5aedpCCxU3l5aTiy-7AYAdmRwJ5xnuXH3Qazm0aOrnPmL1Zl7SXKfxP1YsIX0V7eamEjFtSLzbqdN2LbbgkdNw" alt="Baju Woodwork" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-surface-variant rounded-tr-lg rounded-br-lg overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH-nSMmIP-AYidqj37c5vXkfzpq5uGy4F4gJBgkgUjt-ftccIE_bE-faxSV0z58OczdER5_alC9QoXjd2C2l7GdKMNUdqt3w-eGYgSAFJKqTe4cGndftDhtdlJQTTQRXtkBETSewV5oFYDA_SmUerqsJhpvHsxkieL9AyGyPiYsYrBu6bvNKRcTq8EJ-fDkfnyn1adEQaYYTRrF7mhtIM_joUFFh6ajxTNWg5KwRTCKTh7d-x0QZ10Km7pq8Viide6k9xd8eY5R54" alt="Designer Gate" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">High-Res Imagery</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Access our curated gallery of product lifestyle shots, atelier photography, and headshots.</p>
                <button className="text-secondary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                  Go to Media Drive <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </button>
              </div>
            </div>

            {/* In the News */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">In The News</h2>

              {[
                { date: 'October 12, 2024', pub: 'Architectural Digest', title: 'The Resurgence of Handcrafted Mahogany in Modern Indian Homes', link: '#' },
                { date: 'August 05, 2024', pub: 'Vogue Living', title: 'Inside the Khushi Furniture Atelier: Where Tradition Meets Tomorrow', link: '#' },
                { date: 'May 22, 2024', pub: 'The Economic Times', title: 'Khushi Furniture Announces Zero-Waste Sustainability Initiative', link: '#' },
                { date: 'February 10, 2024', pub: 'Elle Decor', title: 'Top 10 Bespoke Furniture Brands Redefining Luxury in 2024', link: '#' },
              ].map((article, idx) => (
                <article key={idx} className="group border-b border-outline-variant/50 pb-8 hover:bg-surface-container-low transition-colors rounded-lg p-4 -mx-4 cursor-pointer">
                  <div className="flex gap-4 items-center mb-3">
                    <span className="bg-surface-container-high px-3 py-1 rounded text-on-surface-variant font-label-md text-[12px] uppercase tracking-wider">{article.pub}</span>
                    <time className="text-outline font-body-md text-sm">{article.date}</time>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <a href={article.link} className="text-secondary font-label-md text-label-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </article>
              ))}
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
