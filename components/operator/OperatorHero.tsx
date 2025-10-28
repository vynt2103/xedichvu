'use client';

import { ContactLinks, ServiceType } from '@/lib/types';
import { MapPin, ShieldCheck, Phone, MessageCircle, Car, Plane, Heart, PartyPopper } from 'lucide-react';
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

const serviceCategoryData: Record<ServiceType, { label: string; icon: any }> = {
  'bao-xe': { label: 'Bao xe', icon: Car },
  'su-kien': { label: 'Cưới hỏi', icon: Heart },
  'san-bay': { label: 'Sân bay', icon: Plane },
  'tour-rieng': { label: 'Tour riêng', icon: PartyPopper }
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
    <section className="relative bg-white dark:bg-gray-900 py-12 md:py-16">
      
      {/* Compact Layout */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop: Split Layout | Mobile: Stacked */}
          <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-12 items-start">
            
            {/* Left: Logo (Desktop) | Top: Logo (Mobile) - Enhanced */}
            <div className="flex justify-center lg:justify-start">
              {logo ? (
                <div className="relative group">
                  {/* Decorative ring - subtle glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Logo container with border */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] bg-white dark:bg-gray-800 rounded-full p-6 border-2 border-gray-100 dark:border-gray-700 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo}
                        alt={`${name} logo`}
                        fill
                        className="object-cover rounded-full scale-110"
                        priority
                        quality={95}
                        sizes="(max-width: 1024px) 192px, 200px"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              ) : (
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Fallback logo */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-xl border-2 border-gray-100 dark:border-gray-700 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-4xl md:text-5xl font-black text-gray-300 dark:text-gray-600">
                      {name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: All Content */}
            <div className="text-center lg:text-left">
              
              {/* Name with Verified Badge */}
              <div className="flex flex-wrap items-start justify-center lg:justify-start gap-2 mb-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {name}
                </h1>
                
                {verified && (
                  <span className="inline-flex items-center gap-1 bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm mt-1">
                    <ShieldCheck size={10} strokeWidth={3} />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              {/* Description */}
              {shortDesc && (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {shortDesc}
                </p>
              )}

              {/* Regions - Inline Badges (Compact) */}
              {regions.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                  {regions.map((region, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      <MapPin size={12} className="text-blue-600 dark:text-blue-400" />
                      {region}
                    </span>
                  ))}
                </div>
              )}

              {/* Services - Inline Badges (Clickable - Scroll to sections) */}
              {serviceCategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                  {serviceCategories.map((cat, i) => {
                    const Icon = serviceCategoryData[cat].icon;
                    const sectionId = `section-${cat}`;
                    
                    return (
                      <a
                        key={i}
                        href={`#${sectionId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(sectionId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-2.5 py-1 rounded-md text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer"
                      >
                        <Icon size={12} />
                        {serviceCategoryData[cat].label}
                      </a>
                    );
                  })}
                </div>
              )}

              {/* CTA Buttons - Compact */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
                {contacts.phone && (
                  <a
                    href={`tel:${contacts.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone size={18} />
                    <span>Gọi {contacts.phone}</span>
                  </a>
                )}
                
                {contacts.zalo && (
                  <a
                    href={contacts.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>Chat Zalo</span>
                  </a>
                )}
              </div>

              {/* Footer Info - Subtle */}
              {contacts.email && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  📧 {contacts.email} • Hỗ trợ 24/7
                </p>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
