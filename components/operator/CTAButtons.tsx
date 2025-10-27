'use client';

import { ContactLinks } from '@/lib/types';
import { Phone, MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';

interface CTAButtonsProps {
  contacts: ContactLinks;
  variant?: 'default' | 'floating';
}

export default function CTAButtons({ contacts, variant = 'default' }: CTAButtonsProps) {
  const buttons = [];

  if (contacts.phone) {
    buttons.push({
      href: `tel:${contacts.phone}`,
      icon: Phone,
      label: 'Gọi',
      color: 'bg-green-600 hover:bg-green-700'
    });
  }

  if (contacts.zalo) {
    buttons.push({
      href: contacts.zalo,
      icon: MessageCircle,
      label: 'Zalo',
      color: 'bg-blue-500 hover:bg-blue-600'
    });
  }

  if (contacts.facebook) {
    buttons.push({
      href: contacts.facebook,
      icon: Facebook,
      label: 'Facebook',
      color: 'bg-blue-700 hover:bg-blue-800'
    });
  }

  if (contacts.whatsapp) {
    buttons.push({
      href: `https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`,
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600'
    });
  }

  if (contacts.instagram) {
    buttons.push({
      href: contacts.instagram,
      icon: Instagram,
      label: 'Instagram',
      color: 'bg-pink-600 hover:bg-pink-700'
    });
  }

  if (contacts.email) {
    buttons.push({
      href: `mailto:${contacts.email}`,
      icon: Mail,
      label: 'Email',
      color: 'bg-gray-600 hover:bg-gray-700'
    });
  }

  // Website excluded as requested

  if (buttons.length === 0) return null;

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 pb-safe">
        {buttons.slice(0, 4).map((btn, i) => {
          const Icon = btn.icon;
          return (
            <a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn.color} text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm font-medium`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{btn.label}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((btn, i) => {
        const Icon = btn.icon;
        return (
          <a
            key={i}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.color} text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-medium`}
          >
            <Icon size={18} />
            {btn.label}
          </a>
        );
      })}
    </div>
  );
}

