import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Camera, 
  Wrench, 
  Monitor, 
  AlertCircle, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Info,
  Building2,
  Home as HomeIcon,
  ShoppingBag,
  Factory,
  Check,
  ChevronDown,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// SEO Schema Component
const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rohini Safecam",
    "image": "https://ais-pre-gpou7zqyehp5lnviswhtps-545278927516.asia-southeast1.run.app/assets/logo.png",
    "@id": "https://ais-pre-gpou7zqyehp5lnviswhtps-545278927516.asia-southeast1.run.app/#home",
    "url": "https://ais-pre-gpou7zqyehp5lnviswhtps-545278927516.asia-southeast1.run.app/",
    "telephone": "+918972000660",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hingalganj Patherdabi, Hingalganj",
      "addressLocality": "North 24 Parganas",
      "addressRegion": "West Bengal",
      "postalCode": "743435",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.4645,
      "longitude": 88.9806
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/918972000660"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const contactInfo = {
    phone: "8972000660",
    email: "info@rohinisafecam.com", // Fallback
    address: "Hingalganj Patherdabi, Hingalganj, North 24 Parganas, West Bengal, 743435",
    whatsapp: "https://wa.me/918972000660"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'services', 'products', 'industries', 'benefits', 'process', 'testimonials', 'portfolio', 'faq', 'contact', 'quote'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Products', id: 'products' },
    { name: 'Industries', id: 'industries' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    {
      title: "CCTV Installation",
      description: "Professional end-to-end setup for homes, offices, and industrial complexes.",
      icon: <Camera className="w-8 h-8 text-blue-500" />
    },
    {
      title: "CCTV Sales",
      description: "Authorized dealer of top brands like Hikvision, CP Plus, and Dahua.",
      icon: <ShoppingBag className="w-8 h-8 text-blue-500" />
    },
    {
      title: "DVR/NVR Setup",
      description: "Expert configuration of recording systems for seamless 24/7 monitoring.",
      icon: <Monitor className="w-8 h-8 text-blue-500" />
    },
    {
      title: "CCTV Repair",
      description: "Quick troubleshooting and repair for cameras, cables, and power units.",
      icon: <Wrench className="w-8 h-8 text-blue-500" />
    },
    {
      title: "AMC Maintenance",
      description: "Periodic health checks and preventive maintenance to ensure zero downtime.",
      icon: <Shield className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Remote Monitoring",
      description: "View your security feed anytime, anywhere on your mobile phone.",
      icon: <AlertCircle className="w-8 h-8 text-blue-500" />
    }
  ];

  const products = [
    { title: "Dome Cameras", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400" },
    { title: "Bullet Cameras", image: "https://images.unsplash.com/photo-1528312270733-4a18037344b5?auto=format&fit=crop&q=80&w=400" },
    { title: "PTZ Cameras", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400" },
    { title: "IP Cameras", image: "https://images.unsplash.com/photo-1510511459019-5dee9954ff92?auto=format&fit=crop&q=80&w=400" },
    { title: "DVR Systems", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400" },
    { title: "NVR Systems", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400" }
  ];

  const industries = [
    { title: "Homes", icon: <HomeIcon className="w-6 h-6" /> },
    { title: "Shops", icon: <ShoppingBag className="w-6 h-6" /> },
    { title: "Offices", icon: <Building2 className="w-6 h-6" /> },
    { title: "Warehouses", icon: <Factory className="w-6 h-6" /> },
    { title: "Factories", icon: <Building2 className="w-6 h-6" /> },
    { title: "Apartments", icon: <HomeIcon className="w-6 h-6" /> }
  ];

  const faqs = [
    { q: "What is the warranty on your CCTV systems?", a: "We provide up to 2 years of manufacturer warranty on cameras and recorders, plus 1 year of free service warranty from Rohini Safecam." },
    { q: "Can I view my camera feed on my phone?", a: "Yes, all our modern systems support remote viewing via a mobile app. We will set this up for you during installation." },
    { q: "Do you offer Annual Maintenance Contracts (AMC)?", a: "Absolutely. We offer competitive AMC packages for residential, commercial, and industrial clients to ensure your security system never fails." },
    { q: "How long does the installation take?", a: "Most residential installations are completed within 4-6 hours. Larger commercial projects depend on the number of cameras and wiring complexity." }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#0b0e14] text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      <LocalBusinessSchema />
      
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900/50 border-b border-slate-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs font-medium tracking-widest text-slate-400 uppercase">
          <div className="flex items-center space-x-6">
            <a href={`tel:+91${contactInfo.phone}`} className="flex items-center hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-blue-500" />
              Call: {contactInfo.phone}
            </a>
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-2 text-blue-500" />
              {contactInfo.address}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 flex items-center">
              <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={() => scrollTo('home')} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Camera className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">Rohini <span className="text-blue-500">Safecam</span></span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-white ${activeSection === link.id ? 'text-blue-400' : 'text-slate-400'}`}
                >
                  {link.name}
                </button>
              ))}
              <a 
                href={`tel:+91${contactInfo.phone}`}
                className="ml-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-700 text-sm font-bold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                {contactInfo.phone}
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#09090b] border-b border-gray-800 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-lg font-medium text-gray-300 hover:text-blue-400 py-2 border-b border-gray-800/50"
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollTo('quote')}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold"
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-slate-800">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0 text-white">
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920" 
              alt="CCTV Security" 
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Security & Surveillance Solutions</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Protect What Matters <br /><span className="text-blue-500">Professionally.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                Sales • Installation • Repair • AMC Services in Hingalganj & North 24 Parganas. Advanced security for homes, shops, and offices.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollTo('quote')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  Get Free Quote
                </button>
                <a 
                  href={`tel:+91${contactInfo.phone}`}
                  className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all"
                >
                  Call: {contactInfo.phone}
                </a>
              </div>
              <div className="mt-12 flex items-center space-x-8 opacity-70 grayscale">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">500+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Installations</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">100%</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Satisfaction</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">24/7</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#0b0e14]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Our Expertise</h2>
              <p className="text-4xl lg:text-5xl font-black text-white">Comprehensive CCTV Services</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all group"
                >
                  <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => scrollTo('quote')}
                    className="text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
                  >
                    Details
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551808192-34bbe9313a7c?auto=format&fit=crop&q=80&w=600" 
                    alt="About Rohini Safecam" 
                    className="rounded-2xl shadow-2xl relative z-10 grayscale border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl z-20 shadow-2xl">
                    <p className="text-4xl font-extrabold text-white">10+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Years Exp</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Who We Are</h2>
                  <h3 className="text-4xl lg:text-5xl font-black text-white leading-[1.1]">Trusted Guardian in <br />North 24 Parganas</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Rohini Safecam is Hingalganj's premier security partner. We combine cutting-edge hardware with localized service to ensure your safety is never compromised.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-blue-500 font-bold mb-1">Local Service</div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Doorstep Support</p>
                  </div>
                  <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-blue-500 font-bold mb-1">Certified Brands</div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Hikvision Partner</p>
                  </div>
                </div>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-bold transition-all shadow-xl"
                >
                  Visit Our Office
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Inventory</h2>
                <p className="text-4xl lg:text-5xl font-black mb-0">High-Performance Hardware</p>
              </div>
              <button className="text-blue-500 font-bold hover:underline flex items-center">
                Download Catalog <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl aspect-square bg-[#18181b] border border-gray-800">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-xl font-bold mb-2">{product.title}</h4>
                    <button 
                      onClick={() => scrollTo('quote')}
                      className="text-xs uppercase tracking-widest font-black text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-blue-100 font-black uppercase tracking-widest text-sm mb-4">Why CCTV?</h2>
                <p className="text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">Real Security, Real Peace of Mind</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { t: "Theft Prevention", d: "Deters intruders before they act." },
                    { t: "Remote Monitoring", d: "Watch your property from anywhere." },
                    { t: "Safety Improvement", d: "Monitor family and employees 24/7." },
                    { t: "Evidence Recording", d: "High-def footage for police support." },
                    { t: "Insurance Support", d: "Reduce your premiums significantly." },
                    { t: "24/7 Vigilance", d: "Cameras never sleep or take breaks." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1 leading-tight">{benefit.t}</p>
                        <p className="text-blue-100 text-sm opacity-80">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-white uppercase tracking-tight">Need Urgent Install?</p>
                  <p className="text-blue-100 opacity-80">Call us for same-day survey </p>
                </div>
                <a 
                  href={`tel:+91${contactInfo.phone}`}
                  className="w-full py-5 bg-white text-blue-600 rounded-full font-black text-2xl flex items-center justify-center shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Service Area</h2>
              <p className="text-4xl lg:text-5xl font-black mb-6">Solutions for Every Sector</p>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((item, idx) => (
                <div key={idx} className="p-8 bg-[#18181b] rounded-3xl border border-gray-800 flex flex-col items-center text-center group hover:bg-blue-600 transition-all">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                    <div className="text-blue-400 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                  </div>
                  <p className="font-bold text-lg group-hover:text-white transition-all">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-[#101014]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-12 relative">
              <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent" />
              {[
                { n: "01", t: "Site Survey", d: "Our expert visits your location to identify blind spots." },
                { n: "02", t: "Custom Quote", d: "Transparent pricing based on your specific needs." },
                { n: "03", t: "Installation", d: "Fast, tidy wiring and camera setup by experts." },
                { n: "04", t: "Support", d: "Mobile setup and training for 24/7 monitoring." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-8 shadow-xl shadow-blue-500/20">
                    {step.n}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{step.t}</h4>
                  <p className="text-gray-400 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#09090b]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-black text-sm uppercase tracking-widest mb-4">Any Questions?</h2>
              <p className="text-4xl font-black mb-0">Frequently Asked Questions</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#18181b] border border-gray-800 rounded-3xl overflow-hidden">
                  <button className="w-full p-8 flex items-center justify-between text-left group">
                    <span className="text-lg font-bold group-hover:text-blue-400 transition-colors">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </button>
                  <div className="px-8 pb-8 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Gallery */}
        <section id="portfolio" className="py-24 bg-[#101014]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Our Work</h2>
              <p className="text-4xl lg:text-5xl font-black mb-6">Recent Security Projects</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-800">
                  <img 
                    src={`https://images.unsplash.com/photo-${1557862920 + i}?auto=format&fit=crop&q=80&w=400`} 
                    alt={`Portfolio ${i}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="py-24 bg-[#0b0e14]">
          <div className="max-w-7xl mx-auto px-4 lg:flex gap-16 items-center">
            <div className="lg:w-3/5 mb-12 lg:mb-0">
              <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Security Assessment</h2>
              <p className="text-5xl font-black text-white leading-tight mb-8">Get Your Free <span className="text-blue-500">Security Quote</span> Today.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-blue-500 mb-4"><Shield className="w-8 h-8" /></div>
                  <div className="font-bold text-white mb-1">CCTV Setup</div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Hikvision & CP Plus</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-green-500 mb-4"><Wrench className="w-8 h-8" /></div>
                  <div className="font-bold text-white mb-1">Expert Repair</div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Fast Doorstep Fix</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Free Estimate</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-widest">Guaranteed response within 2 hours</p>
                </div>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-500 text-white" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-500 text-white" />
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-500 text-slate-400">
                    <option>Installation Service</option>
                    <option>AMC Maintenance</option>
                    <option>Camera Repair</option>
                  </select>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-600/20 transition-transform active:scale-95 uppercase tracking-widest text-xs">
                    Submit Request
                  </button>
                </form>
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] text-slate-500 uppercase font-black tracking-widest">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Emergency Line Active Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Find Us</h2>
                <p className="text-4xl lg:text-5xl font-black mb-10">Our Main Hub</p>
                <div className="space-y-8 mb-12">
                  <div className="flex">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-gray-800">
                      <MapPin className="text-blue-500 w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-gray-500 mb-1">Our Address</p>
                      <p className="text-xl font-bold italic leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-gray-800">
                      <Phone className="text-blue-500 w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-gray-500 mb-1">Call Us Anywhere</p>
                      <a href={`tel:+91${contactInfo.phone}`} className="text-3xl font-black text-blue-500 hover:underline">{contactInfo.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="bg-[#18181b] p-8 rounded-3xl border border-gray-800">
                  <h5 className="text-lg font-black mb-4">Service Area Coverage</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Hingalganj</div>
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Hasnabad</div>
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Basirhat</div>
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Taki</div>
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Sandeshkhali</div>
                    <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> North 24 Parganas</div>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative border border-gray-800 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-1000 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.38243048924!2d88.9806!3d22.4645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01ecad59132d4b%3A0x6b87d264582f3ef7!2sHingalganj%2C%20West%20Bengal%20743435!5e0!3m2!1sen!2sin!4v1714261234567!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rohini Safecam Location"
                ></iframe>
                <div className="absolute bottom-6 left-6">
                  <a 
                    href="https://www.google.com/maps/dir//Hingalganj,+West+Bengal+743435" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Get Directions <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            <div className="space-y-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg">
                  <Camera className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white uppercase">Rohini Safecam</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Strategic security implementations across Hingalganj. Authoritative experts in surveillance technology.
              </p>
            </div>
            <div className="flex-1 flex flex-wrap gap-16 lg:justify-center">
              <div>
                <h6 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-6">Service Areas</h6>
                <div className="text-sm font-medium text-slate-300 space-y-1">
                  <p>Hingalganj Patherdabi</p>
                  <p>North 24 Parganas</p>
                  <p>West Bengal, 743435</p>
                </div>
              </div>
              <div>
                <h6 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-6">Navigation</h6>
                <div className="text-sm font-medium text-slate-300 flex flex-col space-y-2">
                  <button onClick={() => scrollTo('home')} className="text-left hover:text-white">Home</button>
                  <button onClick={() => scrollTo('services')} className="text-left hover:text-white">Services</button>
                  <button onClick={() => scrollTo('contact')} className="text-left hover:text-white">Contact</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={contactInfo.whatsapp}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-500/10"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-600">
              &copy; {new Date().getFullYear()} Rohini Safecam • All Systems Operational
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
        <a 
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <MessageCircle className="w-7 h-7" />
          </motion.div>
          <span className="absolute right-full mr-4 px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat on WhatsApp</span>
        </a>
        <a 
          href={`tel:+91${contactInfo.phone}`}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:hidden"
        >
          <Phone className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Support</span>
        </a>
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-gray-900 border border-gray-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-800 transition-all group"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#101014] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Client Feedback</h2>
            <p className="text-4xl lg:text-5xl font-black text-white">Trusted by Local Businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "S. Mondal", role: "Shop Owner", text: "Rohini Safecam installed 8 cameras in my jewelry shop. The clarity is amazing and the mobile app is very easy to use. Highly recommended in Hingalganj." },
              { name: "P. Das", role: "Homeowner", text: "Excellent after-sales service. Had a minor issue with the DVR after 6 months and they fixed it within 4 hours of my call." },
              { name: "R. Ghosh", role: "Factory Manager", text: "The most professional CCTV team in North 24 Parganas. Their AMC plan gives us peace of mind knowing our security is always active." }
            ].map((t, idx) => (
              <div key={idx} className="p-10 bg-slate-900 border border-slate-800 rounded-3xl relative">
                <div className="flex text-yellow-500 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white text-xl">{t.name}</p>
                  <p className="text-slate-500 text-sm uppercase tracking-widest">{t.role}</p>
                </div>
                <div className="absolute top-10 right-10 opacity-10">
                  <MessageCircle className="w-16 h-16 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
