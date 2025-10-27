'use client';

import { OPERATORS } from '@/lib/mock';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, ShieldCheck, Mail } from 'lucide-react';
import Image from 'next/image';

export default function OperatorsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-dark py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white mb-4">
            Danh sách nhà xe
          </h1>
          <p className="text-lg text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Các nhà xe đã tin tưởng NewDanang.vn để xây dựng website chuyên nghiệp
          </p>
        </div>

        {/* Operators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATORS.map((operator) => (
            <Link
              key={operator.slug}
              href={`/o/${operator.slug}`}
              className="group bg-white dark:bg-[#2C303B] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-stroke-dark transform hover:-translate-y-1"
            >
              {/* Cover Image or Gradient */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                {operator.cover && (
                  <Image
                    src={operator.cover}
                    alt={operator.name}
                    fill
                    className="object-cover opacity-30"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80" />
                {operator.logo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                      <Image
                        src={operator.logo}
                        alt={operator.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
                {operator.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                    <ShieldCheck size={12} />
                    Verified
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {operator.name}
                </h3>

                {operator.shortDesc && (
                  <p className="text-sm text-gray-600 dark:text-body-color-dark line-clamp-2">
                    {operator.shortDesc}
                  </p>
                )}

                {/* Regions */}
                <div className="flex flex-wrap gap-2">
                  {operator.regions.slice(0, 3).map((region, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      <MapPin size={12} />
                      {region}
                    </span>
                  ))}
                  {operator.regions.length > 3 && (
                    <span className="text-xs text-gray-600 dark:text-body-color-dark">
                      +{operator.regions.length - 3}
                    </span>
                  )}
                </div>

                {/* Quick Contact */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-stroke-dark">
                  {operator.contacts.phone && (
                    <a
                      href={`tel:${operator.contacts.phone}`}
                      className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-body-color-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Phone size={14} />
                      <span>{operator.contacts.phone}</span>
                    </a>
                  )}
                  {operator.contacts.zalo && (
                    <a
                      href={operator.contacts.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <MessageCircle size={14} />
                      <span>Chat</span>
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA for Operators */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn cũng muốn có trang web chuyên nghiệp?
          </h2>
          <p className="text-white/95 mb-6 max-w-2xl mx-auto">
            Liên hệ ngay với NewDanang.vn để được tư vấn miễn phí
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://zalo.me/0769222297"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-bold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle size={20} />
              Chat Zalo
            </a>
            <a
              href="mailto:info@newdanang.vn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/20"
            >
              <Mail size={20} />
              Gửi Email
            </a>
          </div>
          <p className="mt-6 text-white/90">
            📞 0769 222 297 | 📧 info@newdanang.vn
          </p>
        </div>
      </div>
    </main>
  );
}

