import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp,FaArrowUp } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Estado para mostrar el botón de scroll hacia arriba
  const location = useLocation(); // <-- Obtiene la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollToTop(window.scrollY > 200); // Muestra el botón si el scroll es mayor a 200px

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // Hace scroll al inicio cuando cambia la ruta
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]); // <-- Ejecuta este efecto cuando cambia la ruta
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Flota', href: '/flota' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-24">
  {/* Logo */}
  <div className="flex items-center justify-start">
    {/* Logo para vista de escritorio */}
    <Link to="/" className="hidden md:flex items-center">
      <div className="logo-container">
        <img
          src="/LogoJoggys.png" // Ruta correcta desde la carpeta public
          alt="Joggys Tours Logo"
          className="logo h-24 w-auto object-contain" // Clase personalizada para el logo
        />
      </div>
    </Link>

    {/* Logo para vista móvil */}
    <Link to="/" className="flex md:hidden items-center">
      <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-terra-cotta to-orange-400">
        JOGGYS<span className="text-orange-500">TOURS</span>
      </span>
    </Link>
</div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
  {navigation.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={`text-sm font-medium transition-colors duration-200 ${
        location.pathname === '/' // Verifica si estás en la HomePage
          ? isScrolled
            ? 'text-charcoal hover:text-terra-cotta' // Color para HomePage cuando se hace scroll
            : 'text-white hover:text-orange-600' // Color para HomePage sin scroll
          : isScrolled
          ? 'text-charcoal hover:text-terra-cotta' // Color para otras páginas cuando se hace scroll
          : 'text-charcoal hover:text-peach' // Color predeterminado para otras páginas
      }`}
    >
      {item.name}
    </Link>
  ))}
</nav>

          {/* Contact & Mobile menu button */}  
          <div className="flex items-center space-x-4">
  <a
    href="tel:999651140"
    className={`hidden sm:flex items-center space-x-1 ${
      isScrolled ? 'text-charcoal hover:text-elegant-blue' : 'text-charcoal hover:text-peach'
    }`}
  >
    <FaPhone className="text-sm" />
    <span className="text-sm font-medium">Llamar</span>
  </a>
  <a
    href="https://wa.me/51999651140"
    target="_blank"
    rel="noopener noreferrer"
    className={`hidden sm:flex items-center space-x-1 ${
      isScrolled ? 'text-charcoal hover:text-terra-cotta' : 'text-charcoal hover:text-peach'
    }`}
  >
    <FaWhatsapp className="text-lg" />
    <span className="text-sm font-medium">WhatsApp</span>
  </a>

  {/* Mobile menu button */}
  <button
    onClick={toggleMobileMenu}
    className="md:hidden p-2 rounded-md focus:outline-none"
    aria-expanded={isMobileMenuOpen}
  >
    {isMobileMenuOpen ? (
      <IoClose className={`h-6 w-6 ${isScrolled ? 'text-charcoal' : 'text-orange-500'}`} />
    ) : (
      <HiOutlineMenuAlt3 className={`h-6 w-6 ${isScrolled ? 'text-charcoal' : 'text-orange-500'}`} />
    )}
  </button>
</div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-ivory shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-base font-medium text-charcoal hover:text-terra-cotta border-b border-peach/50"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 py-4">
              <a
                href="tel:999651140"
                className="flex items-center space-x-1 text-charcoal hover:text-elegant-blue"
                onClick={closeMobileMenu}
              >
                <FaPhone className="text-sm" />
                <span className="text-sm font-medium">Llamar</span>
              </a>
              <a
                href="https://wa.me/51999651140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-charcoal hover:text-terra-cotta"
                onClick={closeMobileMenu}
              >
                <FaWhatsapp className="text-lg" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
      
    </motion.header>

    {/* WhatsApp button */}
    <a
      href="https://wa.me/51999651140"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 animate-heartbeat z-50"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-5 w-5" />
    </a>
       {/* Scroll to top button */}
    {showScrollToTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-terra-cotta text-white shadow-lg hover:bg-elegant-blue transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    )}
    </>
  );
};

export default Header;
