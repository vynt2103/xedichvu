export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
        
        {/* Footer */}
        <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

