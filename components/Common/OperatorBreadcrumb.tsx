import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface OperatorBreadcrumbProps {
  operatorName: string;
  operatorSlug?: string;
}

export default function OperatorBreadcrumb({ operatorName, operatorSlug }: OperatorBreadcrumbProps) {
  return (
    <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-body-color-dark dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            <Home size={14} className="mr-1 flex-shrink-0" />
            <span className="hidden sm:inline">NEWDANANG</span>
            <span className="sm:hidden">NDN</span>
          </Link>
        </li>
        <li className="flex-shrink-0">
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li className="flex items-center">
          <Link
            href="/danh-sach-nha-xe"
            className="text-gray-600 hover:text-blue-600 dark:text-body-color-dark dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Nhà xe
          </Link>
        </li>
        <li className="flex-shrink-0">
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li className="text-gray-900 dark:text-white font-medium truncate max-w-[150px] sm:max-w-xs" aria-current="page">
          {operatorName}
        </li>
      </ol>
    </nav>
  );
}

