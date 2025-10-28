'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trang không tồn tại
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. 
          Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            <Home size={20} />
            <span>Về trang chủ</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>Quay lại</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-gray-400 dark:text-gray-600">
          <p className="text-sm">
            Nếu bạn nghĩ đây là lỗi, vui lòng{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              liên hệ với chúng tôi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

