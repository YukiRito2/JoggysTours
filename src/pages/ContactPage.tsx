import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  passengers: string;
  date: string;
  message: string;
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, here you would send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-orange-500 text-xl" />,
      title: 'Dirección',
      content: 'Av. San Luis Nro. 2585',
      link: 'https://maps.app.goo.gl/eb89c5ofyRb8ESzHA',
      linkText: 'Ver en Google Maps'
    },
    {
      icon: <FaPhoneAlt className="text-blue-600 text-xl" />,
      title: 'Teléfono',
      content: '999 651 140',
      link: 'tel:999651140',
      linkText: 'Llamar ahora'
    },
    {
      icon: <FaWhatsapp className="text-orange-500 text-xl" />,
      title: 'WhatsApp',
      content: '999 651 140',
      link: 'https://wa.me/999651140',
      linkText: 'Enviar mensaje'
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-xl" />,
      title: 'Email',
      content: 'reservas@joggystours.com.pe',
      link: 'mailto:reservas@joggystours.com.pe',
      linkText: 'Enviar email'
    },
    {
      icon: <FaClock className="text-orange-500 text-xl" />,
      title: 'Horario de atención',
      content: 'Lunes a Viernes: 5:00 AM - 12:00 AM',
      secondContent: 'Sábados: 8:00 AM - 10:00 PM'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a planificar tu próximo viaje con JoggysTours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Envíanos un mensaje
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700">
                  Gracias por contactarnos. Responderemos a tu mensaje a la brevedad.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre"
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                  )}
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <p className="text-red-500 text-sm mt-1">Email inválido</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (234) 567-8901"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de vehículo
                    </label>
                    <select
                      id="vehicleType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      {...register('vehicleType')}
                    >
                      <option value="">Seleccione un tipo</option>
                      <option value="van">Van</option>
                      <option value="sprinter">Sprinter</option>
                      <option value="minibus">Minibús</option>
                      <option value="bus">Bus</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de pasajeros
                    </label>
                    <select
                      id="passengers"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      {...register('passengers')}
                    >
                      <option value="">Seleccione cantidad</option>
                      <option value="1-8">1-8 pasajeros</option>
                      <option value="9-15">9-15 pasajeros</option>
                      <option value="16-30">16-30 pasajeros</option>
                      <option value="31+">31+ pasajeros</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha del servicio
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    {...register('date')}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe tu servicio requerido, origen, destino, duración, etc."
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Enviar mensaje
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="h-48 bg-blue-600 relative">
              <img
                src="https://www.grechmotors.com/wp-content/uploads/2024/05/luxury-sprinter-vans-grech-motors-1-scaled.jpg"
                alt="JoggysTours"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">Información de contacto</h2>
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-start justify-center pt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.content}</p>
                      {item.secondContent && (
                        <p className="text-gray-600">{item.secondContent}</p>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-orange-500 hover:text-orange-700 text-sm font-medium mt-1 inline-block"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 pt-6 border-t border-gray-200"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-gray-800 mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-200 transition-colors duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors duration-300"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
