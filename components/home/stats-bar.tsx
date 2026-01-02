'use client';

import { Star, Shield } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function StatsBar() {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {/* User Count with Avatar Stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="text-white">
              <span className="font-bold text-lg">2,500+</span>
              <span className="text-gray-400 text-sm ml-1">{t('stats.users')}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-white">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="font-bold text-lg">4.9/5</span>
            <span className="text-gray-400 text-sm">{t('stats.rating')}</span>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="font-bold text-lg">100%</span>
            <span className="text-gray-400 text-sm">{t('stats.verified')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
