'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/use-translation';
import { useState } from 'react';

interface Service {
  slug: string;
  name_es: string;
  name_en: string;
}

interface SearchBarProps {
  services: Service[];
  defaultService?: string;
}

export function SearchBar({
  services,
  defaultService = '',
}: SearchBarProps) {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [selectedService, setSelectedService] = useState(defaultService);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedService && selectedService !== 'all') {
      params.set('service', selectedService);
    }
    router.push(`/providers?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Service Select */}
        <div className="flex-1">
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="h-14 border-0 bg-white/50 text-lg">
              <SelectValue placeholder={t('hero.search_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('services.all')}</SelectItem>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {locale === 'en' ? service.name_en : service.name_es}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          {t('hero.search_button')}
        </Button>
      </div>
    </div>
  );
}
