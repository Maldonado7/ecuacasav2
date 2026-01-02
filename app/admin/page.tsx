'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { Users, FileText, Star, TrendingUp } from 'lucide-react';

interface Stats {
  totalProviders: number;
  activeProviders: number;
  pendingRegistrations: number;
  averageRating: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalProviders: 0,
    activeProviders: 0,
    pendingRegistrations: 0,
    averageRating: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const supabase = createClient();

      // Fetch provider stats
      const { count: totalProviders } = await supabase
        .from('providers')
        .select('*', { count: 'exact', head: true });

      const { count: activeProviders } = await supabase
        .from('providers')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      const { count: pendingRegistrations } = await supabase
        .from('registration_requests')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');

      const { data: ratingData } = await supabase
        .from('providers')
        .select('rating')
        .eq('status', 'active');

      const avgRating = ratingData?.length
        ? ratingData.reduce((acc, p) => acc + p.rating, 0) / ratingData.length
        : 0;

      setStats({
        totalProviders: totalProviders || 0,
        activeProviders: activeProviders || 0,
        pendingRegistrations: pendingRegistrations || 0,
        averageRating: Math.round(avgRating * 10) / 10,
      });
      setLoading(false);
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      icon: Users,
      label: 'Total Profesionales',
      value: stats.totalProviders,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: TrendingUp,
      label: 'Activos',
      value: stats.activeProviders,
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: FileText,
      label: 'Solicitudes Pendientes',
      value: stats.pendingRegistrations,
      color: 'text-orange-600 bg-orange-100',
    },
    {
      icon: Star,
      label: 'Rating Promedio',
      value: stats.averageRating,
      color: 'text-yellow-600 bg-yellow-100',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones rápidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/admin/providers/new">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Agregar Profesional</h3>
              <p className="text-sm text-gray-500">Crear nuevo perfil de profesional</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/registrations">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Ver Solicitudes</h3>
              <p className="text-sm text-gray-500">
                {stats.pendingRegistrations} solicitudes pendientes
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/providers">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Gestionar Profesionales</h3>
              <p className="text-sm text-gray-500">Editar perfiles existentes</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
