import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import ZoomableImage from '../components/ui/ZoomableImage';
import { Pagination, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import vehicles from '../data/vehicles';
import FeatureList from '../components/ui/FeatureList';
import {
  FaArrowLeft,
  FaUsers,
  FaCar,
  FaGasPump,
  FaCogs,
  FaWifi,
  FaSnowflake,
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarAlt,
  FaTimes
} from 'react-icons/fa';

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(vehicles.find(v => v.id === id));
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Imagen seleccionada



  // Simulate loading
  useEffect(() => {
    if (!vehicle) {
      navigate('/flota');
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [vehicle, navigate]);

  if (!vehicle) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

   // Función para abrir el modal
   const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Back button */}
        <div className="mb-6">
        <Link
          to="/flota"
          className="inline-flex items-center text-elegant-blue hover:text-terra-cotta font-medium py-3 px-4 rounded-lg transition-all duration-200"
>
        <FaArrowLeft className="mr-1" /> {/* Aumenta el tamaño del ícono */}
        <span className="text-base">Volver a la flota</span> {/* Ajusta el tamaño del texto */}
        </Link>
        </div>
 
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-elegant-blue"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Vehicle Image Gallery */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Swiper
                  modules={[Pagination, Navigation, Thumbs]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  loop={true}
                  className="h-80 sm:h-96"
                >
                  {vehicle.images.map((image, index) => (
                    <SwiperSlide key={index} className="bg-gray-100">
                      <img
                        src={image}
                        alt={`${vehicle.name} - Imagen ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => openModal(image)} // Abrir modal al hacer clic

                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {vehicle.images.length > 1 && (
                  <div className="mt-4 px-2">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      watchSlidesProgress={true}
                      modules={[Thumbs]}
                      className="thumbs-gallery"
                    >
                      {vehicle.images.map((image, index) => (
                        <SwiperSlide key={index} className="h-20 cursor-pointer rounded-md overflow-hidden">
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            onClick={() => openModal(image)} // Abrir modal al hacer clic
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>

              {/* Vehicle Information */}
              <div>
                <div className="bg-white rounded-xl shadow-md p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-charcoal mb-2">{vehicle.name}</h1>
                      <div className="flex items-center space-x-4 text-slate mb-4">
                        <div className="flex items-center">
                          <FaUsers className="mr-1 text-copper" />
                          <span>{vehicle.capacity} pasajeros</span>
                        </div>
                        <div className="flex items-center">
                          <FaCar className="mr-1 text-elegant-blue" />
                          <span>{vehicle.specifications.model}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-slate text-sm">Desde</p>
                      <p className="text-3xl font-bold text-terra-cotta">${vehicle.price.hourly}</p>
                      <p className="text-slate text-sm">Precios Desde</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Descripción</h3>
                    <p className="text-slate">{vehicle.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-elegant-blue/10 rounded-lg p-4">
                      <h3 className="font-semibold text-charcoal mb-2">Precios desde</h3>
                      <p className="text-2xl font-bold text-elegant-blue">${vehicle.price.hourly}</p>
                    </div>
                    <div className="bg-peach rounded-lg p-4">
                      <h3 className="font-semibold text-charcoal mb-2">Precio por día</h3>
                      <p className="text-2xl font-bold text-terra-cotta">${vehicle.price.daily}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a
                      href="/contacto"
                      className="bg-elegant-blue hover:bg-elegant-blue/90 text-ivory py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex justify-center items-center"
                    >
                      <FaCalendarAlt className="mr-2" />
                      Reservar este vehículo
                    </a>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="tel:+123456789"
                        className="bg-slate hover:bg-slate/80 text-ivory py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex justify-center items-center"
                      >
                        <FaPhoneAlt className="mr-2" />
                        Llamar
                      </a>
                      <a
                        href="https://wa.me/51999651140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-terra-cotta hover:bg-copper text-ivory py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex justify-center items-center"
                      >
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

{/* Modal para mostrar la imagen ampliada */}
{isModalOpen && selectedImage && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    initial={{ opacity: 0 }} // Animación inicial
    animate={{ opacity: 1 }} // Animación al aparecer
    exit={{ opacity: 0 }} // Animación al desaparecer
    onClick={closeModal} // Cierra el modal al hacer clic fuera de la imagen
  >
    <motion.div
      className="relative"
      initial={{ scale: 0.8 }} // Escala inicial
      animate={{ scale: 1 }} // Escala al aparecer
      exit={{ scale: 0.8 }} // Escala al desaparecer
      transition={{ duration: 0.3, ease: "easeInOut" }} // Duración y tipo de transición
      onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
    >
       <ZoomableImage src={selectedImage} alt="Imagen ampliada" onClose={closeModal} />    </motion.div>
      </motion.div>
      )}
            {/* Features Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl shadow-md p-6">
                <FeatureList
                  items={vehicle.features}
                  title="Características"
                  icon={<FaCar className="text-terra-cotta" />}
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <FeatureList
                  items={vehicle.amenities}
                  title="Comodidades"
                  icon={<FaWifi className="text-elegant-blue" />}
                />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="flex items-center mb-4 text-lg font-semibold text-charcoal">
                  <FaCogs className="text-copper mr-2" />
                  Especificaciones
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-slate">Modelo:</span>
                    <span className="font-medium text-charcoal">{vehicle.specifications.model}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate">Año:</span>
                    <span className="font-medium text-charcoal">{vehicle.specifications.year}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate">Motor:</span>
                    <span className="font-medium text-charcoal">{vehicle.specifications.engine}</span>
                  </li>
                 
                  <li className="flex justify-between">
                    <span className="text-slate">Combustible:</span>
                    <span className="font-medium text-charcoal">{vehicle.specifications.fuel}</span>
                  </li>
                  
                </ul>
              </div>
            </motion.div>
            
            {/* Call to Action */}
            <motion.div
              className="bg-elegant-blue rounded-xl shadow-lg p-8 text-white"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-3">¿Interesado en este vehículo?</h2>
                  <p className="text-peach">
                    Contáctanos hoy para reservarlo o solicitar más información sobre nuestros servicios.
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/contacto"
                    className="bg-ivory hover:bg-peach text-elegant-blue py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center"
                  >
                    Solicitar cotización
                  </Link>
                  <a
                    href="tel:999651140"
                    className="bg-terra-cotta hover:bg-copper text-ivory py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center"
                  >
                    <FaPhoneAlt className="inline mr-2" /> Llamar ahora
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetailPage;
