import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full mt-auto py-section-padding-desktop border-t border-outline-variant transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-gutter max-w-container-max mx-auto px-gutter">
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo-tr.png" alt="Khushi Furniture Logo" className="h-12 w-12 object-cover rounded-lg shadow-sm" />
            <span className="font-headline-md text-[28px] font-bold text-primary dark:text-primary-fixed-dim">
              Khushi Furniture
            </span>
          </div>
          <p className="text-on-surface-variant dark:text-on-tertiary-fixed-variant font-body-md max-w-md">
            Creating the heirlooms of tomorrow with the passion of yesterday. Handcrafted excellence since 1994.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#" aria-label="Share">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#" aria-label="Email">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline-sm text-headline-sm text-primary">Collections</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/products">Living Room</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/products">Dining Set</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/products">Bedroom Luxury</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/products">Office Heritage</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline-sm text-headline-sm text-primary">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-secondary font-medium font-body-md" href="/about">About Us</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/careers">Careers</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/press">Press Kit</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/sustainability">Sustainability</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline-sm text-headline-sm text-primary">Support</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/terms-of-service">Terms of Service</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/shipping-info">Shipping Info</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md" href="/returns">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant dark:text-on-tertiary-fixed-variant font-label-md text-label-md">
          © 2024 Khushi Furniture. All rights reserved. Handcrafted Excellence.
        </p>
      </div>
    </footer>
  );
}
