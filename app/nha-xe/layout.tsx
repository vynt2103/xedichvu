import { ReactNode } from 'react';

export default function OperatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Operator pages run on subdomain xedichvu.newdanang.vn
  // HideHeaderFooter component handles hiding common elements
  return <>{children}</>;
}

