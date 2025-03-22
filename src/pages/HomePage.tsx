import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import vehicles from '../data/vehicles';
import VehicleCard from '../components/ui/VehicleCard';
import { FaUsers, FaRoad, FaShieldAlt, FaWifi, FaPhoneAlt } from 'react-icons/fa';

const HomePage = () => {
  const [featuredVehicles] = useState(vehicles.slice(0, 4));

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

  // Services offered
  const services = [
    {
      title: 'Transporte de Personal',
      description: 'Servicio confiable y puntual para empresas que necesitan transportar a sus empleados.',
      icon: <FaUsers className="text-4xl text-terra-cotta mb-4" />,
      link: '/servicios#personal'
    },
    {
      title: 'Servicios Turísticos',
      description: 'Excursiones, city tours y viajes personalizados con guías especializados.',
      icon: <FaRoad className="text-4xl text-elegant-blue mb-4" />,
      link: '/servicios#turismo'
    },
    {
      title: 'Transporte VIP',
      description: 'Vehículos de lujo para ejecutivos y clientes que buscan máximo confort.',
      icon: <FaShieldAlt className="text-4xl text-copper mb-4" />,
      link: '/servicios#vip'
    }
  ];

  // Features highlighted
  const features = [
    { icon: <FaUsers className="text-2xl text-elegant-blue" />, title: 'Vehículos para todos los grupos' },
    { icon: <FaWifi className="text-2xl text-terra-cotta" />, title: 'Wi-Fi gratuito en toda la flota' },
    { icon: <FaShieldAlt className="text-2xl text-copper" />, title: 'Conductores profesionales y certificados' },
    { icon: <FaPhoneAlt className="text-2xl text-sand" />, title: 'Atención 24/7' }
  ];

  // Hero Slides
  const heroSlides = [
    {
      image: 'https://www.topgear.com/sites/default/files/2024/01/VIPClassMercedes-BenzSprinterbyCliveSutton022.jpg',
      title: 'Viaja con estilo y comodidad',
      subtitle: 'Descubre nuestra flota de vehículos de lujo para todo tipo de necesidades'
    },
    {
      image: 'https://www.ajlinternational.com/wp-content/uploads/2024/12/6-Mini-Coach-interior-2-scaled.webp',
      title: 'El mejor transporte para grupos',
      subtitle: 'Desde pequeños grupos hasta grandes contingentes'
    },
    {
      image: 'https://i.ytimg.com/vi/z-7A-oDTN2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0K1cvPcqBdTz93VvfjCgufBk7rw',
      title: 'Servicios turísticos especializados',
      subtitle: 'Conoce los mejores lugares con nuestros servicios de turismo'
    }
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-charcoal bg-opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                  <div className="text-center sm:text-left max-w-xl">
                    <motion.h1
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory leading-tight mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-xl text-peach mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Link
                        to="/flota"
                        className="bg-elegant-blue hover:bg-elegant-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Ver nuestra flota
                      </Link>
                      <Link
                        to="/contacto"
                        className="bg-terra-cotta hover:bg-copper text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Solicitar cotización
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Features Highlight */}
        <div className="absolute bottom-0 left-0 right-0 bg-ivory py-4 shadow-lg transform translate-y-1/2 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div>{feature.icon}</div>
                  <p className="text-sm font-medium text-slate">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 mt-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Ofrecemos una variedad de servicios de transporte para satisfacer todas tus necesidades, con la máxima calidad y confort.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="text-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-slate mb-4 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link
                    to={service.link}
                    className="inline-block text-elegant-blue hover:text-terra-cotta font-medium"
                  >
                    Saber más →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                Nuestra Flota Destacada
              </h2>
              <p className="text-lg text-slate max-w-2xl">
                Vehículos modernos y cómodos para todo tipo de viajes. Transporte de calidad para grupos de todos los tamaños.
              </p>
            </div>
            <Link
              to="/flota"
              className="mt-6 md:mt-0 inline-flex items-center bg-terra-cotta hover:bg-copper text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Ver toda la flota
            </Link>
          </div>

          {/* Modificado el grid para mejorar el responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-elegant-blue py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-ivory mb-4">
                ¿Listo para viajar con el mejor servicio?
              </h2>
              <p className="text-peach text-lg">
                Contáctanos hoy mismo para reservar tu viaje o solicitar una cotización personalizada.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/contacto"
                className="bg-ivory hover:bg-peach text-elegant-blue font-medium py-3 px-8 rounded-lg text-center transition-colors duration-300"
              >
                Contactar ahora
              </Link>
              <a
                href="tel:999651140"
                className="bg-terra-cotta hover:bg-copper text-white font-medium py-3 px-8 rounded-lg text-center transition-colors duration-300"
              >
                <FaPhoneAlt className="inline mr-2" /> Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
