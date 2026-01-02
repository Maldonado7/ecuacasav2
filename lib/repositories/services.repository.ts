import { cache } from 'react';
import { createClient } from '@/lib/supabase/server';

interface Service {
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
}

export const servicesRepository = {
  /**
   * Get all active services
   */
  getActive: cache(async (): Promise<Service[]> => {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('slug, name_es, name_en, description_es, description_en')
      .order('name_en');

    if (error) {
      console.error('Error fetching services:', error);
      return [];
    }

    return (data as Service[]) || [];
  }),

  /**
   * Get service by slug
   */
  getBySlug: cache(async (slug: string): Promise<Service | null> => {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching service ${slug}:`, error);
      return null;
    }

    return data as Service;
  }),
};
