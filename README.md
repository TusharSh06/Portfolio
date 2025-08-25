# Tushar Sharma - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills as a Full Stack Developer and MERN Stack Developer. Features a beautiful design with smooth animations, dark/light mode toggle, and all the essential sections for showcasing my projects and skills.

## ✨ Features

### 🎯 Essential Sections
- **Home/Hero** - Professional introduction with animated background
- **About Me** - Bio, career goals, and experience timeline
- **Skills** - Technical skills with progress bars and categories
- **Projects** - Portfolio showcase with search and filtering
- **Experience** - Work history, internships, and freelancing
- **Certificates** - Online courses, hackathons, and awards
- **Contact** - Contact form and social media links

### 🎨 Visual & UX Enhancements
- **Dark/Light Mode Toggle** 🌙
- **Sticky Navbar** with scroll spy (active section highlight)
- **Smooth Scrolling** between sections
- **Animations** (fade-in, slide, staggered project cards)
- **Hover Effects** on project cards and buttons
- **Scroll-to-top Button**
- **Mobile-friendly Responsive Design**
- **Accessibility Features** (keyboard navigation, alt text, aria labels)

### 🔧 Technical Features
- **Search & Filter** for Projects
- **Progress Bars** for skills visualization
- **Timeline Components** for experience and education
- **Interactive Forms** with validation
- **Social Media Integration**
- **SEO Optimized** structure

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tsharmak10/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🛠️ Customization

### Personal Information
This portfolio is already customized with Tushar Sharma's information:

- **Hero Section** (`src/components/Hero.jsx`): Name, role, and tagline
- **About Section** (`src/components/About.jsx`): Bio, timeline, and education
- **Skills Section** (`src/components/Skills.jsx`): Technical skills and levels
- **Projects Section** (`src/components/Projects.jsx`): Triplane and TechGather projects
- **Experience Section** (`src/components/Experience.jsx`): Learning journey and projects
- **Certificates Section** (`src/components/Certificates.jsx`): Bootcamps and certifications
- **Contact Section** (`src/components/Contact.jsx`): Contact details and social links

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `src/index.css`
- **Animations**: Customize animations in the Tailwind config

### Images
- Replace placeholder images with your actual project screenshots
- Add your professional photo in the Hero section
- Update project images in the Projects section

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The website includes a built-in dark/light mode toggle that:
- Automatically detects user's system preference
- Saves user's choice in localStorage
- Provides smooth transitions between themes

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Structured data ready for implementation

## 📦 Dependencies

### Core Dependencies
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Development Dependencies
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Build your project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me directly through the contact form

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Icons** for beautiful icon set
- **Vite** for fast development experience

---

**Happy Coding! 🎉**

Built with ❤️ using React, Tailwind CSS, and Framer Motion
