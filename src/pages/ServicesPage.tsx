import { motion } from 'framer-motion';
import { FaUsers, FaRoad, FaShieldAlt, FaMapMarkerAlt, FaGraduationCap, FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Servicios principales
  const mainServices = [
    {
      id: 'personal',
      title: 'Transporte de Personal',
      description: 'Ofrecemos servicios de transporte eficientes y puntuales para empresas que necesitan movilizar a su personal. Con nuestra flota moderna y conductores profesionales, garantizamos la comodidad y seguridad de sus empleados.',
      icon: <FaUsers className="text-5xl text-orange-500 mb-6" />,
      features: [
        'Puntualidad garantizada',
        'Conductores profesionales y capacitados',
        'Vehículos modernos con aire acondicionado',
        'Wi-Fi a bordo para mayor productividad',
        'Planes personalizados según necesidades de la empresa',
        'Monitoreo GPS en tiempo real'
      ],
      image: '/image/CBR448/IMG_0908.jpg',

    },
    {
      id: 'turismo',
      title: 'Servicios Turísticos',
      description: 'Descubre los mejores destinos turísticos con nuestros servicios especializados. Desde excursiones de un día hasta viajes prolongados, nuestros guías expertos le mostrarán lo mejor de cada lugar con el máximo confort.',
      icon: <FaRoad className="text-5xl text-elegant-blue mb-6" />,
      features: [
        'Guías turísticos certificados y bilingües',
        'Recorridos personalizados según intereses',
        'Vehículos con amplias ventanas panorámicas',
        'Información detallada de cada destino',
        'Refrigerios y amenidades a bordo',
        'Asistencia 24/7 durante todo el recorrido'
      ],
      image: '/image/f4s958/minibus3.jpg'
    },
    {
      id: 'vip',
      title: 'Transporte VIP',
      description: 'Para quienes buscan exclusividad y máxima comodidad, nuestro servicio VIP ofrece una experiencia de viaje única. Ideal para ejecutivos, delegaciones especiales o eventos corporativos donde cada detalle cuenta.',
      icon: <FaShieldAlt className="text-5xl text-orange-500 mb-6" />,
      features: [
        'Vehículos de lujo con interiores premium',
        'Asientos de cuero totalmente reclinables',
        'Servicio de mayordomo a bordo (opcional)',
        'Bebidas y aperitivos gourmet',
        'Sistemas de entretenimiento individual',
        'Máxima privacidad con cristales polarizados'
      ],
      image: '/image/f4a965/965_1.jpg'
    },
  ];

  // Servicios adicionales
  const additionalServices = [
    {
      id: 'aeropuerto',
      title: 'Traslados Aeropuerto',
      description: 'Llegue o salga del aeropuerto con total comodidad y sin preocupaciones. Nuestro servicio de traslados garantiza puntualidad y un viaje relajado.',
      icon: <FaPlane className="text-3xl text-elegant-blue mb-4" />
    },
    {
      id: 'corporativo',
      title: 'Eventos Corporativos',
      description: 'Coordinamos la logística de transporte para sus eventos empresariales, convenciones o conferencias, adaptándonos a sus necesidades específicas.',
      icon: <FaUsers className="text-3xl text-orange-500 mb-4" />
    },
    {
      id: 'escolar',
      title: 'Transporte Escolar',
      description: 'Ofrecemos un servicio seguro y confiable para instituciones educativas, con unidades especialmente adaptadas y conductores capacitados para el transporte de estudiantes.',
      icon: <FaGraduationCap className="text-3xl text-elegant-blue mb-4" />
    }
  ];

  return (
    <div className="bg-gray-50 pt-16 pb-24">
      {/* Hero Section */}
      <div className="bg-elegant-blue py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nuestros Servicios
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ofrecemos soluciones de transporte integrales adaptadas a tus necesidades,
              combinando calidad, confort y profesionalismo en cada servicio.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {mainServices.map((service, index) => (
            <motion.section
              key={service.id}
              id={service.id}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="text-center md:text-left">
                  {service.icon}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-elegant-blue/10 text-elegant-blue mr-3 flex-shrink-0">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center md:text-left">
                  <Link
                    to="/contacto"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Solicitar este servicio
                  </Link>
                </div>
              </div>
              <div className={`rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Servicios Adicionales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map(service => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link
                    to={`/contacto?servicio=${service.id}`}
                    className="inline-block text-elegant-blue hover:text-orange-500 font-medium"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-elegant-blue to-blue-800 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Podemos adaptar nuestros servicios según tus necesidades específicas.
              Contáctanos y diseñaremos una solución a tu medida.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-elegant-blue hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Solicitar cotización
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
