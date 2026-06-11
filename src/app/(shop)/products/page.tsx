'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Products() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      console.log('Filter applied:', e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>Products | Khushi Furniture</title>
      </Head>

      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="pt-24 pb-section-padding-desktop max-w-container-max mx-auto px-gutter">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Our Collections</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
              Experience the harmony of traditional craftsmanship and modern design. Each piece is meticulously handcrafted to elevate your living space.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-gutter">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Category</h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary border-outline" type="checkbox" onChange={handleFilterChange} value="All Collections" />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">All Collections</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox rounded text-primary focus:ring-primary border-outline" type="checkbox" onChange={handleFilterChange} value="Sofa Sets" />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Sofa Sets</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox rounded text-primary focus:ring-primary border-outline" type="checkbox" onChange={handleFilterChange} value="Bedroom Suites" />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Bedroom Suites</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox rounded text-primary focus:ring-primary border-outline" type="checkbox" onChange={handleFilterChange} value="Dining Tables" />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Dining Tables</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox rounded text-primary focus:ring-primary border-outline" type="checkbox" onChange={handleFilterChange} value="Office Decor" />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Office Decor</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Material Type</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors">Teak Wood</button>
                  <button className="px-3 py-1.5 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors">Oak</button>
                  <button className="px-3 py-1.5 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors">Velvet</button>
                  <button className="px-3 py-1.5 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors">Leather</button>
                  <button className="px-3 py-1.5 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-xl hover:bg-secondary-container transition-colors">Metal</button>
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Price Range</h3>
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="50000" min="1000" step="500" type="range" defaultValue={25000} />
                <div className="flex justify-between mt-2 font-label-md text-label-md text-on-surface-variant">
                  <span>$1,000</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div className="bg-primary-container p-6 rounded-xl text-on-primary">
                <h4 className="font-headline-sm text-headline-sm mb-2">Bespoke Design</h4>
                <p className="font-body-md text-body-md mb-4 opacity-90">Can't find what you're looking for? Let us craft a custom piece just for you.</p>
                <button className="w-full py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:brightness-110 transition-all">Start Inquiry</button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className={`relative flex-1 w-full rounded-t-lg transition-all ${isSearchFocused ? 'shadow-md' : ''}`}>
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                  <input 
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline-variant font-body-md rounded-t-lg transition-all" 
                    placeholder="Search for luxury sofas, beds, tables..." 
                    type="text" 
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Sort by:</span>
                  <select className="bg-transparent border-none font-label-md text-label-md text-primary focus:ring-0 cursor-pointer">
                    <option>Latest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              {/* Catalog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product 1 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="High-end modern sofa in a minimalist living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr4ve9S5Q6u4th6xNu0Zh21QhwIgO8_ifx9jVCn3pjd8SxmTg5ASsV_S3OH83qJjvE-Voi1IohTi2ASIJfRtEpHBusbJZp8AEJmqXPApF_nBXkFFEom5Ci21sl0wt8bFIn5HknOIdw8TT-kl_sSXVWrOxxISwijeX6lbrOgNw1_Y8ara3PNiZY-5aedpCCxU3l5aTiy-7AYAdmRwJ5xnuXH3Qazm0aOrnPmL1Zl7SXKfxP1YsIX0V7eamEjFtSLzbqdN2LbbgkdNw" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-on-secondary px-3 py-1 rounded-xl font-label-md text-label-md shadow-lg">New Arrival</span>
                    </div>
                    <button className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                      <span className="material-symbols-outlined text-primary">favorite</span>
                    </button>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Velvet Heritage Sofa</h3>
                      <span className="text-secondary font-headline-sm text-headline-sm">₹129,900</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Handcrafted Italian velvet sofa with a solid teak frame. Designed for ultimate comfort and timeless elegance.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#2E4A3E] border border-outline-variant shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#442A22] border border-outline-variant shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#1B1C1C] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Royal Oak Bedstead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETf-zkEYqN8-vLnJef3YZSWqHph5mzsKP8MmhmAn5Rxky3UxX8h6BIjKlnpaOjAE61bd7m42URvQtbI8LSrbao20IIjtVIodob2e2vHY5BI7qUXK42B2tTR2FvzgWA50GbZwujFrZs_uonnkKzC59fg89u-2qWuga-WKieZTxaMd_lU8r5dH9029YvCAjxXXI2MQn1AollpWCzpqojlf9zF-0ViNn0vWLaae2q58C_hzhlRcBVmbi1mkP7AbzzJ7DXH57tixTY-o" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-xl font-label-md text-label-md shadow-lg">Bestseller</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Royal Oak Bedstead</h3>
                      <span className="font-headline-sm text-headline-sm text-secondary">₹192,000</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Premium solid oak construction with a hand-polished finish. Features a signature tall headboard with diamond stitching.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#5D4037] border border-outline-variant shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#8D6E63] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Marble Nexus Table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuGRceQze_5FQpjuZgIvL9qMaFpv0rlIpfzTtTSRVZEjL3ncQ3ome7wQUSVrT_lz2f1q5-SOrzz72QBvN2cFucDdUuJEW-jc1E7f7IgsqS94khQKRblTHBgtAwRYuONK58Vg9cHAMKyuJ8nCD3um98YUxFL-j8XKt66JlygfrQVC-e1vuT1V4ypOVmjYFxOBr3slNqwhWJrxzMe-VwujMaTBTL2SX2JXUQ8to4jXAYBbpfKkX_oFPmoSN1cJ9slIW0G-T0PQci1mI" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Marble Nexus Table</h3>
                      <span className="font-headline-sm text-headline-sm text-secondary">₹116,000</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Italian Carrara marble top paired with a geometric brushed gold steel base. A statement piece for modern dining.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#FFFFFF] border border-outline shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#1B1C1C] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Amber Occasional Chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH-nSMmIP-AYidqj37c5vXkfzpq5uGy4F4gJBgkgUjt-ftccIE_bE-faxSV0z58OczdER5_alC9QoXjd2C2l7GdKMNUdqt3w-eGYgSAFJKqTe4cGndftDhtdlJQTTQRXtkBETSewV5oFYDA_SmUerqsJhpvHsxkieL9AyGyPiYsYrBu6bvNKRcTq8EJ-fDkfnyn1adEQaYYTRrF7mhtIM_joUFFh6ajxTNWg5KwRTCKTh7d-x0QZ10Km7pq8Viide6k9xd8eY5R54" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-xl font-label-md text-label-md shadow-lg">Limited Edition</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Amber Occasional Chair</h3>
                      <span className="text-secondary font-headline-sm text-headline-sm">₹175,000</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Ergonomically sculpted armchair with high-density foam and hand-stitched details. Perfect for reading nooks.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#BF360C] border border-outline-variant shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#37474F] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Walnut Executive Desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMPye7qbXqFtCRczD4SgSyWLWyru8sQ13a2p61jZGLzvGf1exSeA262zToi-WuJbOZ4jHHz2_PKFUGf2_gCp9kTqf_6Sdyjy0WN5hdtF17d0gwixl4dDqN4ObMxmc2nAl_ba3uN-j5XPIh8DQzEB19Mfjw8TIECJ_N4JwEyMToxYhKFtEW4awgk6PHfeLSZAVpFm4OLPORsUXX2LRJCKpS7l7JBuaa8mgTJP8f15Wfbod4GryCIwod16A5tdvRjlbKgBsm0Zq61z0" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Walnut Executive Desk</h3>
                      <span className="text-secondary font-headline-sm text-headline-sm">₹210,000</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">A masterpiece of functional art. Solid walnut with hidden cable management and soft-close drawers.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#4E342E] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 6 */}
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden product-card-shadow transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Minimalist Console" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXZHnBoi6YbdImZszPMHvIMfb0nDUecj-yqCqncNw3C6P2Jy8EPDOQBKzAk44MLbzqWxRh9B8oIDtQnuMj01PD2XSW84XT9-M-jXLegihFLN57KTOgsgqBWqqSm5XcTRQ1ACpA9qKps7o6RzHOVfqGrNmCxQG__FWf1XLRdp-cwDFrkYj4-x08AHd9cBp3yxbRMc8YC64GyLAuNfuA7FcS8dyFTzMA3ulw5XbrnzwFxnfG96n-Y8DmA80tNuO7WbK21LqDn9Nv4AI" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">Minimalist Console</h3>
                      <span className="text-secondary font-headline-sm text-headline-sm">₹85,000</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Industrial chic meets luxury. Slim profile perfect for hallways or as a media stand.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#1B1C1C] border border-outline-variant shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-[#D4C3BE] border border-outline-variant shadow-inner"></div>
                      </div>
                      <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-16 flex flex-col items-center gap-6">
                <button className="px-8 py-3 bg-white border-2 border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                  Load More Designs
                </button>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-outline hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md text-label-md">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container font-label-md text-label-md">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container font-label-md text-label-md">3</button>
                    <span className="text-outline-variant">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container font-label-md text-label-md">12</button>
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-outline hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
