'use client';

import { Vehicle } from '@/lib/types';
import { ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
    }
  };

  return (
    <div className="group bg-white dark:bg-[#2C303B] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-stroke-dark transform hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-black overflow-hidden">
        {vehicle.images.length > 0 ? (
          <>
            <Image
              src={vehicle.images[currentImageIndex]}
              alt={vehicle.name}
              fill
              className="object-cover"
            />
            {vehicle.images.length > 1 && (
              <>
                <button
                  onClick={() => handleImageChange('prev')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => handleImageChange('next')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  →
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {vehicle.images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-black">
            <span className="text-sm">Không có ảnh</span>
          </div>
        )}
        
        {vehicle.verified && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-medium">
            <ShieldCheck size={12} />
            Đã xác thực
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {vehicle.name}
          </h3>
          {vehicle.verified && (
            <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-semibold">
              <ShieldCheck size={14} />
              Verified
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-semibold">
            <Users size={18} />
            <span>{vehicle.seat} chỗ</span>
          </div>
        </div>

        {vehicle.desc && (
          <p className="text-gray-600 dark:text-body-color-dark text-sm line-clamp-2 leading-relaxed">
            {vehicle.desc}
          </p>
        )}

        {vehicle.tags && vehicle.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {vehicle.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

