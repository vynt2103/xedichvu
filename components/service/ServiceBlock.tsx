import { Service, Vehicle } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface ServiceBlockProps {
  service: Service;
  vehiclesMap?: Map<string, Vehicle>;
}

const serviceTypeColors: Record<string, { bg: string; text: string }> = {
  'bao-xe': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'su-kien': { bg: 'bg-purple-100', text: 'text-purple-800' },
  'san-bay': { bg: 'bg-green-100', text: 'text-green-800' },
  'tour-rieng': { bg: 'bg-orange-100', text: 'text-orange-800' }
};

const serviceTypeLabels: Record<string, string> = {
  'bao-xe': 'Bao xe',
  'su-kien': 'Sự kiện VIP',
  'san-bay': 'Sân bay',
  'tour-rieng': 'Tour riêng'
};

export default function ServiceBlock({ service, vehiclesMap }: ServiceBlockProps) {
  return (
    <div className="group bg-white dark:bg-[#2C303B] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-stroke-dark transform hover:-translate-y-1">
      {/* Image */}
      {service.image && (
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-black overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className={`${serviceTypeColors[service.type].bg} ${serviceTypeColors[service.type].text} px-3 py-1 rounded-full text-xs font-semibold`}>
              {serviceTypeLabels[service.type]}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-5">
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <span className={`${serviceTypeColors[service.type].bg} ${serviceTypeColors[service.type].text} px-3 py-1 rounded-lg text-xs font-bold shadow-md`}>
              {serviceTypeLabels[service.type]}
            </span>
          </div>
          {service.region && (
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-body-color-dark text-sm mb-2">
              <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="font-medium">{service.region}</span>
            </div>
          )}
          {service.desc && (
            <p className="text-gray-600 dark:text-body-color-dark text-sm leading-relaxed line-clamp-2">{service.desc}</p>
          )}
        </div>

        {/* Tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 text-orange-700 dark:text-orange-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800"
              >
                ⭐ {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price List for all vehicle types */}
        {service.options.length > 0 && (
          <div className="border-t border-gray-200 dark:border-stroke-dark pt-4 mt-4 space-y-2">
            {service.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-[#1D2430] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Xe {option.vehicleType} chỗ
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {option.note && (
                    <span className="text-xs text-gray-600 dark:text-body-color-dark hidden md:block">
                      {option.note}
                    </span>
                  )}
                  <span className="text-lg font-bold text-blue-600">
                    {typeof option.price === 'number' 
                      ? option.price.toLocaleString('vi-VN')
                      : option.price}
                    <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                      /chuyến
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

