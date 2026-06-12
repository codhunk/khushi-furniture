'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountUpStat from '@/components/CountUpStat';

export default function Home() {
  useEffect(() => {

    // Simple Fade-in Observer
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      (section as HTMLElement).style.opacity = '0';
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Luxurious living room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpY-oYlVjLtwq0Wf0-a1eMMhhNwpFpT1ozCGBz89LsD5xXXpdvxNub_SS72FHp15tVB45O18jF3nNeBqhRKYiielf6DepgBCV-KZaNLdKU8vKPFhdJC_N_FyR70Ql2mQoQnuOdu1hCwAtwtkdWs4c2zxItg0j21DlRqNor8WtrkL1DbmJLpKsO7CHTQ1sZFzSwU0iqVquOWGJY2h7W3x52NUzCkljbiyhnfb3esEFt0Sda7GGdWHNbp-gUlrmvDynDjW3sd7QZdiM" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-secondary text-on-secondary rounded-full font-label-md text-label-md mb-6 uppercase tracking-widest">Premium Craftsmanship</span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] text-white leading-tight mb-8">Crafting Elegance for Your Home</h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-lg">Discover the perfect blend of timeless heritage and modern functionality with our handcrafted furniture collections.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="bg-white text-primary px-10 py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2" href="/products">
                Explore Products
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="border-2 border-white/40 text-white px-10 py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* Slider Controls */}
        <div className="absolute bottom-10 right-gutter flex space-x-4">
          <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden premium-shadow">
                <img alt="Artisan at work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCntCquXUq0l2gdNR_rD6E87ePmxs7bNvR3CHVm-u_NTQXFlrKNmh9FM9UKtWczFBm0ao9WEUTsjGLw1YTAasG8-Gjb9OYBCauh4QU7eBZA5-W0YXxqqG7_TTAQyfF41U7GlN_IOpNh2ccsjIIe7jaigyldW7sSNgxcXf-N7mHClSwUIDHyL5cdP-jxQsp6QefW_92U2W4UqHEEyBezqA5AKbRuc8dimMWRwHe8wxE590CK54SQmf6icWGGTfSdQL5CkD4i7Gi-x1U" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-container p-8 rounded-xl shadow-xl hidden md:block">
                <CountUpStat
                  endValue={25}
                  suffix="+"
                  label="Years of Legacy"
                  labelClassName="text-on-primary-container font-label-md text-label-md"
                  valueClassName="text-secondary-fixed font-headline-md text-headline-md font-bold mb-1"
                />
              </div>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">Built on Trust, Perfected by Hand</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                At Khushi Furniture, we believe that every piece of furniture tells a story. For over two decades, our master craftsmen have been blending traditional techniques with contemporary design to create spaces that breathe luxury and comfort.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-secondary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Award-Winning Designs</h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">Recognized globally for our innovation in interior solutions and sustainable manufacturing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-secondary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Sustainable Materials</h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">We use ethically sourced teak, mahogany, and walnut wood for long-lasting durability.</p>
                  </div>
                </div>
              </div>
              <button className="border-b-2 border-primary text-primary font-bold py-2 hover:text-secondary hover:border-secondary transition-all">Learn More About Our Journey</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Bento Grid */}
      <section className="py-section-padding-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Explore Our Collections</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">From elegant wooden frames to sturdy designer gates, find the perfect woodwork for your home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            {/* Baju - Large Vertical */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl premium-shadow">
              <img alt="Baju Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUY-8150opGalQXmB5L0BH84MCY6iLeismh8cifpeBQyIk9NNhg5Egn8D3o_0gr5PQTHbUC3_9peH7XQoPTMNwGYzLt2rNCtATLhg3pkiYls9X1VoaM-JcIltk6ZFGkd9LnoOoSLGi-oJJ0A48UHKi_bSeFtPjv8YTkvaENeBh6otL-WXm_qH4P2B_yS6-FVQawD-5Sz3YLWQ7bbdGDZlTzXKeyRtzgaTampthZIqzIElwzyRPy1xm4Ejb-EXiEjK0ny1BaiTMeyY" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-headline-md text-headline-md mb-2">Wooden Frames (Baju)</h3>
                <p className="text-white/80 mb-4">Premium handcrafted window and door frames.</p>
                <a className="text-secondary-fixed font-bold flex items-center gap-2 group/btn" href="/products">View Models <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span></a>
              </div>
            </div>
            {/* Roshandan - Horizontal */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl premium-shadow">
              <img alt="Roshandan Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsWGXFohC20I5psmsVuHI-5l2M4DpDbaMaLV1HqRbNSbMMkoDQChpslvZTJzUzbldvVimhvwA0N4U8nZ91eDymgExczo9PEWcGy_GAvUpg3c-X7TiykSysP35zxBpzaUxBeaOcuaJG83defd49hA3ApIDTahV4iUwGGgJIjy3AnGIcWoqaPDR0iTmTLBVvgbYvujwmUVrUPz1Ar3rM8uPYk-9cFIbZT66preDSW0MXXjhy0Sikj2VAurYEFRRm4gSWhs4uspk2JjQ" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-headline-sm text-headline-sm mb-1">Ventilators (Roshandan)</h3>
                <a className="text-secondary-fixed font-bold flex items-center gap-2" href="/products">View Collection</a>
              </div>
            </div>
            {/* Jangla */}
            <div className="relative group overflow-hidden rounded-xl premium-shadow">
              <img alt="Jangla Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD-YntbvzxoWJEKFT9VmrtsaziQTYxU388PDfz_cn0rfGSa_lHeLGNbbESF-2iczvNAMCwrJU2i_nEC_GlE_Su3RLJo5gITiX98CpgI0Lo4o6JuoPYtFf6GsRbRT58oOSkaN3Vgb_H9TyAFGlAKFAkbsGeiuX6URcl878W9HEcdxO7gV7kyGJdeRDsjvEcyIY12JRY_vXY3jvMZmVy-Q1G5_howu0W03ZNSb068NpC0SnAHU78OjJ0phiUDrdIDH2vWbu2HhGGTp4" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold">Window Grills (Jangla)</h4>
              </div>
            </div>
            {/* Gates */}
            <div className="relative group overflow-hidden rounded-xl premium-shadow">
              <img alt="Gates Category" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkaptLOEteEm-P3tsPYTB3_V0U2omMB9wARQxRff4TIy3WEOzxRbLnhSndowD6JMPO1qiybuEspsYINkFPqX96RYkck2Vr2mU2JzyXm2nTChB80k_2DLp76KOXaUboKo1JDyR8L_zcKeIw-_sVIGLhMOxFR4JbFesXy5ELkpbdVmUhBs2JCFWZ0Ac-Qd6hNbzYiqj5r4T-BARa_Vjbpx0faIy__Z1krEDiRv2X4iEKJiqYdKwzap1yOifiRlBVV2g8B32oLi6KQIo" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold">Designer Gates</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-padding-desktop bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">The Khushi Difference</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">diamond</span>
                  <h4 className="font-bold text-primary mb-2">Premium Quality</h4>
                  <p className="text-on-surface-variant text-sm">We use Grade-A solid wood and imported fabrics for unmatched durability.</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">design_services</span>
                  <h4 className="font-bold text-primary mb-2">Custom Solutions</h4>
                  <p className="text-on-surface-variant text-sm">Your vision, our craft. Tailor-made designs that fit your space perfectly.</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">payments</span>
                  <h4 className="font-bold text-primary mb-2">Fair Pricing</h4>
                  <p className="text-on-surface-variant text-sm">Luxury made accessible through direct-to-consumer manufacturing.</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4">shapes</span>
                  <h4 className="font-bold text-primary mb-2">Timely Delivery</h4>
                  <p className="text-on-surface-variant text-sm">Professional logistics ensuring your pieces arrive safely and on time.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Luxury Chair" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7DCKj8xuxp5Q0vzCxU8x3Jko8f7tJUMflHFQCW-YqPJMRKetKjJV-rBYEvORMcHL1pMHAzwNEDRoxO_y6DZ6Ww_eOjD7by09WbZ1PjeJHBl3WMvPMXdMg0kkWPVi8Lum79LyP33mcn0y3oDVbciZwDPXSUgtqgEclfXgWeBw3mQ1YcB4LwGC6gwICzYPzlNeylNump3xIsz27XRaZp1wOEuiQIq-ktiP9Obxt9tast5gYIXequJPeJSoong1_F8G8q2VjftSVl1E" />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-section-padding-desktop bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Bestsellers</h2>
              <p className="text-on-surface-variant">Handpicked favorites from our latest catalog.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all" href="#">
              View All Products
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="group bg-surface rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img alt="Sada Baju" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjmAciO2pslN_b4ft1zk1_K2hYMi9pIx5iGROAXOleeXVVW4wOY3Dn3LkYhYNrcS3Pa51XT_sUjYH4jfYWvI4q0x15Q023TGsoYeOK9rBfX6ZRNn4757yPe6KYkhIsge9zVhDa5_3WBG37-zYxNAD6URmlyvl-FyTNapx_sLef87A8vO_O73X8EIpND8ISybDbdfy8OmT0mPCHM07tFDyCF9Ax-DkNTZMVJFdNPGAz6uZqKtvkh60r1u8F9H-BHfAzg232ZmkRkw" />
                <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold">Baju</div>
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Wooden Frame</p>
                <h4 className="text-primary font-bold text-lg mb-2">Sada Baju</h4>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-headline-sm text-headline-sm">₹1150</span>
                  <a href="/products" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="group bg-surface rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img alt="Mehrab Jangla" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9sbDhpv0uzFluk7IaE9hUb8gon14RMG9YeNbGCZw5RRX15j7h9ID_WYai87lAEtExjQmRT0c2hXvqfX0tt-P4l74NBWCfJLvGcsnakJ-o2aIHnmETIseVLKJ8TdydHFAlxlgOaLb5llMrzNJ6BrlYV1VpyTdSJlLMak8RAOKTMpekJLxb_2_wN_QYuJlPh1n8ag7jI4hf9qejnCFBg8--Is_4cEPcGdE-tsipdAvGP8TRK24_ErpZn6Epw7QHMMi1pVjJ7Zpn22E" />
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Window Grill</p>
                <h4 className="text-primary font-bold text-lg mb-2">Mehrab Jangla</h4>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-headline-sm text-headline-sm">₹2800</span>
                  <a href="/products" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="group bg-surface rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img alt="Maruti Roshandan Baju" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwYRaLQFlAdARaTs5kqb3UF8TakLrBgPjKBLswZokbyw7JAxG-t58EhqnwlYOF5fUVUqVkK5T8QyNTX3VpeKx5pcqtiBoImwtlopYS7nLalBesPcqJG-Q_L2voOLSa5BNqq321HUrKQ3AK65vvgasqHnlEncJ6Za-PU-D1ENiJB6UkuPLptCVUaOb6pKijyoB5CZUTdeROw4rqUAxX3Art7YCalQYESKcZ5zdMu3xDj0g7POAbfpHdZJqPHF941orJV66MnQ3VkzE" />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold">Ventilator</div>
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Ventilator Frame</p>
                <h4 className="text-primary font-bold text-lg mb-2">Maruti Roshandan Baju</h4>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-headline-sm text-headline-sm">₹1600</span>
                  <a href="/products" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Product Card 4 */}
            <div className="group bg-surface rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img alt="Mehrab Half Gate" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnmq6d8CLzFktr1zTxJyQw8wfSrQNp4n4vcfiqW9HGR15Y-p3KBoFlP5ff74fsuwLHXHR3NrszyS_Mn6Vu1I8rQnrjLMwjQzBrwX6BXA3b7csyWUdOqYBpwxDMFdZ6vv83m5RnhRJ0ywAkxTZFaeIMg53Cn0uLJCtQlykuyGUTziH2kHEs6waLe4Hk5CFTQRyRkSgSAEfWrfwJBpVwl8FzuaWxnJn6sVUneoeQGoDHH9XKG0oeCwkPDqGutyFL-8CC4DrUR0Ju82Q" />
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Gates</p>
                <h4 className="text-primary font-bold text-lg mb-2">Mehrab Half Gate</h4>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-headline-sm text-headline-sm">₹7000</span>
                  <a href="/products" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">factory</span>
              </div>
              <h3 className="font-medium text-headline text-primary mb-4">Precision Manufacturing</h3>
              <p className="text-on-surface-variant">Our state-of-the-art facility combines robotic precision with artisan hand-finishing.</p>
            </div>
            <div className="text-center p-8 border-x border-outline-variant/30">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">edit_square</span>
              </div>
              <h3 className="font-medium text-headline text-primary mb-4">Custom Design</h3>
              <p className="text-on-surface-variant">Work with our designers to create bespoke furniture tailored to your exact measurements.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">chair_alt</span>
              </div>
              <h3 className="font-medium text-headline text-primary mb-4">Interior Solutions</h3>
              <p className="text-on-surface-variant">Complete home transformation from concept drawings to final installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 wood-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <CountUpStat endValue={15} suffix="k+" label="Happy Customers" />
            <CountUpStat endValue={250} suffix="k+" label="Products Delivered" />
            <CountUpStat endValue={25} suffix="+" label="Years of Experience" />
            <CountUpStat endValue={50} suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary/40 text-5xl mb-4">format_quote</span>
              <p className="font-body-md text-body-md text-on-surface-variant italic mb-8 leading-relaxed">"The attention to detail in their custom wooden gates is incredible. It's not just woodwork; it's a piece of art that transformed our home entirely."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="Sarah J." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMcYvbI742L-g7W8TfuUla357yQqsKUh0wJFu4fAtwT9V5gbXsaRbTyMSptv0cVxtuMAi8vzDvPKwO-vWTNX_qj1k5qSBID97d5FyaBf_Xy4lSQ_VNbbo9zxTseXQWZP8JdRCnnctopoL5qbFAMKafctPw9KvL4k1wV0GPai_vLqxHyky-ymrmECz4-n-u0d-u-GQAnukqGSnqdglRSgbZgYh9Oxp8hn-YgZnGBY32Rla8iYl5HSCaQLwt6xAsbsK7sUM9jSqma2o" />
                </div>
                <div>
                  <h5 className="font-bold text-primary">Ravi Jaiswal</h5>
                  <p className="text-xs text-on-surface-variant">Interior Designer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary/40 text-5xl mb-4">format_quote</span>
              <p className="font-body-md text-body-md text-on-surface-variant italic mb-8 leading-relaxed">"We ordered a complete dining set and the quality of wood is unmatched. The delivery team was professional and handled everything with extreme care."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="David M." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZCOVgz6Nvxqfxe_nrHnVJd8bJbNEGROz1WseOnn5SaU_Q8jhpoA-iQ71ULk5LnwF1Jo3GZOc-vKbzpuLclXZsXPuK890NQgfVVqZKaJPhBoBs1E5UJbpiWparvVgfO4LFMSloCqs7V388YAJch71WPX2y66qypwUwqoxxGxu8B282Lg6BZ4iD0lxqcsVJ5NtCdi8oJ8isU5-Js06FopXUV5AbEk3YK0hjm75-UR1SKM7idfyJrIDh5MFYfZevl_cR10sjDsPwcyU" />
                </div>
                <div>
                  <h5 className="font-bold text-primary">Ansh Goyal</h5>
                  <p className="text-xs text-on-surface-variant">Homeowner, Chicago</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary/40 text-5xl mb-4">format_quote</span>
              <p className="font-body-md text-body-md text-on-surface-variant italic mb-8 leading-relaxed">"Khushi's design consultation was the best part. They really understood my vision for a modern yet cozy home office and delivered exactly that."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="Emily R." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCibr8mjRalGfqqBAuwMdL8ZUY6dQsbwYQARMqzYKr8fzAXK8w4hroedIQr97ywt_7cL001kVpbzZ7EqpUmOcbBf6WqmO8vnggPMMBd_Dy4H-M1uRGRzUxaeIJGhYeEXHWcq8jxO0H4-FMVFM2tIpIIWNKXvRRoXAFMLLD5b3P4Hg7kLlJp3n5h02tT3cEfu0nNvo1J9iLmNI9jA64cH01D6KKJ8wVzkGgMe3pJ9jLMAqFDscQaJ9dVGzkjL10rw_Hr_2HoHd8iL1o" />
                </div>
                <div>
                  <h5 className="font-bold text-primary">Abhinav Singh</h5>
                  <p className="text-xs text-on-surface-variant">CEO, Tech Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="relative wood-gradient rounded-3xl overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg text-white mb-6">Transform Your Space</h2>
              <p className="text-primary-fixed font-body-lg text-body-lg mb-10 opacity-90">Experience the perfect harmony of aesthetics and comfort. Let our experts help you design your dream interior today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="/contact" className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-secondary-fixed transition-all hover:scale-105 active:scale-95 inline-block">Request a Free Quote</a>
                <a href="/contact" className="border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all inline-block">Schedule Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
