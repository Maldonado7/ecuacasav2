'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

const registrationSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(9, 'Ingresa un número de teléfono válido').max(10, 'Número demasiado largo'),
  email: z.string().email('Ingresa un email válido').optional().or(z.literal('')),
  services: z.array(z.string()).min(1, 'Selecciona al menos un servicio'),
  speaks_english: z.boolean(),
  message: z.string().optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

interface Service {
  slug: string;
  name_es: string;
}

export default function RegisterPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      services: [],
      speaks_english: false,
      message: '',
    },
  });

  const selectedServices = watch('services');

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();
      const { data } = await supabase.from('services').select('slug, name_es').order('name_es');
      setServices(data || []);
      setLoading(false);
    }

    fetchData();
  }, []);

  const toggleService = (slug: string) => {
    const current = selectedServices || [];
    if (current.includes(slug)) {
      setValue('services', current.filter((s) => s !== slug));
    } else {
      setValue('services', [...current, slug]);
    }
  };

  const onSubmit = async (data: RegistrationForm) => {
    setSubmitting(true);

    try {
      // Normalize phone number: strip spaces, leading 0, and ensure +593 prefix
      let fullPhone = data.phone.replace(/\s/g, '');
      if (fullPhone.startsWith('+593')) {
        // Already has prefix
      } else if (fullPhone.startsWith('593')) {
        fullPhone = `+${fullPhone}`;
      } else {
        if (fullPhone.startsWith('0')) {
          fullPhone = fullPhone.substring(1);
        }
        fullPhone = `+593${fullPhone}`;
      }

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: fullPhone,
          email: data.email || null,
          services: data.services,
          speaks_english: data.speaks_english,
          message: data.message || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSuccess(true);
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Solicitud enviada!
            </h1>
            <p className="text-gray-600 mb-6">
              Gracias por tu interés en unirte a EcuaCasa. Te contactaremos en las próximas
              24-48 horas para verificar tu información.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Volver al inicio
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/for-providers"
          className="inline-flex items-center text-gray-600 hover:text-accent-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Registrate como profesional
          </h1>
          <p className="text-lg text-gray-600">
            Completa el formulario y te contactaremos para verificar tu información
          </p>
        </div>

        {/* Form */}
        <Card className="shadow-xl border-2 border-gray-100">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="mt-1"
                  placeholder="Ej: Juan García"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Número de WhatsApp *</Label>
                <div className="flex mt-1">
                  <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-600 font-medium">
                    +593
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="rounded-l-none"
                    placeholder="99 123 4567"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email (opcional)</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="mt-1"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <Label>Servicios que ofreces *</Label>
                <p className="text-sm text-gray-500 mb-3">Selecciona todos los que apliquen</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => toggleService(service.slug)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedServices?.includes(service.slug)
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {service.name_es}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-sm text-red-500 mt-2">{errors.services.message}</p>
                )}
              </div>

              {/* Speaks English */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="speaks_english"
                  {...register('speaks_english')}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 w-5 h-5"
                />
                <Label htmlFor="speaks_english" className="cursor-pointer">
                  Hablo inglés
                </Label>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Cuéntanos sobre ti (opcional)</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  className="mt-1"
                  rows={4}
                  placeholder="Tu experiencia, especialidades, lo que te hace diferente..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full py-6 text-lg bg-accent-500 hover:bg-accent-600"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar solicitud'
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Al registrarte aceptas nuestros{' '}
                <Link href="/terms" className="text-primary-600 hover:underline">
                  Términos de servicio
                </Link>{' '}
                y{' '}
                <Link href="/privacy" className="text-primary-600 hover:underline">
                  Política de privacidad
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
