'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  { id: 1, category: 'living', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr4ve9S5Q6u4th6xNu0Zh21QhwIgO8_ifx9jVCn3pjd8SxmTg5ASsV_S3OH83qJjvE-Voi1IohTi2ASIJfRtEpHBusbJZp8AEJmqXPApF_nBXkFFEom5Ci21sl0wt8bFIn5HknOIdw8TT-kl_sSXVWrOxxISwijeX6lbrOgNw1_Y8ara3PNiZY-5aedpCCxU3l5aTiy-7AYAdmRwJ5xnuXH3Qazm0aOrnPmL1Zl7SXKfxP1YsIX0V7eamEjFtSLzbqdN2LbbgkdNw', title: 'Velvet Heritage Sofa' },
  { id: 2, category: 'bedroom', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDETf-zkEYqN8-vLnJef3YZSWqHph5mzsKP8MmhmAn5Rxky3UxX8h6BIjKlnpaOjAE61bd7m42URvQtbI8LSrbao20IIjtVIodob2e2vHY5BI7qUXK42B2tTR2FvzgWA50GbZwujFrZs_uonnkKzC59fg89u-2qWuga-WKieZTxaMd_lU8r5dH9029YvCAjxXXI2MQn1AollpWCzpqojlf9zF-0ViNn0vWLaae2q58C_hzhlRcBVmbi1mkP7AbzzJ7DXH57tixTY-o', title: 'Royal Oak Bedstead' },
  { id: 3, category: 'dining', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuGRceQze_5FQpjuZgIvL9qMaFpv0rlIpfzTtTSRVZEjL3ncQ3ome7wQUSVrT_lz2f1q5-SOrzz72QBvN2cFucDdUuJEW-jc1E7f7IgsqS94khQKRblTHBgtAwRYuONK58Vg9cHAMKyuJ8nCD3um98YUxFL-j8XKt66JlygfrQVC-e1vuT1V4ypOVmjYFxOBr3slNqwhWJrxzMe-VwujMaTBTL2SX2JXUQ8to4jXAYBbpfKkX_oFPmoSN1cJ9slIW0G-T0PQci1mI', title: 'Marble Nexus Table' },
  { id: 4, category: 'living', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH-nSMmIP-AYidqj37c5vXkfzpq5uGy4F4gJBgkgUjt-ftccIE_bE-faxSV0z58OczdER5_alC9QoXjd2C2l7GdKMNUdqt3w-eGYgSAFJKqTe4cGndftDhtdlJQTTQRXtkBETSewV5oFYDA_SmUerqsJhpvHsxkieL9AyGyPiYsYrBu6bvNKRcTq8EJ-fDkfnyn1adEQaYYTRrF7mhtIM_joUFFh6ajxTNWg5KwRTCKTh7d-x0QZ10Km7pq8Viide6k9xd8eY5R54', title: 'Amber Occasional Chair' },
  { id: 5, category: 'office', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMPye7qbXqFtCRczD4SgSyWLWyru8sQ13a2p61jZGLzvGf1exSeA262zToi-WuJbOZ4jHHz2_PKFUGf2_gCp9kTqf_6Sdyjy0WN5hdtF17d0gwixl4dDqN4ObMxmc2nAl_ba3uN-j5XPIh8DQzEB19Mfjw8TIECJ_N4JwEyMToxYhKFtEW4awgk6PHfeLSZAVpFm4OLPORsUXX2LRJCKpS7l7JBuaa8mgTJP8f15Wfbod4GryCIwod16A5tdvRjlbKgBsm0Zq61z0', title: 'Walnut Executive Desk' },
  { id: 6, category: 'living', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZHnBoi6YbdImZszPMHvIMfb0nDUecj-yqCqncNw3C6P2Jy8EPDOQBKzAk44MLbzqWxRh9B8oIDtQnuMj01PD2XSW84XT9-M-jXLegihFLN57KTOgsgqBWqqSm5XcTRQ1ACpA9qKps7o6RzHOVfqGrNmCxQG__FWf1XLRdp-cwDFrkYj4-x08AHd9cBp3yxbRMc8YC64GyLAuNfuA7FcS8dyFTzMA3ulw5XbrnzwFxnfG96n-Y8DmA80tNuO7WbK21LqDn9Nv4AI', title: 'Minimalist Console' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <Head>
        <title>Gallery | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop">
          <section className="max-w-container-max mx-auto px-gutter mb-12 text-center">
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Our Masterpieces</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Browse our portfolio of completed projects and bespoke creations. Let these spaces inspire your own home's transformation.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'living', 'bedroom', 'dining', 'office'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-label-md text-label-md capitalize transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-primary text-on-primary shadow-md' 
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-[4/5] wood-shadow bg-surface-container-low cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                    <h3 className="text-white font-headline-md text-headline-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
