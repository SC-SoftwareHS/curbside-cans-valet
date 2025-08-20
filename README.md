# Curbside Cans Valet - Marketing Website

A professional marketing website for a teen-run trash can valet service in La Jolla, San Diego. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Mobile-First Design**: Responsive design optimized for all devices
- **Lead Capture System**: Form validation with local file storage and optional email integration
- **SEO Optimized**: Meta tags, OG images, sitemap, robots.txt, JSON-LD structured data
- **Zero-Cost Infrastructure**: Designed to run on free tiers (Vercel, optional Resend)
- **Performance Focused**: Optimized images, prefetching, fast loading times

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd curbside-cans-valet
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Required
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Optional - Email notifications
   ADMIN_EMAIL=hello@curbsidecansvalet.com
   RESEND_API_KEY=
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
curbside-cans-valet/
├── app/                          # Next.js 14 App Router
│   ├── (marketing)/             # Route group for marketing pages
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── faq/                 # FAQ page
│   │   ├── gallery/             # Gallery page
│   │   ├── how-it-works/        # How it works page
│   │   ├── pricing/             # Pricing page
│   │   ├── service-area/        # Service area page
│   │   ├── testimonials/        # Testimonials page
│   │   ├── layout.tsx           # Marketing layout with nav/footer
│   │   └── page.tsx             # Homepage
│   ├── api/
│   │   └── leads/               # Lead submission API
│   ├── manage-billing/          # Billing portal placeholder
│   ├── og/                      # OG image generation
│   ├── start/                   # Lead capture form page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── robots.ts                # Robots.txt generation
│   └── sitemap.ts               # Sitemap generation
├── components/
│   ├── sections/                # Page sections
│   │   ├── faq-accordion.tsx
│   │   ├── feature-grid.tsx
│   │   ├── hero.tsx
│   │   ├── lead-form.tsx
│   │   ├── pricing-cards.tsx
│   │   ├── step-list.tsx
│   │   └── testimonial.tsx
│   └── ui/                      # Reusable UI components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── container.tsx
│       ├── footer.tsx
│       ├── nav.tsx
│       └── section.tsx
├── lib/                         # Utilities and configuration
│   ├── utils.ts                 # Utility functions
│   └── validators.ts            # Zod schemas
├── public/                      # Static assets
└── content/                     # MDX content files (future)
```

## 🔧 Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full URL of your site |
| `ADMIN_EMAIL` | No | Email for lead notifications (optional) |
| `RESEND_API_KEY` | No | Resend API key for emails (optional) |

### Optional Services Setup

#### Resend Email (Optional)
1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add the API key to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
ADMIN_EMAIL=hello@curbsidecansvalet.com  # Optional for email notifications
RESEND_API_KEY=your-resend-key  # Optional for email notifications
```

## 📝 Content Management

### Editing Copy
Most content is currently in the React components, but the structure supports MDX files for easy content updates:

- **Hero Section**: `components/sections/hero.tsx`
- **Features**: `components/sections/feature-grid.tsx`
- **Pricing**: `components/sections/pricing-cards.tsx`
- **FAQ**: `components/sections/faq-accordion.tsx`
- **Testimonials**: `components/sections/testimonial.tsx`

### Adding New Pages
1. Create a new folder in `app/(marketing)/`
2. Add a `page.tsx` file with proper metadata
3. Update navigation in `components/ui/nav.tsx`
4. Update sitemap in `app/sitemap.ts`

## 🛠 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Style
- **TypeScript**: Strict mode enabled, explicit types preferred
- **React**: Server components by default, client components when needed
- **Tailwind**: Mobile-first responsive design
- **Imports**: Absolute imports with `@/` prefix

## 🔮 Future Enhancements

### TODO: Trash-Day Lookup Module
A future module will allow customers to input their address and get their specific trash collection day. This will integrate with the lead form to provide personalized service information.

**Implementation Notes:**
- Integration point: `/start` page lead form
- Data source: San Diego waste collection schedules
- User flow: Address input → Lookup → Service day display → Form completion

### Other Planned Features
- Customer dashboard with service history
- Stripe payment integration
- Automated reminder system (cron jobs)
- Admin panel for lead management
- Mobile app for route optimization

## 📊 Analytics & Monitoring

### Vercel Analytics
Add `@vercel/analytics` for basic page view tracking:
```bash
npm install @vercel/analytics
```

### Performance Monitoring
- Lighthouse CI integration
- Core Web Vitals tracking
- Error monitoring setup

## 🆘 Support & Maintenance

### For Teenage Operators
This site is designed to be maintainable by students with basic technical knowledge:

1. **Content Updates**: Most copy can be edited in component files
2. **Adding Testimonials**: Edit `components/sections/testimonial.tsx`
3. **Pricing Changes**: Update `components/sections/pricing-cards.tsx`
4. **Service Area**: Modify `app/(marketing)/service-area/page.tsx`

### Common Tasks
- **Check leads**: Run `npm run view-leads` to see all customer signups
- **Update pricing**: Edit pricing components
- **Add testimonials**: Copy existing format in testimonial components
- **Pause/resume service**: Temporary redirect or maintenance page

## 📞 Technical Support

For technical issues beyond basic content updates:
- Check the GitHub issues
- Review deployment logs in Vercel
- Contact the original developer for major changes

## 🏗 Architecture Decisions

### Why This Stack?
- **Next.js 14**: Modern React framework with excellent performance
- **Tailwind CSS**: Rapid UI development with consistency
- **TypeScript**: Type safety and better developer experience
- **Vercel**: Zero-config deployment with excellent performance
- **Optional integrations**: Can work without external services

### Performance Optimizations
- Server-side rendering for SEO
- Image optimization with next/image
- Route prefetching for instant navigation
- Minimal JavaScript bundles
- Edge-optimized API routes

### Security Considerations
- Input validation with Zod
- Rate limiting on form submissions
- Sanitized user inputs
- No sensitive data in client-side code
- HTTPS enforcement in production

## 📄 License

This project is private and proprietary to Curbside Cans Valet.

---

Built with ❤️ for young entrepreneurs in La Jolla
