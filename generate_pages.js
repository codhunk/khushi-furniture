const fs = require('fs');
const path = require('path');

const pages = [
  'services', 'gallery', 'careers', 'press', 'sustainability',
  'privacy-policy', 'terms-of-service', 'shipping-info', 'returns'
];

const template = (componentName, title) => `'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ${componentName}Page() {
  return (
    <>
      <Head>
        <title>${title} | Khushi Furniture</title>
      </Head>
      
      <div className="bg-background text-on-background min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-32 pb-section-padding-desktop max-w-container-max mx-auto px-gutter w-full">
          <h1 className="font-display-lg text-display-lg text-primary mb-6 capitalize">
            ${title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            This page is currently under construction. Please check back later.
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
`;

const baseDir = path.join(process.cwd(), 'src', 'app');

pages.forEach(page => {
  const dirPath = path.join(baseDir, page);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const titleParts = page.split('-');
  const title = titleParts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const componentName = titleParts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(componentName, title));
});

console.log('Pages generated successfully!');
