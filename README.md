# Hathira Clinic - Next.js + Sanity CMS

A modern, responsive website for Hathira Clinic built with Next.js 15, Sanity CMS, and Tailwind CSS. This project converts the original HTML website into a dynamic, content-managed solution.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Headless CMS**: Sanity for content management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Framer Motion for smooth interactions
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
hathira-clinic/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingButtons.tsx
│   │   └── ClientWrapper.tsx
│   └── types/              # TypeScript types
│       └── index.ts
├── sanity/                 # Sanity CMS configuration
│   ├── schemas/           # Content schemas
│   │   ├── hero.ts
│   │   ├── service.ts
│   │   ├── contactInfo.ts
│   │   └── index.ts
│   ├── sample-data.ts     # Sample content
│   └── sanity.config.ts
├── lib/                   # Utility functions
│   ├── sanity.ts         # Sanity client
│   └── queries.ts        # GROQ queries
└── public/               # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account

### 1. Install Dependencies

```bash
npm install
```

### 2. Sanity Setup

1. **Install Sanity CLI** (if not already installed):
```bash
npm install -g @sanity/cli
```

2. **Login to Sanity**:
```bash
sanity login
```

3. **Start Sanity Studio**:
```bash
npm run sanity
```

4. **Access Sanity Studio**: Open http://localhost:3333/studio

### 3. Content Setup

1. **Create Content in Sanity Studio**:
   - Go to http://localhost:3333/studio
   - Create a new "Hero Section" document
   - Create "Service" documents for each treatment category
   - Create a "Contact Information" document

2. **Or Import Sample Data** (optional):
   - Use the sample data from `sanity/sample-data.ts`
   - Copy the data structure into your Sanity documents

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Content Management

### Hero Section
- **Title**: Main headline
- **Subtitle**: Supporting text
- **CTA Text**: Button text
- **Background Image**: Hero background
- **Gradient Colors**: Animated background colors

### Services
- **Title**: Service name (e.g., "Acne", "Hair Fall")
- **Category**: skin, hair, or body
- **Icon**: Lucide icon name
- **Treatments**: Array of treatment objects with:
  - Name
  - Description
  - Benefits

### Contact Information
- **Phone**: Contact number
- **Email**: Email address
- **Address**: Physical address
- **Hours**: Operating hours
- **Social Media**: Social media links
- **Map Embed**: Google Maps embed URL

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    400: '#D4A59A', // Main accent color
    // ... other shades
  }
}
```

### Fonts
The project uses Inter and Geist fonts. To change fonts:

1. Update `src/app/layout.tsx`
2. Modify `tailwind.config.js`
3. Update `src/app/globals.css`

### Animations
Animations are handled by Framer Motion and CSS. Key animation files:
- `src/app/globals.css` - CSS animations
- `tailwind.config.js` - Tailwind animations
- Component files - Framer Motion animations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:
   - Push code to GitHub
   - Connect repository to Vercel
   - Deploy automatically

2. **Environment Variables**:
   - Add Sanity project ID and dataset
   - Add API token for production

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Collapsible service cards on mobile
- Floating action buttons

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start Next.js dev server
npm run sanity       # Start Sanity Studio

# Building
npm run build        # Build for production
npm run start        # Start production server

# Sanity
npm run sanity:build # Build Sanity Studio
npm run sanity:deploy # Deploy Sanity Studio
```

## 📊 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **SEO**: Meta tags, structured data
- **Accessibility**: ARIA labels, keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Hathira Clinic.

## 🆘 Support

For technical support or questions:
- Email: info@hathiraclinic.com
- Phone: +91 8075 870 652

---

**Built with ❤️ for Hathira Clinic**# hathira-era
