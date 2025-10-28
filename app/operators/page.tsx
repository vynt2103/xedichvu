'use client';

import { OPERATORS } from '@/lib/mock';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, ShieldCheck, Mail, ArrowRight, Search, Filter, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo } from 'react';

export default function OperatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique regions
  const allRegions = useMemo(() => {
    const regions = new Set<string>();
    OPERATORS.forEach(op => op.regions.forEach(r => regions.add(r)));
    return Array.from(regions).sort();
  }, []);

  // Filter operators based on search and filters
  const filteredOperators = useMemo(() => {
    return OPERATORS.filter(operator => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        operator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        operator.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        operator.regions.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));

      // Region filter
      const matchesRegion = selectedRegion === 'all' || 
        operator.regions.includes(selectedRegion);

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
  };

  const hasActiveFilters = searchQuery !== '' || selectedRegion !== 'all';

  return (
    <main className="min-h-screen bg-white dark:bg-gray-dark py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header with Search */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Danh sách nhà xe
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-body-color-dark leading-relaxed mb-8">
            Các nhà xe uy tín đã tin tưởng NewDanang.vn để xây dựng website chuyên nghiệp
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhà xe theo tên hoặc khu vực..."
                className="w-full h-14 pl-14 pr-14 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Region Filter */}
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="appearance-none h-11 pl-4 pr-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              >
                <option value="all">Tất cả khu vực</option>
                {allRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 h-11 px-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all"
              >
                <X size={16} />
                Xóa bộ lọc
              </button>
            )}
          </div>

          {/* Results Count */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Tìm thấy <strong className="text-gray-900 dark:text-white">{filteredOperators.length}</strong> nhà xe
            {hasActiveFilters && (
              <span className="ml-1">(đã lọc)</span>
            )}
          </p>
        </div>

        {/* Operators Grid */}
        {filteredOperators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredOperators.map((operator) => (
              <Link
                key={operator.slug}
                href={`/o/${operator.slug}`}
                className="group bg-white dark:bg-[#2C303B] rounded-2xl border border-gray-200 dark:border-stroke-dark hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:scale-[1.02]"
              >
                {/* Clean Header with Logo - FULL SIZE */}
                <div className="relative h-48 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}
                  ></div>
                  
                  {operator.logo ? (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-full h-full max-w-[140px] max-h-[140px]">
                        <Image
                          src={operator.logo}
                          alt={operator.name}
                          fill
                          className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                          sizes="140px"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <span className="text-3xl font-bold text-gray-400 dark:text-gray-500">
                          {operator.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {operator.verified && (
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-md">
                      <ShieldCheck size={12} />
                      Verified
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
                      {operator.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>

                  {operator.shortDesc && (
                    <p className="text-sm text-gray-600 dark:text-body-color-dark line-clamp-2 leading-relaxed">
                      {operator.shortDesc}
                    </p>
                  )}

                  {/* Regions - Minimal Style */}
                  <div className="flex flex-wrap gap-2">
                    {operator.regions.slice(0, 3).map((region, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        <MapPin size={11} />
                        {region}
                      </span>
                    ))}
                    {operator.regions.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{operator.regions.length - 3} thêm
                      </span>
                    )}
                  </div>

                  {/* Quick Contact - Clean */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {operator.contacts.phone && (
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <Phone size={14} />
                        <span>{operator.contacts.phone}</span>
                      </div>
                    )}
                    {operator.contacts.zalo && (
                      <div className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400">
                        <MessageCircle size={14} />
                        <span>Chat</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <Search size={36} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Không tìm thấy nhà xe nào
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Không có nhà xe nào phù hợp với từ khóa hoặc bộ lọc của bạn. Vui lòng thử lại với từ khóa khác.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            >
              <X size={18} />
              Xóa bộ lọc
            </button>
          </div>
        )}

        {/* CTA Section - Only show if there are results */}
        {filteredOperators.length > 0 && (
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 overflow-hidden">
              {/* Subtle decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Bạn cũng muốn có trang web chuyên nghiệp?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                  Liên hệ ngay với NewDanang.vn để được tư vấn miễn phí
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://zalo.me/0769222297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle size={20} />
                    Chat Zalo
                  </a>
                  <a
                    href="mailto:info@newdanang.vn"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-500 px-8 py-3.5 text-base font-semibold text-gray-900 dark:text-white transition-all"
                  >
                    <Mail size={20} />
                    Gửi Email
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <Phone size={16} />
                      <strong className="text-gray-900 dark:text-white">0769 222 297</strong>
                    </span>
                    <span className="mx-3 text-gray-300 dark:text-gray-600">|</span>
                    <span className="inline-flex items-center gap-2">
                      <Mail size={16} />
                      <strong className="text-gray-900 dark:text-white">info@newdanang.vn</strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
