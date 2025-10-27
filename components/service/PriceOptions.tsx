import { PriceOption, Vehicle } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Car, Info } from 'lucide-react';

interface PriceOptionsProps {
  options: PriceOption[];
  vehiclesMap?: Map<string, Vehicle>;
}

export default function PriceOptions({ options, vehiclesMap }: PriceOptionsProps) {
  const classColors = {
    'thuong': 'bg-gray-100 text-gray-800',
    'cao-cap': 'bg-blue-100 text-blue-800',
    'vip': 'bg-purple-100 text-purple-800'
  };

  const classLabels = {
    'thuong': 'Phổ thông',
    'cao-cap': 'Cao cấp',
    'vip': 'VIP'
  };

  if (options.length === 0) return null;

  return (
    <div className="space-y-3">
      {options.map((option, i) => {
        const vehicle = option.vehicleRefId ? vehiclesMap?.get(option.vehicleRefId) : undefined;
        
        return (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-50 to-white dark:from-[#1D2430] dark:to-[#2C303B] border border-gray-200 dark:border-stroke-dark rounded-xl p-4 hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              {/* Left: Vehicle Info */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Car size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Xe {option.vehicleType} chỗ
                  </span>
                  {option.vehicleClass && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${classColors[option.vehicleClass]}`}>
                      {classLabels[option.vehicleClass]}
                    </span>
                  )}
                </div>
                
                {vehicle && (
                  <p className="text-sm text-gray-600 dark:text-body-color-dark line-clamp-1">{vehicle.name}</p>
                )}
              </div>

              {/* Right: Price */}
              <div className="flex flex-col items-end gap-1">
                <div className="text-lg font-bold text-blue-600">
                  {formatPrice(option.price, option.priceUnit)}
                </div>
                {(option.condition || option.note) && (
                  <div className="flex items-start gap-1 text-xs text-gray-600 dark:text-body-color-dark">
                    <Info size={12} className="mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">
                      {option.condition || option.note}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

