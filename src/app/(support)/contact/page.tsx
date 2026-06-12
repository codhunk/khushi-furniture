'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    // Reveal on scroll logic
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
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Khushi Furniture - Handcrafted Excellence</title>
      </Head>
      
      <div className="bg-background text-on-background selection:bg-secondary-fixed-dim">
        <Navbar />

        <main className="pt-32">
          {/* Hero Section */}
          <section className="max-w-container-max mx-auto px-gutter mb-section-padding-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Get In Touch</span>
                <h1 className="font-display-lg text-display-lg text-primary mb-6">Let's craft your dream space together.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Our master craftsmen and design consultants are ready to assist you in creating timeless wooden masterpieces.</p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl wood-shadow">
                <img alt="Interior Design Studio" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_phQEB7qR9uU-FSv2wK1fy0pKQQQCGRu0DX_YyskPLT1UCa0mxfqPt1wuxhEK37lCxk8KuAC9926czH2YIftN4dfhTNSqUk6QsE2g9zgwMx8hyZakyGk9HPshmAgWkxe0Wm_Yu9VUpMo3jMiiyto9Mu-i-b2SAZA1Z6CELeqxDaWe_N77OZnxpA_wmISm8MnGiscMdd4zf7hlmUaNmCuhrfekJvmzX_FxyfS4EhAMCSMx-LcCyZpq0SBwCnexRfGT-3oDPo2zmcQ" />
              </div>
            </div>
          </section>

          {/* Contact & Form Section */}
          <section className="bg-surface-container-low py-section-padding-desktop">
            <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Contact Details */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Our Atelier</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">Post Pawai, Basti Chak Gulara,<br/>Uttar Pradesh 276288</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Call Us</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">+91 22 2589 1234<br/>+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Email Address</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">concierge@khushifurniture.com<br/>info@khushifurniture.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Business Hours</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">Mon – Sat: 10:00 AM – 8:00 PM<br/>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-outline-variant/30">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    <a className="w-10 h-10 border border-outline flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>face_nod</span>
                    </a>
                    <a className="w-10 h-10 border border-outline flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </a>
                    <a className="w-10 h-10 border border-outline flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7 bg-surface p-10 rounded-xl wood-shadow">
                <h2 className="font-headline-md text-headline-md text-primary mb-8">Send an Inquiry</h2>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface-variant">Your Name</label>
                      <input required className="w-full bg-surface-container-low border-b border-outline-variant p-3 bottom-border-focus transition-all text-body-md font-body-md" placeholder="Abhinav" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                      <input required className="w-full bg-surface-container-low border-b border-outline-variant p-3 bottom-border-focus transition-all text-body-md font-body-md" placeholder="+91 00000 00000" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
                    <input required className="w-full bg-surface-container-low border-b border-outline-variant p-3 bottom-border-focus transition-all text-body-md font-body-md" placeholder="abhinav@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Product Requirement</label>
                    <select className="w-full bg-surface-container-low border-b border-outline-variant p-3 bottom-border-focus transition-all text-body-md font-body-md appearance-none">
                      <option>Custom Sofa Sets</option>
                      <option>Dining Tables</option>
                      <option>Bedroom Collections</option>
                      <option>Office Furniture</option>
                      <option>Home Decor Accents</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Your Message</label>
                    <textarea required className="w-full bg-surface-container-low border-b border-outline-variant p-3 bottom-border-focus transition-all text-body-md font-body-md" placeholder="Tell us about your project requirements..." rows={4}></textarea>
                  </div>
                  <button 
                    disabled={formStatus !== 'idle'} 
                    className={`w-full font-label-md text-label-md py-4 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg ${formStatus === 'sent' ? 'bg-tertiary text-on-tertiary' : 'bg-primary text-on-primary hover:bg-primary-container'}`} 
                    type="submit"
                  >
                    {formStatus === 'idle' && (
                      <>
                        Submit Inquiry
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span> Sending...
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <span className="material-symbols-outlined">check_circle</span> Sent Successfully
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-full h-[500px] relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28650.22137647272!2d82.69869133476564!3d26.15508490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990591ee90948e5%3A0x3475cf7227f62716!2sM%2FS%20KHUSHI%20FURNITURE%20HOUSE!5e0!3m2!1sen!2sin!4v1781241245655!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </main>

        <Footer />

        {/* Old WhatsApp button removed to use global floating button */}
      </div>
    </>
  );
}
