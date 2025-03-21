import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-elegant-blue to-terra-cotta">
              JOGGYS<span className="text-terra-cotta">TOURS</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-charcoal hover:text-terra-cotta' : 'text-white hover:text-peach'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+123456789"
              className={`hidden sm:flex items-center space-x-1 ${
                isScrolled ? 'text-charcoal hover:text-elegant-blue' : 'text-white hover:text-peach'
              }`}
            >
              <FaPhone className="text-sm" />
              <span className="text-sm font-medium">Llamar</span>
            </a>
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center space-x-1 ${
                isScrolled ? 'text-charcoal hover:text-terra-cotta' : 'text-white hover:text-peach'
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
                <IoClose className={`h-6 w-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
              ) : (
                <HiOutlineMenuAlt3 className={`h-6 w-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
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
                href="tel:+123456789"
                className="flex items-center space-x-1 text-charcoal hover:text-elegant-blue"
                onClick={closeMobileMenu}
              >
                <FaPhone className="text-sm" />
                <span className="text-sm font-medium">Llamar</span>
              </a>
              <a
                href="https://wa.me/123456789"
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
  );
};

export default Header;
