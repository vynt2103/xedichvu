import { Service } from '@/lib/types';

type PriceTableProps = {
  title: string;
  subtitle: string;
  services: Service[];
  headerGradient: string;
  priceColor: string;
};

export default function PriceTable({
  title,
  subtitle,
  services,
  headerGradient,
  priceColor
}: PriceTableProps) {
  if (services.length === 0) return null;

  return (
    <div className="space-y-3 md:space-y-4">
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-body-color-dark">
          {subtitle}
        </p>
      </div>

      {/* Simple Price Table - Mobile optimized */}
      <div className="bg-white dark:bg-[#2C303B] rounded-2xl border border-gray-200 dark:border-stroke-dark overflow-hidden shadow-lg">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className={`${headerGradient} text-white`}>
              <tr>
                <th className="w-3/5 px-6 py-4 text-left font-bold text-base">Tuyến đường</th>
                <th className="w-2/5 px-6 py-4 text-left font-bold text-base">Giá</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                service.options.map((option, optIdx) => (
                  <tr 
                    key={`${service.id}-${optIdx}`} 
                    className="border-b border-gray-200 dark:border-stroke-dark hover:bg-gray-50 dark:hover:bg-[#1D2430] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-base text-gray-900 dark:text-white">
                        {service.region || service.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`font-bold text-xl ${priceColor}`}>
                        {typeof option.price === 'number' 
                          ? option.price.toLocaleString('vi-VN') 
                          : option.price}
                        <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                          /chuyến
                        </span>
                      </div>
                      {option.note && (
                        <div className="text-xs text-gray-600 dark:text-body-color-dark mt-1">
                          {option.note}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <div className={`${headerGradient} px-4 py-3`}>
            <h4 className="text-white font-bold text-base">Bảng giá</h4>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-stroke-dark">
            {services.map((service) => (
              service.options.map((option, optIdx) => (
                <div key={`${service.id}-${optIdx}`} className="p-4">
                  <div className="font-bold text-base text-gray-900 dark:text-white mb-2">
                    {service.region || service.title}
                  </div>
                  <div className={`font-bold text-lg ${priceColor} mb-1`}>
                    {typeof option.price === 'number' 
                      ? option.price.toLocaleString('vi-VN') 
                      : option.price}
                    <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                      /chuyến
                    </span>
                  </div>
                  {option.note && (
                    <div className="text-sm text-gray-600 dark:text-body-color-dark">
                      {option.note}
                    </div>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

