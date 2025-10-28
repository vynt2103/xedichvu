'use client';

import { Service, Vehicle } from '@/lib/types';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardV2Props {
  service: Service;
  vehiclesMap?: Map<string, Vehicle>;
}

export default function ServiceCardV2({ service, vehiclesMap }: ServiceCardV2Props) {
  const [showDetails, setShowDetails] = useState(false);

  // Get starting price
  const startingPrice = service.options.length > 0 
    ? typeof service.options[0].price === 'number'
      ? service.options[0].price
      : service.options[0].price
    : 0;

  const priceUnit = service.options[0]?.priceUnit || 'goi';
  const priceUnitLabel = {
    'chuyen': '/chuyến',
    'ngay': '/ngày',
    'gio': '/giờ',
    'goi': '/gói',
    'km': '/km'
  }[priceUnit];

  return (
    <>
      <div className="group bg-white dark:bg-[#2C303B] rounded-2xl border border-gray-200 dark:border-stroke-dark hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl">
        {/* Image Section */}
        {service.image && (
          <div className="relative h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                Sự kiện VIP
              </span>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title with Arrow */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
              {service.title}
            </h3>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </div>

          {/* Location */}
          {service.region && (
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm">
              <MapPin size={14} />
              <span>{service.region}</span>
            </div>
          )}

          {/* Description */}
          {service.desc && (
            <p className="text-sm text-gray-600 dark:text-body-color-dark line-clamp-2 leading-relaxed">
              {service.desc}
            </p>
          )}

          {/* Tags - Minimal Style */}
          {service.tags && service.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700"
                >
                  • {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price Box */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-3 mt-5">
            {/* Price Display */}
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Từ</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {typeof startingPrice === 'number' 
                  ? startingPrice.toLocaleString('vi-VN')
                  : startingPrice}đ
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{priceUnitLabel}</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {service.options.length} {service.options.length > 1 ? 'gói' : 'gói'} khả dụng
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowDetails(true)}
              className="w-full h-11 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/10"
            >
              Xem chi tiết giá
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal with Pricing Details */}
      {showDetails && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  {service.region && (
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>{service.region}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {service.options.map((option, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {option.packageName || `Xe ${option.vehicleType} chỗ`}
                      </h3>
                      {option.duration && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Thời gian: {option.duration} giờ
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {typeof option.price === 'number' 
                          ? option.price.toLocaleString('vi-VN')
                          : option.price}đ
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {priceUnitLabel}
                      </div>
                    </div>
                  </div>

                  {/* Includes List */}
                  {option.includes && option.includes.length > 0 && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Bao gồm:
                      </p>
                      {option.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {option.note && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                      {option.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6">
              <button
                onClick={() => setShowDetails(false)}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

