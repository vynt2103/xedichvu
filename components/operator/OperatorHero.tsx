import { ContactLinks, ServiceType } from '@/lib/types';
import CTAButtons from './CTAButtons';
import { MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface OperatorHeroProps {
  name: string;
  verified?: boolean;
  shortDesc?: string;
  regions: string[];
  serviceCategories: ServiceType[];
  contacts: ContactLinks;
  logo?: string;
  cover?: string;
}

const serviceCategoryLabels: Record<ServiceType, string> = {
  'bao-xe': 'Bao xe',
  'su-kien': 'Sự kiện VIP',
  'san-bay': 'Sân bay',
  'tour-rieng': 'Tour riêng'
};

export default function OperatorHero({
  name,
  verified,
  shortDesc,
  regions,
  serviceCategories,
  contacts,
  logo,
  cover
}: OperatorHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-black dark:via-gray-900 dark:to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Cover Image Overlay */}
      {cover && (
        <div className="absolute inset-0 opacity-30">
          <Image
            src={cover}
            alt={`Cover ${name}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="relative pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Logo */}
            {logo && (
              <div className="flex-shrink-0 animate-fade-in">
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-300 border-4 border-white/20">
                  <Image
                    src={logo}
                    alt={`Logo ${name}`}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Info */}
            <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                  {name}
                </h1>
                {verified && (
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all">
                    <ShieldCheck size={18} />
                    Đã xác thực
                  </span>
                )}
              </div>

              {shortDesc && (
                <p className="text-white/95 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
                  {shortDesc}
                </p>
              )}

              {/* Regions */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-white/90 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Khu vực:</span>
                </div>
                {regions.map((region, i) => (
                  <span
                    key={i}
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all shadow-md hover:shadow-lg"
                  >
                    {region}
                  </span>
                ))}
              </div>

              {/* Service Categories */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {serviceCategories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-blue-600/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold border-2 border-blue-400/50 shadow-md hover:shadow-xl hover:bg-blue-600/50 transition-all"
                  >
                    ✨ {serviceCategoryLabels[cat]}
                  </span>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex pt-4">
                <CTAButtons contacts={contacts} variant="default" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA */}
      <div className="md:hidden pb-20">
        <CTAButtons contacts={contacts} variant="floating" />
      </div>
    </div>
  );
}

