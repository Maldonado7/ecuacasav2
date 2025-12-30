# EcuaCasa - Home Services Marketplace

A Next.js application connecting expats in Cuenca, Ecuador with trusted local service providers.

## Tech Stack

- **Frontend**: Next.js 14.2+ (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (admin only)
- **File Storage**: Supabase Storage
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=your-resend-api-key
NOTIFICATION_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the database setup:
- Open Supabase SQL Editor
- Run the SQL script in `supabase/full-setup.sql`

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ecuacasav2/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                    # Utilities and helpers
│   ├── supabase/          # Supabase client utilities
│   ├── utils/             # Helper functions
│   ├── types.ts           # TypeScript types
│   ├── constants.ts       # Translation keys and constants
│   └── validations.ts     # Zod schemas
├── supabase/              # Database schema and migrations
└── public/                # Static assets
```

## Database Schema

The application uses 8 main tables:
- `services` - Service categories (plumbing, electrical, etc.)
- `locations` - Geographic areas in Cuenca
- `providers` - Service provider profiles
- `provider_services` - Many-to-many relationship
- `provider_locations` - Many-to-many relationship
- `registration_requests` - Provider registration applications
- `reviews` - Customer reviews (Phase 2)
- `admin_users` - Admin access whitelist

## Features

### MVP (Current Phase)
- Browse services and providers
- Filter providers by service, location, English speaking
- WhatsApp contact buttons with pre-filled Spanish messages
- Provider registration form
- Admin panel for managing providers

### Planned (Phase 2)
- Provider self-service dashboard
- Review system
- Advanced search and filtering

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - All rights reserved