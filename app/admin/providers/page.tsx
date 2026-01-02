'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { Plus, Edit, Trash2, CheckCircle, Star } from 'lucide-react';

interface Provider {
  id: string;
  name: string;
  phone: string;
  rating: number;
  verified: boolean;
  featured: boolean;
  status: string;
  speaks_english: boolean;
  created_at: string;
}

export default function AdminProvidersPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders();
  }, []);

  async function fetchProviders() {
    const supabase = createClient();
    const { data } = await supabase
      .from('providers')
      .select('id, name, phone, rating, verified, featured, status, speaks_english, created_at')
      .order('created_at', { ascending: false });

    setProviders(data || []);
    setLoading(false);
  }

  async function toggleFeatured(id: string, currentValue: boolean) {
    const supabase = createClient();
    await supabase
      .from('providers')
      .update({ featured: !currentValue })
      .eq('id', id);
    fetchProviders();
  }

  async function toggleVerified(id: string, currentValue: boolean) {
    const supabase = createClient();
    await supabase
      .from('providers')
      .update({ verified: !currentValue })
      .eq('id', id);
    fetchProviders();
  }

  async function deleteProvider(id: string, name: string) {
    if (!confirm(`¿Estás seguro de eliminar a ${name}?`)) return;

    const supabase = createClient();
    await supabase.from('providers').delete().eq('id', id);
    fetchProviders();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profesionales</h1>
        <Link href="/admin/providers/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="w-4 h-4 mr-2" />
            Agregar
          </Button>
        </Link>
      </div>

      {providers.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">No hay profesionales registrados</p>
            <Link href="/admin/providers/new">
              <Button>Agregar el primero</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nombre</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Teléfono</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Estado</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Badges</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {providers.map((provider) => (
                  <tr key={provider.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{provider.name}</div>
                      {provider.speaks_english && (
                        <span className="text-xs text-gray-500">Habla inglés</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{provider.phone}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{provider.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={provider.status === 'active' ? 'default' : 'secondary'}>
                        {provider.status === 'active' ? 'Activo' : provider.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleVerified(provider.id, provider.verified)}
                          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                            provider.verified
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          <CheckCircle className="w-3 h-3 inline mr-1" />
                          Verificado
                        </button>
                        <button
                          onClick={() => toggleFeatured(provider.id, provider.featured)}
                          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                            provider.featured
                              ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          <Star className="w-3 h-3 inline mr-1" />
                          Destacado
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/providers/${provider.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteProvider(provider.id, provider.name)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
