import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Compañía',
      links: [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre Nosotros', href: '/nosotros' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Flota', href: '/flota' },
        { name: 'Contacto', href: '/contacto' },
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Transporte de Personal', href: '/servicios#personal' },
        { name: 'Turismo y Excursiones', href: '/servicios#turismo' },
        { name: 'Eventos Corporativos', href: '/servicios#corporativo' },
        { name: 'Traslados Aeropuerto', href: '/servicios#aeropuerto' },
        { name: 'Transporte Escolar', href: '/servicios#escolar' },
      ]
    },
    {
      title: 'Flota',
      links: [
        { name: 'Vans', href: '/flota?tipo=van' },
        { name: 'Sprinters', href: '/flota?tipo=sprinter' },
        { name: 'Minibuses', href: '/flota?tipo=minibus' },
        { name: 'Buses', href: '/flota?tipo=bus' },
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold">
                JOGGYS<span className="text-terra-cotta">TOURS</span>
              </span>
            </Link>
            <p className="text-silver text-sm">
              Servicios de transporte de calidad, confort y seguridad para satisfacer todas tus necesidades de movilidad.
            </p>
            <div className="space-y-2">
              <a href="tel:+123456789" className="flex items-center text-silver hover:text-terra-cotta transition duration-300">
                <FaPhone className="mr-2" />
                <span>999 651 140</span>
              </a>
              <a href="mailto:reservas@joggystours.com.pe" className="flex items-center text-silver hover:text-terra-cotta transition duration-300">
                <FaEnvelope className="mr-2" />
                <span>reservas@joggystours.com</span>
              </a>
              <div className="flex items-start text-silver">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. San Luis Nro. 2585</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-silver hover:text-terra-cotta transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate/30 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-silver hover:text-elegant-blue transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-silver hover:text-terra-cotta transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-silver hover:text-elegant-blue transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://wa.me/51999651140" className="text-silver hover:text-terra-cotta transition duration-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <p className="text-slate text-sm">
            &copy; {currentYear} JoggysTours. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
