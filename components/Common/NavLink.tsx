'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import { ReactNode, MouseEvent } from 'react';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function NavLink({ 
  href, 
  children, 
  className, 
  target,
  rel,
  ...props 
}: NavLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't handle external links or links with target="_blank"
    if (target === '_blank' || typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
      return;
    }

    e.preventDefault();
    NProgress.start();
    
    router.push(href.toString());
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}

