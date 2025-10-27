import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-dark">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Nhà xe không tồn tại
        </h2>
        <p className="text-gray-600 dark:text-body-color-dark mb-8 max-w-md mx-auto">
          Nhà xe bạn đang tìm không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại đường dẫn.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}

