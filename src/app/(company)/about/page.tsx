'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  useEffect(() => {

    // Intersection Observer for animation reveals
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us | Khushi Furniture</title>
      </Head>

      <div className="bg-background text-on-background font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />

        <main className="pt-24 overflow-hidden">
          {/* Hero Section: The Soul of Craft */}
          <section className="relative h-[716px] flex items-center justify-center bg-surface-container overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMx7sDprh81ehgyBj1edsKNEfAkiUkZwziX1ptCv5LRmJSXXvMDtBu7OYca5QdIcAPTVL1Fbrxx9YlQ3iDTwLZ_NT6DN4ajO8G1IpAh7abkwturh_L4KCKqU2knj5yEHq4sV80bQT5axCqeDN_2ndqxG4kc3sJnqLIcS2dx3FDBxfUa3FvvBxIxZQ4BtQXrgno5wZYb1PpVZ5m7fZrmu2Z0KigQRgrqSt7Au2HEgBA_g0Q3PjFHUuVgRCEOAY8LAWBYKdfsDx2v34" alt="High-end luxury furniture showroom" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
            </div>
            <div className="relative z-10 text-center max-w-3xl px-gutter">
              <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">Since 1994</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Artistry in Every Grain</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From a small workshop to a premier destination for handcrafted luxury, we define space through the language of fine wood and timeless design.</p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-section-padding-desktop max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
                    <h2 className="font-headline-md text-headline-md text-primary">Our Vision</h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary/20 pl-6 leading-relaxed">
                    To become the global benchmark for sustainable luxury furniture, where heritage craftsmanship meets contemporary lifestyle, enriching homes with pieces that tell a story of elegance for generations.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">auto_awesome</span>
                    <h2 className="font-headline-md text-headline-md text-primary">Our Mission</h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-secondary/20 pl-6 leading-relaxed">
                    To meticulously handcraft exceptional furniture using ethical materials and traditional techniques, ensuring every detail reflects our commitment to uncompromising quality and aesthetic excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-premium">
                  <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQBUGN1oiKJnWcvQBFTKNdqGqY3QK6Jl93R-Wg0JUfmNU1IRj1PwFsJDEnMruQSd_tKYQ_Y9gNJDQHJ_9riyGojCsU91yv3GV-NsgaB7fECwhphHnFm28wZfOu4BnTugVeIbyWc1ocVMCkpmEnO9C66HgYNNbRQLVFzmf9LvwxKhuGsgvtWMuR5lkcEv0Muz2Us-_l1IptwEhO-Cc3XdwleUNBGzXm8w1nfi5hTvYrEvkI9hy43jMsIbRx39CalKMqC94jyrrFuQk" alt="Artisan hands polishing walnut wood" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block rounded-lg shadow-xl">
                  <div className="text-on-secondary font-display-lg text-4xl mb-1">30+</div>
                  <div className="text-on-secondary/80 font-label-md text-sm uppercase tracking-widest">Years of Craft</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Journey Timeline */}
          <section className="py-section-padding-desktop bg-surface-container-low">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="text-center mb-20">
                <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Journey</h2>
                <div className="w-16 h-1 bg-secondary mx-auto"></div>
              </div>
              <div className="relative space-y-24">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/40 hidden md:block"></div>
                {/* Milestone 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 relative">
                  <div className="md:w-1/2 md:text-right">
                    <span className="font-display-lg text-primary/10 text-6xl block mb-2">1994</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">The First Shave</h3>
                    <p className="text-on-surface-variant font-body-md max-w-md md:ml-auto">Khushi Furniture began in a humble workshop with just two master craftsmen and a passion for solid teak wood.</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-secondary/10 z-10 hidden md:block"></div>
                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-premium">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDhNPXGxdeF_m7AY8C9oqs7rfHYRge_nG7WPF4hOclnDIgC-iwt5cRhQcGHTJucCX266IOsrqbI_1Z3QSUTFnaTPTW_EWLZJqrm9Y-uOXz2b3_3BB-fbiM43vKTrQp2XvVfDsIGBpWQ7l0b65sXIQwtgmu9iQk2A6J6NEmqzW_Mj8raZRYmBeKvagSdaXOPibR6ZNbhmKaRSw_BoSTRaPEDx84uvd2xj3qAc3syBb5Up7x2vTiWSRqSMyPH4bilyAwlDZb1hz3Zx0" alt="Vintage traditional woodshop" />
                    </div>
                  </div>
                </div>
                {/* Milestone 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 relative">
                  <div className="md:w-1/2 md:text-left">
                    <span className="font-display-lg text-primary/10 text-6xl block mb-2">2008</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Modern Expansion</h3>
                    <p className="text-on-surface-variant font-body-md max-w-md">We opened our first luxury showroom, bridging traditional woodworking with contemporary design aesthetics.</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-secondary/10 z-10 hidden md:block"></div>
                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-premium">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8jjL3uiA9_dPqlM7nPU7TwTH3IKtZlJOzB7EeO_tsJLJ_75wIkrS193Ah2x3iIHloo7S0jWSi6PQjy3i7sUa6ojjM5gVcQiflb70imyjkqbz3mPl2DqzhLoYzAoDIVvMQ1C6fCeDb5PNmlrlN6iTHEzaO6FLRgOEzhbU9VuNb3_r8MFEJwmD8zr2V_fT6XQMHz9d83deVk02OgA33EB0rIF925_rzvkc5y0KXjw_tvgzlIikIBkM7jE7Su8_GvQbjlD61KaM0Gk8" alt="Modern high-end furniture boutique" />
                    </div>
                  </div>
                </div>
                {/* Milestone 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12 relative">
                  <div className="md:w-1/2 md:text-right">
                    <span className="font-display-lg text-primary/10 text-6xl block mb-2">2024</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Premium Global Status</h3>
                    <p className="text-on-surface-variant font-body-md max-w-md md:ml-auto">Today, Khushi Furniture stands as a symbol of 'Modern Heritage,' serving elite residences across the globe.</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary ring-8 ring-secondary/10 z-10 hidden md:block"></div>
                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-premium">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwIH-xSUYzO9id6gNwfP3LAwl4mZG9AVC0EOtChQhbjDD58-HGtryZIZqmhqXPNCCfykqYsrPVnbP4LV1XXDng14QrMR5GGS8uLZ8f7qD-hjk8FGEE73uoSm6NpX6qjIjyu2HWmQTShZUhbjDZJiXSkDVlXy0QbnSZs10ib6urJz616kPthJZckMmG7RQOFF3czVp3Q-foU7--Da0ZDO2B9qSSPogwYY1Ib2BhijTkBr3Nt2FnxWJEikLrnTJ6tPuJsiGVImaG2-g" alt="Stunning architectural shot of penthouse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Manufacturing Process */}
          <section className="py-section-padding-desktop">
            <div className="max-w-container-max mx-auto px-gutter text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-primary">Visual Steps of Craftsmanship</h2>
              <p className="text-on-surface-variant mt-4">Witness the transformation of raw timber into timeless art.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-container-max mx-auto px-gutter">
              <div className="group cursor-default">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJJi9HAyq1gf8AwMefac35tqvV_hi1YTmw3OPuJGirIn8ecJzbki4PGgVk_I89o2vi0PIJrM0bWN-VYOr78_YG4gxiPNF66D5Ab1E0s7OOVmgR8ZrMKHC0jFnCZUwKhwPvqTqDhyWqI9B3lu3W8a3gukvDVWFBpXGFhN474eQ0mNIoXsA03AFWe83gevlhzaULN10vEJfrw7SQ-Ih68wqGEAGRXlvq7kCr_I7aDNL7Y6ewVvJQaBb0MzCc0AI_9yrhQ5vgyhA0y4A" alt="Raw timber planks" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-on-primary font-label-md text-lg">Selection</span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-primary mb-2">01. Material Selection</h4>
                <p className="text-on-surface-variant text-sm">We handpick every plank for grain consistency and durability.</p>
              </div>
              <div className="group cursor-default">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWUKp6-MfQTDElKQ6SXLRRhmx5o5C9kckTahBCO4zw0DJFU_qySy3qdnBuCYBqcOq3YPJgg-K82ZM3_ImxBMzyc7k0o4ho2GsUtrq7JZ_6QM2ckr9o3tyM7MEcbVjQvclmau48MClaadfRVcUVNtUFf4RlXepajJuHEO53IY_esPb9_VfaUm00X-A8Ks2oVIRnvpqp_BgTvZPKxdhjY3q8YsYGndq7Apwda-2xH24uLQQtpQKyha-_u424FZOWuJyrbm9RFGkdIxE" alt="Modern woodworking machine" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-on-primary font-label-md text-lg">Shaping</span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-primary mb-2">02. Precision Cutting</h4>
                <p className="text-on-surface-variant text-sm">Our artisans combine CNC precision with hand-guided carving.</p>
              </div>
              <div className="group cursor-default">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxG0bb8oxtYZaH43VT-vdZMPYaddCYCbMZA3kmOZgT8NziDFONYuvcSrIGfCPqDCcxO73BpV4hv1ujS4GJyc5B-Orv13tkUsFTyDhlJpWroY8rE7juiQnZsk4gTLSxBHvPW2-HBAyAeIYNCqKm0SQ7Bs8b4EKRCvSGdXEuEKejrtFqfgRxU3qNXRsxWFKEbs1pHNKTRwjh0T6hI2MaQgQoNMQN_rYw8SGUFICe5_RNtcmRiNhbJLbYsM7qteYZMkvXLei7nF63xbE" alt="Artisan assembling joinery" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-on-primary font-label-md text-lg">Assembly</span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-primary mb-2">03. Master Assembly</h4>
                <p className="text-on-surface-variant text-sm">Classic joinery techniques ensure lifetimes of structural integrity.</p>
              </div>
              <div className="group cursor-default">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohdxbbiOiOscqIiGRkRKduGyYJHhAh6eUJ_dM-oVbMiy_vuWpkOPreIh_aY8nBkq_DMfC7CDbtKPd7zjxmnOw5p10C4zrsheOqtRuC6Y-9tNgxgM8bj00ljlfwNCnS2HDu_UeOzCRq4IlQqTlAsi2h0RFk8k21o_teCM0sQEz3mKwS6KEpxoarmt5XIjwAvWYAteSYDsFC2bU-SSCr78kQCHbdwGGWT4RZPH5LqEx_Z5Li5GHsgjXB09Dp8uuMs_zSgQqDrZbEj0" alt="Final finished piece" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-on-primary font-label-md text-lg">Finishing</span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-primary mb-2">04. Signature Finish</h4>
                <p className="text-on-surface-variant text-sm">Seven layers of hand-rubbed oil and wax bring the soul out of wood.</p>
              </div>
            </div>
          </section>

          {/* Infrastructure & Team: Bento Grid Layout */}
          <section className="py-section-padding-desktop bg-surface-container-highest">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary">Our Home, Our Hands</h2>
                  <p className="text-on-surface-variant mt-2">A 50,000 sq. ft. sanctuary of creativity and innovation.</p>
                </div>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-on-primary transition-all duration-300">Tour the Facility</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group shadow-premium">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4RhGg02jMsCWka-HJTcV1NA6MPviJzeFvy6_b6_R3r29x8h7lN2BqNnwPkgxT8z5XRFSR2TGIftsWlAqoEzlBCyJ21O3nT46DJ0YgXdKM1RkPal2ZbsFZrvBhw2yOJaai_h_NkCvcrPk4etjL0H9w718BFEadlXIz5YI8Gn9ENcfPAHu1aSnMrYtg1uKMsn_WYu58WfkS0NwlYixM_AmMc0brV1PWoZkYaFYFJFXmjmTUGERLs9YyV1P__qwlAnyyRcexR_UX9JI" alt="Master Workshop" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
                    <h4 className="text-on-primary font-headline-sm">The Master Workshop</h4>
                  </div>
                </div>
                <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group shadow-premium">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-_opseR79FZarBeZm1XBJFo6lxGJTyitolDrKdYYipwcDOoMTV2S3KzBP0Y1CDRbGYCwmwtO2yI1HqjjV0vdIspPFV7wxovvKvkCfwu574-jwbGUvgKK1wOX23tk0ewUBSkecsRA9TF6U2TUIYjT-ZEV4QAoe4ELPHYN1wIMOS4BAVbO8kwPPmaVlfK9x8kgTlTd4wobn61fiC6M-gsxHHlksaz751Qb_GwdQ8DoXzJ_7DE9eOb7W_xwO2NrfoMSbvwFhyOsYGM" alt="Design Studio" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="text-on-primary font-label-md text-sm">Design Studio</p>
                  </div>
                </div>
                <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group shadow-premium">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4gdehlsKb1AGEMNKVF6lmW4uwlA7AMKah-hVw_Y5XGV5VWn9isGjiOTB4dZ1GU4ASRz2vVBngJ4TJJnn9Vkzixv1KLUHniyA4cqHu6cbdJwufDx1Rp2m03gnzNuLGkQue0NEdCmEh5OCjf6ixdi8WNGd8vgFyoMIWbFSSXC32PLoUMklY1XDwde1DSdMBUFHv3PvVmhrCa6EuJzYnzgVyybgtNolRvNmt-1d2ZgWgTDYSZvcdeE3N0rglHo3c7cSxUcUvQd1nSc" alt="Artisan Spotlight" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="text-on-primary font-label-md text-sm">Artisan Spotlight</p>
                  </div>
                </div>
                <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl group shadow-premium">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBttnEb7j7qPzjQjAumx2KZHyKe7kJWPWjYTYYQXOzhdtckwryNoClBUhzlwdIU4agSAj55rAjM0vnfhfELkfR0_FdMERIUt8sOkupyesNuLxoQvl_k6pmvzJfvFsLWn7bIaFj5TwgrBoao6vk9a8pXhj38VoVOYT8sRHD3iCyvyOkL3qmaQpkMlJEXJ3p_f_6EvZB3zv0-RnIne-8ZAWfmHyxYl7GosSlD23oSmYnXA6kKCJiGnTf1N0AsZByTUlF2JYABL3Xw8" alt="Material Innovation Lab" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent">
                    <h4 className="text-on-primary font-label-md">Material Innovation Lab</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Values */}
          <section className="py-section-padding-desktop">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="text-center mb-16">
                <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Core Values</h2>
                <p className="text-on-surface-variant">The principles that guide every cut and every choice.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-10 border border-outline-variant/30 rounded-xl bg-surface hover:shadow-premium transition-all duration-500 group">
                  <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  </div>
                  <h3 className="font-headline-sm text-primary mb-4">Integrity</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Honesty in our materials and transparency in our process. We source only from sustainable forests and treat every partner with radical respect.</p>
                </div>
                <div className="p-10 border border-outline-variant/30 rounded-xl bg-surface hover:shadow-premium transition-all duration-500 group">
                  <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                  </div>
                  <h3 className="font-headline-sm text-primary mb-4">Quality</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Excellence is not an act, but a habit. Every piece undergoes a 42-point inspection to ensure it exceeds international luxury standards.</p>
                </div>
                <div className="p-10 border border-outline-variant/30 rounded-xl bg-surface hover:shadow-premium transition-all duration-500 group">
                  <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                  </div>
                  <h3 className="font-headline-sm text-primary mb-4">Innovation</h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Honoring the past while designing for the future. We integrate smart technology and ergonomic research into classic wooden forms.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
