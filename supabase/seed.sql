-- Seed Data for EcuaCasa
-- Services and Locations for Cuenca, Ecuador

-- ============================================
-- SERVICES
-- ============================================

INSERT INTO services (slug, name_es, name_en, icon, display_order) VALUES
('plomeria', 'Plomería', 'Plumbing', 'wrench', 1),
('electricidad', 'Electricidad', 'Electrical', 'zap', 2),
('limpieza', 'Limpieza del Hogar', 'House Cleaning', 'sparkles', 3),
('jardineria', 'Jardinería', 'Gardening', 'leaf', 4),
('pintura', 'Pintura', 'Painting', 'paintbrush', 5),
('carpinteria', 'Carpintería', 'Carpentry', 'hammer', 6),
('cerrajeria', 'Cerrajería', 'Locksmith', 'key', 7),
('aire', 'Aire Acondicionado', 'Air Conditioning', 'wind', 8),
('mudanzas', 'Mudanzas', 'Moving', 'truck', 9),
('handyman', 'Servicios Generales', 'Handyman', 'wrench', 10);

-- ============================================
-- LOCATIONS
-- ============================================

INSERT INTO locations (slug, name, display_order) VALUES
('el-centro', 'El Centro', 1),
('gringolandia', 'Gringolandia', 2),
('yanuncay', 'Yanuncay', 3),
('el-vergel', 'El Vergel', 4),
('totoracocha', 'Totoracocha', 5),
('miraflores', 'Miraflores', 6),
('todos-santos', 'Todos Santos', 7),
('san-blas', 'San Blas', 8),
('ordoñez-laso', 'Ordóñez Laso', 9),
('todas-las-zonas', 'Todas las Zonas', 10);

-- ============================================
-- SAMPLE PROVIDERS (10 realistic examples)
-- ============================================

-- Note: Run this in a DO block to use variables for linking
DO $$
DECLARE
  -- Service IDs
  plomeria_id UUID;
  electricidad_id UUID;
  limpieza_id UUID;
  jardineria_id UUID;
  pintura_id UUID;
  carpinteria_id UUID;

  -- Location IDs
  el_centro_id UUID;
  gringolandia_id UUID;
  yanuncay_id UUID;
  el_vergel_id UUID;
  todas_las_zonas_id UUID;

  -- Provider IDs
  provider1_id UUID;
  provider2_id UUID;
  provider3_id UUID;
  provider4_id UUID;
  provider5_id UUID;
  provider6_id UUID;
  provider7_id UUID;
  provider8_id UUID;
  provider9_id UUID;
  provider10_id UUID;

BEGIN
  -- Get service IDs
  SELECT id INTO plomeria_id FROM services WHERE slug = 'plomeria';
  SELECT id INTO electricidad_id FROM services WHERE slug = 'electricidad';
  SELECT id INTO limpieza_id FROM services WHERE slug = 'limpieza';
  SELECT id INTO jardineria_id FROM services WHERE slug = 'jardineria';
  SELECT id INTO pintura_id FROM services WHERE slug = 'pintura';
  SELECT id INTO carpinteria_id FROM services WHERE slug = 'carpinteria';

  -- Get location IDs
  SELECT id INTO el_centro_id FROM locations WHERE slug = 'el-centro';
  SELECT id INTO gringolandia_id FROM locations WHERE slug = 'gringolandia';
  SELECT id INTO yanuncay_id FROM locations WHERE slug = 'yanuncay';
  SELECT id INTO el_vergel_id FROM locations WHERE slug = 'el-vergel';
  SELECT id INTO todas_las_zonas_id FROM locations WHERE slug = 'todas-las-zonas';

  -- Provider 1: Carlos Mendez (Electrician - English speaker)
  INSERT INTO providers (slug, name, phone, email, description_es, description_en, speaks_english, price_range, response_time, verified, featured, rating, review_count, status)
  VALUES (
    'carlos-mendez-electricista',
    'Carlos Méndez',
    '+593987654321',
    'carlos.mendez@example.com',
    'Electricista certificado con 15 años de experiencia. Especializado en instalaciones residenciales y comerciales.',
    'Certified electrician with 15 years of experience. Specialized in residential and commercial installations.',
    true, '$$', 'Same day', true, true, 4.8, 23, 'active'
  ) RETURNING id INTO provider1_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider1_id, electricidad_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider1_id, el_centro_id), (provider1_id, gringolandia_id), (provider1_id, yanuncay_id);

  -- Provider 2: María González (House Cleaning)
  INSERT INTO providers (slug, name, phone, description_es, speaks_english, price_range, response_time, verified, featured, rating, review_count, status)
  VALUES (
    'maria-gonzalez-limpieza',
    'María González',
    '+593987654322',
    'Servicio de limpieza profesional para hogares y oficinas. Atención personalizada y productos ecológicos.',
    false, '$', '< 2 hours', true, true, 4.9, 45, 'active'
  ) RETURNING id INTO provider2_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider2_id, limpieza_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider2_id, todas_las_zonas_id);

  -- Provider 3: Roberto Silva (Plumber - English speaker)
  INSERT INTO providers (slug, name, phone, email, description_es, description_en, speaks_english, price_range, response_time, verified, rating, review_count, status)
  VALUES (
    'roberto-silva-plomero',
    'Roberto Silva',
    '+593987654323',
    'roberto.silva@example.com',
    'Plomero profesional disponible 24/7 para emergencias. Reparaciones y nuevas instalaciones.',
    'Professional plumber available 24/7 for emergencies. Repairs and new installations.',
    true, '$$', '< 2 hours', true, 4.7, 31, 'active'
  ) RETURNING id INTO provider3_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider3_id, plomeria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider3_id, gringolandia_id), (provider3_id, el_vergel_id);

  -- Provider 4: Ana Torres (Gardener)
  INSERT INTO providers (slug, name, phone, description_es, speaks_english, price_range, response_time, verified, rating, review_count, status)
  VALUES (
    'ana-torres-jardinera',
    'Ana Torres',
    '+593987654324',
    'Servicios de jardinería y mantenimiento de áreas verdes. Diseño de jardines.',
    false, '$', 'Same day', false, 4.6, 12, 'active'
  ) RETURNING id INTO provider4_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider4_id, jardineria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider4_id, yanuncay_id), (provider4_id, el_vergel_id);

  -- Provider 5: Diego Ramírez (Painter - English speaker)
  INSERT INTO providers (slug, name, phone, email, description_es, description_en, speaks_english, price_range, response_time, verified, featured, rating, review_count, status)
  VALUES (
    'diego-ramirez-pintor',
    'Diego Ramírez',
    '+593987654325',
    'diego.ramirez@example.com',
    'Pintor profesional con 10 años de experiencia. Interior y exterior.',
    'Professional painter with 10 years of experience. Interior and exterior.',
    true, '$$', '24 hours', true, false, 4.5, 18, 'active'
  ) RETURNING id INTO provider5_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider5_id, pintura_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider5_id, todas_las_zonas_id);

  -- Provider 6: Luis Herrera (Carpenter)
  INSERT INTO providers (slug, name, phone, description_es, speaks_english, price_range, response_time, rating, review_count, status)
  VALUES (
    'luis-herrera-carpintero',
    'Luis Herrera',
    '+593987654326',
    'Carpintero especializado en muebles a medida y reparaciones.',
    false, '$$$', '2-3 days', 4.8, 9, 'active'
  ) RETURNING id INTO provider6_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider6_id, carpinteria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider6_id, el_centro_id), (provider6_id, gringolandia_id);

  -- Provider 7: Patricia Vega (Cleaning & Gardening)
  INSERT INTO providers (slug, name, phone, description_es, speaks_english, price_range, response_time, verified, rating, review_count, status)
  VALUES (
    'patricia-vega-servicios',
    'Patricia Vega',
    '+593987654327',
    'Servicios de limpieza y jardinería. Equipo profesional y confiable.',
    false, '$', 'Same day', true, 4.7, 28, 'active'
  ) RETURNING id INTO provider7_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider7_id, limpieza_id), (provider7_id, jardineria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider7_id, todas_las_zonas_id);

  -- Provider 8: Miguel Castro (Electrician & Plumber - English speaker)
  INSERT INTO providers (slug, name, phone, email, description_es, description_en, speaks_english, price_range, response_time, verified, rating, review_count, status)
  VALUES (
    'miguel-castro-servicios',
    'Miguel Castro',
    '+593987654328',
    'miguel.castro@example.com',
    'Técnico multiservicios - electricidad y plomería. Servicio rápido y garantizado.',
    'Multi-service technician - electrical and plumbing. Fast and guaranteed service.',
    true, '$$', '< 2 hours', true, 4.9, 37, 'active'
  ) RETURNING id INTO provider8_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider8_id, electricidad_id), (provider8_id, plomeria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider8_id, el_centro_id), (provider8_id, gringolandia_id), (provider8_id, yanuncay_id), (provider8_id, el_vergel_id);

  -- Provider 9: Sofia Morales (Painter)
  INSERT INTO providers (slug, name, phone, description_es, speaks_english, price_range, response_time, rating, review_count, status)
  VALUES (
    'sofia-morales-pintora',
    'Sofía Morales',
    '+593987654329',
    'Pintora profesional. Especializada en acabados finos y decoración.',
    false, '$$', '24 hours', 4.6, 15, 'active'
  ) RETURNING id INTO provider9_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider9_id, pintura_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider9_id, el_centro_id), (provider9_id, yanuncay_id);

  -- Provider 10: Jorge Paz (Carpenter - English speaker)
  INSERT INTO providers (slug, name, phone, email, description_es, description_en, speaks_english, price_range, response_time, verified, rating, review_count, status)
  VALUES (
    'jorge-paz-carpintero',
    'Jorge Paz',
    '+593987654330',
    'jorge.paz@example.com',
    'Carpintero con 20 años de experiencia. Muebles personalizados y restauración.',
    'Carpenter with 20 years of experience. Custom furniture and restoration.',
    true, '$$$', '2-3 days', false, 4.7, 11, 'active'
  ) RETURNING id INTO provider10_id;
  INSERT INTO provider_services (provider_id, service_id) VALUES (provider10_id, carpinteria_id);
  INSERT INTO provider_locations (provider_id, location_id) VALUES (provider10_id, gringolandia_id), (provider10_id, el_vergel_id);

  -- Sample Reviews
  INSERT INTO reviews (provider_id, customer_name, rating, comment, service_type, verified) VALUES
  (provider1_id, 'John Smith', 5, 'Excellent work! Very professional and speaks English fluently.', 'Electrical', true),
  (provider1_id, 'Mary Johnson', 5, 'Fixed my electrical issue quickly. Highly recommend!', 'Electrical', true),
  (provider2_id, 'Sarah Williams', 5, 'Best cleaning service in Cuenca!', 'Cleaning', true),
  (provider3_id, 'Mike Davis', 5, 'Very responsive and fixed our plumbing emergency fast.', 'Plumbing', true),
  (provider8_id, 'Linda Brown', 5, 'Amazing service! Can handle both electrical and plumbing.', 'Multi-service', true);

END $$;

-- Verification
SELECT 'Seed data inserted successfully!' AS message,
       (SELECT COUNT(*) FROM providers WHERE status = 'active') AS active_providers;
