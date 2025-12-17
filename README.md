# Modern Portfolio Website

A stunning, fully responsive portfolio website built with Next.js 14, featuring smooth animations, 3D graphics, and a professional dark mode design. Showcasing projects, skills, and experience with interactive elements and modern UI/UX.

## ✨ Features

- **🌙 Dark Mode Default**: Beautiful dark theme with light mode toggle
- **🎨 Smooth Animations**: Framer Motion for stunning scroll-based animations
- **🎯 3D Graphics**: Three.js integration with interactive spinning logo
- **📱 Fully Responsive**: Perfect on all devices - mobile, tablet, and desktop
- **🔄 Project Card Flip**: Interactive flip cards showing project details
- **💰 Pricing Section**: Modern pricing cards with glassmorphism effects
- **📧 Contact Form**: Functional contact form with validation
- **🗺️ Google Maps**: Embedded map with custom location marker
- **⚡ Performance Optimized**: Fast loading with Next.js 14 optimizations
- **♿ Accessible**: WCAG-friendly with keyboard navigation support

## 📑 Sections

1. **🏠 Hero**: Dynamic introduction with typewriter effect and 3D spinning logo
2. **👤 About**: Personal info, skills with progress bars, and statistics
3. **💼 Projects**: Interactive project cards with filter functionality and flip animation
4. **💵 Pricing**: Service packages with modern card design
5. **📬 Contact**: Contact form with email, phone, location info and embedded Google Maps

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules with custom animations
- **Animations**: Framer Motion
- **3D Graphics**: Three.js & React Three Fiber
- **Icons**: React Icons (Font Awesome)
- **Typewriter**: React Simple Typewriter
- **Maps**: Google Maps Embed API
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzRohit45/Portfolio-new.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio-new
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🎨 Customization

### Personal Information

Update your information in these files:

- **Hero Section**: `/components/sections/Hero.js` - Name, role, description
- **About Section**: `/components/sections/About.js` - Bio, skills, stats
- **Projects**: `/components/sections/Projects.js` - Your projects with links
- **Pricing**: `/components/sections/Pricing.js` - Service packages
- **Contact**: `/components/sections/Contact.js` - Email, phone, location
- **Footer**: `/components/layout/Footer.js` - Social media links

### Images

Replace images in `/public/images/`:
- `profile.jpg` - Your profile picture
- `project1.png`, `project2.png`, etc. - Project screenshots

### Theme Colors

Edit CSS variables in `/app/globals.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-dark: #1f2937;
  --text-light: #f9fafb;
}
```

### Google Maps

Update the map location in `/components/sections/Contact.js`:
- Change coordinates in the iframe `src` URL
- Update location name in the contact info

## 📦 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel automatically detects Next.js settings!

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Three.js for 3D graphics
- React Icons for beautiful icons
- Vercel for hosting
- All the incredible open-source contributors
