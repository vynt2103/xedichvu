'use client';

import { Vehicle } from '@/lib/types';
import VehicleCard from './VehicleCard';
import { useState } from 'react';


const seatOptions = [0, 4, 5, 7, 9, 16, 29, 45];

interface VehicleListProps {
  vehicles: Vehicle[];
  showFilter?: boolean;
}

export default function VehicleList({ vehicles, showFilter = true }: VehicleListProps) {
  const [selectedSeat, setSelectedSeat] = useState<number>(0);

  const filteredVehicles = vehicles.filter((v) => {
    if (selectedSeat > 0 && v.seat !== selectedSeat) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      {showFilter && (
        <div className="bg-white dark:bg-[#2C303B] rounded-xl shadow-sm p-4 border border-gray-100 dark:border-stroke-dark">
          <label className="block text-sm font-medium text-gray-700 dark:text-body-color-dark mb-2">
            Lọc theo số chỗ
          </label>
          <div className="flex flex-wrap gap-2">
            {seatOptions.map((seat) => (
              <button
                key={seat}
                onClick={() => setSelectedSeat(seat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedSeat === seat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-stroke-dark text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-[#353943]'
                }`}
              >
                {seat === 0 ? 'Tất cả' : `${seat} chỗ`}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      {filteredVehicles.length > 0 && (
        <p className="text-gray-600 dark:text-body-color-dark text-sm">
          Tìm thấy <span className="font-semibold text-blue-600">{filteredVehicles.length}</span> xe
        </p>
      )}

      {/* Vehicle Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 dark:bg-[#1D2430] rounded-2xl">
          <p className="text-gray-500 dark:text-body-color-dark">Không tìm thấy xe phù hợp với bộ lọc đã chọn.</p>
        </div>
      )}
    </div>
  );
}

