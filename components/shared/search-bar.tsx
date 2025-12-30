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

interface Location {
  slug: string;
  name: string;
}

interface SearchBarProps {
  services: Service[];
  locations: Location[];
  defaultService?: string;
  defaultLocation?: string;
}

export function SearchBar({
  services,
  locations,
  defaultService = '',
  defaultLocation = '',
}: SearchBarProps) {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedService) params.set('service', selectedService);
    if (selectedLocation) params.set('location', selectedLocation);

    router.push(`/providers?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
        {/* Service Select */}
        <div className="flex-1">
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="h-12 border-gray-300">
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

        {/* Location Select */}
        <div className="flex-1">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="h-12 border-gray-300">
              <SelectValue placeholder={t('hero.location_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{locale === 'en' ? 'All Areas' : 'Todas las Zonas'}</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location.slug} value={location.slug}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-12 px-8 bg-primary-600 hover:bg-primary-700 text-white font-medium"
        >
          <Search className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">{t('hero.search_button')}</span>
        </Button>
      </div>
    </div>
  );
}
