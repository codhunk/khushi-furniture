'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PRODUCT_DATA } from '@/data/products';

export default function Products() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCategory(e.target.value);
    }
  };

  const filteredProducts = PRODUCT_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.size.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Product Price List | Khushi Furniture</title>
      </Head>

      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />

        <main className="pt-24 pb-section-padding-desktop max-w-container-max mx-auto px-gutter">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">Product Price List</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
              Explore our complete range of handcrafted wooden frames, ventilators, grills, and gates. All dimensions and prices are listed for your convenience.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-gutter">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-outline-variant pb-2">Category</h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      checked={selectedCategory === 'All'}
                      className="form-radio rounded-full text-primary focus:ring-primary border-outline" 
                      name="category"
                      type="radio" 
                      onChange={handleFilterChange} 
                      value="All" 
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">All Products</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      checked={selectedCategory === 'Baju'}
                      className="form-radio rounded-full text-primary focus:ring-primary border-outline" 
                      name="category"
                      type="radio" 
                      onChange={handleFilterChange} 
                      value="Baju" 
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Baju (Frames)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      checked={selectedCategory === 'Roshandan'}
                      className="form-radio rounded-full text-primary focus:ring-primary border-outline" 
                      name="category"
                      type="radio" 
                      onChange={handleFilterChange} 
                      value="Roshandan" 
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Roshandan (Ventilators)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      checked={selectedCategory === 'Jangla'}
                      className="form-radio rounded-full text-primary focus:ring-primary border-outline" 
                      name="category"
                      type="radio" 
                      onChange={handleFilterChange} 
                      value="Jangla" 
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Jangla (Grills)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      checked={selectedCategory === 'Gates'}
                      className="form-radio rounded-full text-primary focus:ring-primary border-outline" 
                      name="category"
                      type="radio" 
                      onChange={handleFilterChange} 
                      value="Gates" 
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Gates</span>
                  </label>
                </div>
              </div>

              <div className="bg-primary-container p-6 rounded-xl text-on-primary">
                <h4 className="font-headline-sm text-headline-sm mb-2">Custom Dimensions?</h4>
                <p className="font-body-md text-body-md mb-4 opacity-90">Need a size not listed here? We craft bespoke items tailored to your specific measurements.</p>
                <a href="/contact" className="inline-block text-center w-full py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:brightness-110 transition-all">Request a Quote</a>
              </div>
            </aside>

            {/* Product Table */}
            <div className="flex-1">
              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className={`relative flex-1 w-full rounded-t-lg transition-all ${isSearchFocused ? 'shadow-md' : ''}`}>
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                  <input 
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline-variant font-body-md rounded-t-lg transition-all" 
                    placeholder="Search products by name or size..." 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="p-4 font-label-lg text-label-lg text-on-surface">Product Name</th>
                        <th className="p-4 font-label-lg text-label-lg text-on-surface">Category</th>
                        <th className="p-4 font-label-lg text-label-lg text-on-surface">Size</th>
                        <th className="p-4 font-label-lg text-label-lg text-on-surface text-right">Simple Grill (₹)</th>
                        <th className="p-4 font-label-lg text-label-lg text-on-surface text-right">Designer Grill (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                          <tr key={product.id} className={`border-b border-outline-variant/30 hover:bg-surface-container transition-colors ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-lowest'}`}>
                            <td className="p-4 font-body-md text-body-md text-on-surface font-medium">{product.name}</td>
                            <td className="p-4 font-body-sm text-body-sm text-on-surface-variant">
                              <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs">
                                {product.category}
                              </span>
                            </td>
                            <td className="p-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">{product.size}</td>
                            <td className="p-4 font-body-md text-body-md text-on-surface text-right">
                              {product.simplePrice ? `₹${product.simplePrice}` : <a href="/contact" className="text-secondary hover:underline text-sm italic">Contact Us</a>}
                            </td>
                            <td className="p-4 font-body-md text-body-md text-on-surface text-right">
                              {product.designerPrice ? `₹${product.designerPrice}` : <a href="/contact" className="text-secondary hover:underline text-sm italic">Contact Us</a>}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-on-surface-variant">
                            No products found matching your search criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
