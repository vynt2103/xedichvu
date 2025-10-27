import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface OperatorBreadcrumbProps {
  operatorName: string;
  operatorSlug?: string;
}

export default function OperatorBreadcrumb({ operatorName, operatorSlug }: OperatorBreadcrumbProps) {
  return (
    <nav className="container mx-auto px-4 md:px-6 py-4 md:py-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-body-color-dark dark:hover:text-blue-400 transition-colors"
          >
            <Home size={16} className="mr-1" />
            Trang chủ
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-gray-400" />
        </li>
        <li>
          <Link
            href="/operators"
            className="text-gray-600 hover:text-blue-600 dark:text-body-color-dark dark:hover:text-blue-400 transition-colors"
          >
            Danh sách nhà xe
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-gray-400" />
        </li>
        <li className="text-gray-900 dark:text-white font-medium" aria-current="page">
          {operatorName}
        </li>
      </ol>
    </nav>
  );
}

