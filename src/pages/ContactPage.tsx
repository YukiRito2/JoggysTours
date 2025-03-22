import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

interface FormData {
  nombres: string;
  email: string;
  telefono: string;
  tipovehiculo: string;
  pasajeros: string;
  fechaservicio: string;
  mensaje: string;
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const btn = document.getElementById('button') as HTMLInputElement;
    if (btn) btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_bw3ym1d';

    emailjs.send('default_service', 'template_bw3ym1d', { ...data }, 'nLY5D1lE5-7EpuprV')
      .then(() => {
        if (btn) btn.value = 'Enviar mensaje';
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 5000);
      })
      .catch((err) => {
        if (btn) btn.value = 'Enviar mensaje';
        alert(`Error: ${JSON.stringify(err)}`);
      });
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
      link: 'https://wa.me/51999651140',
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
                id="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    id="nombres"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errors.nombres ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre"
                    {...register('nombres', { required: true })}
                  />
                  {errors.nombres && (
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
                      className={`w-full px-4 py-3 border rounded-lg ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className={`w-full px-4 py-3 border rounded-lg ${
                        errors.telefono ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (234) 567-8901"
                      {...register('telefono', { required: true })}
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="tipovehiculo" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de vehículo
                    </label>
                    <input
                      id="tipovehiculo"
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Van, Sprinter, etc."
                      {...register('tipovehiculo')}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="pasajeros" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de pasajeros
                    </label>
                    <input
                      id="pasajeros"
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="1-8, 9-15, etc."
                      {...register('pasajeros')}
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="fechaservicio" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha del servicio
                  </label>
                  <input
                    id="fechaservicio"
                    type="date"
                    className="w-full px-4 py-3 border rounded-lg"
                    {...register('fechaservicio')}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errors.mensaje ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe tu servicio requerido, origen, destino, duración, etc."
                    {...register('mensaje', { required: true })}
                  ></textarea>
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    id="button"
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;