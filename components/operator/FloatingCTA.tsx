'use client';

import { ContactLinks } from '@/lib/types';
import { Phone, MessageCircle, Facebook, Mail, X } from 'lucide-react';
import { useState } from 'react';

interface FloatingCTAProps {
  contacts: ContactLinks;
}

export default function FloatingCTA({ contacts }: FloatingCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Exclude website and build contact buttons
  const contactButtons = [];

  if (contacts.phone) {
    contactButtons.push({
      href: `tel:${contacts.phone}`,
      icon: Phone,
      label: 'Gọi ngay',
      color: 'bg-green-600 hover:bg-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    });
  }

  if (contacts.zalo) {
    contactButtons.push({
      href: contacts.zalo,
      icon: MessageCircle,
      label: 'Chat Zalo',
      color: 'bg-blue-500 hover:bg-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    });
  }

  if (contacts.facebook) {
    contactButtons.push({
      href: contacts.facebook,
      icon: Facebook,
      label: 'Facebook',
      color: 'bg-blue-700 hover:bg-blue-800',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    });
  }

  if (contacts.whatsapp) {
    contactButtons.push({
      href: `https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`,
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    });
  }

  if (contacts.email) {
    contactButtons.push({
      href: `mailto:${contacts.email}`,
      icon: Mail,
      label: 'Email',
      color: 'bg-gray-600 hover:bg-gray-700',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      textColor: 'text-gray-600 dark:text-gray-400'
    });
  }

  if (contactButtons.length === 0) return null;

  return (
    <>
      {/* Floating Button - positioned left side to avoid scroll top button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Liên hệ"
      >
        <Phone size={24} className="group-hover:rotate-12 transition-transform" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Contact Menu */}
      {isOpen && (
        <div className="fixed bottom-32 left-6 z-50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 min-w-[280px] border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Liên hệ ngay
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              {contactButtons.map((btn, i) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={i}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 ${btn.bgColor} rounded-xl hover:shadow-lg transition-all duration-200 group`}
                  >
                    <div className={`${btn.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className={`font-semibold ${btn.textColor}`}>
                      {btn.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

