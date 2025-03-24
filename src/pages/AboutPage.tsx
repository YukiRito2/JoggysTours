import { motion } from 'framer-motion';
import { FaUsers, FaShieldAlt, FaHandshake, FaTree, FaAward } from 'react-icons/fa';

const AboutPage = () => {
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

  // Timeline items
  const timelineItems = [
    {
      year: '2019',
      title: 'Fundación',
      description: 'JoggysTours comienza operaciones con solo 2 vehículos, ofreciendo servicios de traslados turísticos.',
      icon: <FaUsers className="text-terra-cotta" />
    },
    {
      year: '2022',
      title: 'Expansión',
      description: 'Ampliamos nuestra flota a 8 vehículos e incorporamos servicios de transporte corporativo para grandes empresas.',
      icon: <FaHandshake className="text-elegant-blue" />
    },
    {
      year: '2023',
      title: 'Innovación',
      description: 'Implementamos tecnología de monitoreo GPS y comenzamos a ofrecer Wi-Fi gratuito en todos nuestros vehículos.',
      icon: <FaShieldAlt className="text-copper" />
    },
    {
      year: '2023',
      title: 'Sostenibilidad',
      description: 'Iniciamos nuestro programa de reducción de emisiones y comenzamos la transición hacia vehículos más eficientes.',
      icon: <FaTree className="text-elegant-blue" />
    },
    {
      year: '2025',
      title: 'Excelencia',
      description: 'Recibimos la certificación de calidad ISO 9001 y fuimos premiados como la mejor empresa de transporte turístico de la región.',
      icon: <FaAward className="text-terra-cotta" />
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'Pastor Hernández',
      position: 'Gerente General',
      bio: 'Fundador de JoggysTours con más de 25 años de experiencia en el sector del transporte turístico y corporativo.',
      image: '/image/CBR448/IMG_0908.jpg',

    },
    {
      name: 'Justina Rojas',
      position: 'Gerente de Operaciones',
      bio: 'Especialista en logística con amplia experiencia en coordinación de flotas y gestión de eventos corporativos.',
      image: '/image/f4s958/minibus3.jpg'},
    {
      name: 'Roberto Méndez',
      position: 'Jefe de Flota',
      bio: 'Ingeniero mecánico apasionado por la innovación y el mantenimiento preventivo de nuestra flota de vehículos.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }
  ];

  // Values
  const values = [
    {
      title: 'Excelencia',
      description: 'Nos esforzamos por superar las expectativas en cada viaje, brindando un servicio de calidad superior.',
      icon: <FaAward className="text-4xl text-terra-cotta mb-4" />
    },
    {
      title: 'Seguridad',
      description: 'La seguridad de nuestros pasajeros es nuestra prioridad número uno, con vehículos bien mantenidos y conductores capacitados.',
      icon: <FaShieldAlt className="text-4xl text-elegant-blue mb-4" />
    },
    {
      title: 'Compromiso',
      description: 'Estamos comprometidos con nuestros clientes, el medio ambiente y las comunidades donde operamos.',
      icon: <FaHandshake className="text-4xl text-copper mb-4" />
    }
  ];

  return (
    <div className="bg-ivory py-16">
      {/* Hero Section */}
      <div className="bg-elegant-blue py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-ivory mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre Nosotros
            </motion.h1>
            <motion.p
              className="text-xl text-peach max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conoce la historia, valores y el equipo detrás de JoggysTours,
              tu socio de confianza en servicios de transporte de calidad.
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-6">Nuestra Historia</h2>
            <p className="text-slate mb-4">
              JoggysTours nació en 2019 con una visión clara: proporcionar servicios de transporte de la más alta calidad, combinando seguridad, confort y atención personalizada en cada viaje.
            </p>
            <p className="text-slate mb-4">
              Lo que comenzó como una pequeña empresa familiar con solo dos vehículos, ha crecido hasta convertirse en una de las compañías de transporte turístico y corporativo más respetadas de la región, con una flota moderna.
            </p>
            <p className="text-slate">
              A lo largo de estos años, hemos transportado a miles de pasajeros satisfechos, desde turistas individuales hasta grandes grupos corporativos, adaptándonos siempre a las necesidades específicas de cada cliente.
            </p>
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src='/image/C7H969/IMG_0767.jpg'
              alt="Historia de JoggysTours"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4">Nuestra Trayectoria</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Desde nuestros humildes comienzos hasta convertirnos en líderes del sector,
              cada etapa de nuestro camino ha estado marcada por la pasión y el compromiso.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-elegant-blue/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-peach/50 p-6 rounded-lg shadow-md">
                      <h3 className="font-semibold text-xl text-terra-cotta">{item.title}</h3>
                      <p className="text-slate mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center z-10">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <div className="bg-elegant-blue rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4">Nuestros Valores</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Los principios que nos guían cada día y nos permiten ofrecer un servicio excepcional a todos nuestros clientes.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md text-center"
                variants={itemVariants}
              >
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-slate">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section
      <div className="bg-elegant-blue/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4">Nuestro Equipo</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Las personas detrás de JoggysTours que hacen posible ofrecer un servicio excepcional día tras día.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                variants={itemVariants}
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal">{member.name}</h3>
                  <p className="text-terra-cotta font-medium mb-3">{member.position}</p>
                  <p className="text-slate">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
       */}

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-elegant-blue to-blue-800 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para experimentar nuestro servicio?</h2>
              <p className="text-xl text-peach mb-8 max-w-3xl mx-auto">
                Contáctanos hoy mismo para conocer más sobre nuestros servicios y cómo podemos ayudarte con tus necesidades de transporte.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-terra-cotta hover:bg-copper text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contactar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
