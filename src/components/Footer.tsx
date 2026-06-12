import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full mt-auto py-section-padding-desktop border-t border-outline-variant transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-gutter max-w-container-max mx-auto px-gutter">
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo-tr.png" alt="Khushi Furniture Logo" className="h-16 w-16 object-cover rounded-lg" />
            <span className="font-headline-md text-[24px] font-bold text-primary dark:text-primary/80">
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
          <h4 className="font-medium text-headline-sm text-primary">Collections</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/products">Wooden Frames (Baju)</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/products">Ventilators (Roshandan)</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/products">Window Grills (Jangla)</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/products">Designer Gates</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-headline-sm text-primary">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/about">About Us</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/careers">Careers</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/press">Press Kit</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/sustainability">Sustainability</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-headline-sm text-primary">Support</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/terms-of-service">Terms of Service</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/shipping-info">Shipping Info</Link></li>
            <li><Link className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary transition-colors font-body-md relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="/returns">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-on-surface-variant dark:text-on-tertiary-fixed-variant font-label-md text-label-md">
          © 2024 Khushi Furniture. All rights reserved. Handcrafted Excellence.
        </p>
        <p className="text-on-surface-variant dark:text-on-tertiary-fixed-variant font-label-md text-label-md">
          Managed & Developed by <a href="https://webduality.in" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-secondary transition-colors relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Webduality</a>
        </p>
      </div>
    </footer>
  );
}
