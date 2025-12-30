import { z } from 'zod';

// Provider form validation schema
export const providerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().regex(/^\+593[0-9]{9}$/, 'Phone must be in format +593XXXXXXXXX'),
  photo_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  description_es: z.string().optional(),
  description_en: z.string().optional(),
  price_range: z.enum(['$', '$$', '$$$']).optional(),
  response_time: z.string().optional(),
  speaks_english: z.boolean().default(false),
  years_experience: z.number().int().min(0).max(100).optional(),
  verified: z.boolean().default(false),
  featured: z.boolean().default(false),
  status: z.enum(['active', 'pending', 'inactive']).default('pending'),
  service_ids: z.array(z.string()).min(1, 'Select at least one service'),
  location_ids: z.array(z.string()).min(1, 'Select at least one location'),
});

export type ProviderFormValues = z.infer<typeof providerFormSchema>;

// Registration form validation schema
export const registrationFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+593[0-9]{9}$/, 'Phone must be in format +593XXXXXXXXX'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  services_interested: z.array(z.string()).min(1, 'Select at least one service'),
  areas_served: z.array(z.string()).min(1, 'Select at least one area'),
  speaks_english: z.boolean().default(false),
  message: z.string().max(500, 'Message must be less than 500 characters').optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

// Admin login validation schema
export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

// Review form validation schema (for future use)
export const reviewFormSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(500, 'Comment must be less than 500 characters').optional(),
  service_type: z.string().optional(),
});

export type ReviewFormValues = z.infer<typeof reviewFormSchema>;
