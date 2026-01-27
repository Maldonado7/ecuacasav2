'use client';

import { Shield, Heart, Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function StatsBar() {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {/* Growing Network */}
          <div className="flex items-center gap-2 text-white">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="font-medium text-sm sm:text-base">Growing network of verified professionals</span>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="font-medium text-sm sm:text-base">Every provider is manually verified</span>
          </div>

          {/* Community */}
          <div className="flex items-center gap-2 text-white">
            <Heart className="w-6 h-6 text-pink-400" />
            <span className="font-medium text-sm sm:text-base">Built for Cuenca&apos;s expat community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
