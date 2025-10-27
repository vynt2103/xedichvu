'use client';

import { useEffect } from 'react';

export default function HideHeaderFooter() {
  useEffect(() => {
    // Hide header, footer, and scroll to top button
    const hideElements = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const scrollToTop = document.querySelector('[class*="ScrollToTop"]');
      
      if (header) header.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (scrollToTop) (scrollToTop as HTMLElement).style.display = 'none';
    };

    hideElements();

    return () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const scrollToTop = document.querySelector('[class*="ScrollToTop"]');
      
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (scrollToTop) (scrollToTop as HTMLElement).style.display = '';
    };
  }, []);

  return null;
}

