export interface Vehicle {
  id: string;
  name: string;
  type: 'van' | 'sprinter' | 'minibus' | 'bus';
  capacity: number;
  description: string;
  features: string[];
  specifications: {
    model: string;
    year: number;
    engine: string;
    fuel: string;
  };
  amenities: string[];
  images: string[];
  price: {
    hourly: number;
    daily: number;
  };
}

const vehicles: Vehicle[] = [
  {
    id: 'van-premium-1',
    name: 'HYUNDAI STARIA',
    type: 'van',
    capacity: 7,
      "description": "Una van de lujo ideal para grupos pequeños que buscan comodidad y privacidad durante sus viajes corporativos o turísticos. Equipada con asientos de cuero reclinables y amplias ventanas.",    features: [
      'Asientos de cuero reclinables',
      'Aire acondicionado individual',
      'Sistema de sonido premium',
      'Iluminación LED ambiental',
      'Espacio amplio para equipaje',
      
    ],
    specifications: {
      model: 'Mercedes-Benz V-Class',
      year: 2022,
      engine: "2.2L CRDI Turbo Diesel",
      fuel: 'Diesel',
    },
    amenities: [
      "Sistema de infoentretenimiento con pantalla táctil",
      "Conectividad Bluetooth, Apple CarPlay y Android Auto",
      "Puertos USB para pasajeros",
      "Asientos configurables",
      "Sistemas de seguridad avanzados"
    ],
    images: [
      '/image/CBR448/IMG_0908.jpg',
      '/image/CBR448/IMG_0828.JPG',
      '/image/CBR448/IMG_0902.jpg',
      '/image/CBR448/IMG_0918.jpg',
      '/image/CBR448/IMG_0939.jpg'
    ],
    price: {
      hourly: 45,
      daily: 320
    }
  },
  {
    id: 'sprinter-luxury-1',
    name: 'MERCERDEZ BENZ SPRINTER',
    type: 'sprinter',
    capacity: 21,
    description: "Nuestra Sprinter Luxury Class ofrece el máximo confort para viajes de negocios o placer. Con amplio espacio interior, asientos ejecutivos y tecnología de vanguardia, garantizamos una experiencia de viaje excepcional.",
      features: [
      'Asientos ejecutivos reclinables de cuero',
      'Climatización tri-zona',
      'Techo alto para fácil desplazamiento',
      'Iluminación ambiental personalizable',
      'Sistema de sonido Harman Kardon'

    ],
    specifications: {
      model: 'Mercedes-Benz Sprinter',
      year: 2018,
      engine: '3.0L V6 Diesel',
      fuel: 'Diesel Premium',
    },
    amenities: [
      "Múltiples puertos USB y tomas de corriente AC",
      "Mesas de trabajo plegables y ajustables",
      "Sistema de videoconferencia integrado",
      "Sistema de navegación avanzado",
      "Sistemas de seguridad avanzados"
    ],
    images: [
      '/image/f4d950/950_1.jpg',
      '/image/f4d950/950_2.jpg',
      '/image/f4d950/950_3.jpg',
      '/image/f4d950/950_4.jpg',
      
    ],
    price: {
      hourly: 65,
      daily: 480
    }
  },
  {
    id: 'minibus-turismo-1',
    name: 'AGRALE MA 10.0',
    type: 'minibus',
    capacity: 32,
    description: 'Diseñado especialmente para excursiones turísticas, este minibus cuenta con ventanas panorámicas para una vista incomparable y sistema de guía turística incorporado para una experiencia completa.',
    features: [
      "Ventanas panorámicas de gran tamaño con protección UV",
      "Techo panorámico acristalado",
      "Sistema de audio profesional para guías turísticos con múltiples micrófonos",
      "Asientos ergonómicos reclinables con apoyabrazos y reposapiés",
      "Cámara de visión periférica para maniobras seguras"
    ],
    specifications: {
      model: 'Agrale MA 10.0',
      year: 2016,
      engine: 'Motor diésel de 4 cilindros turbo',
      fuel: 'Diesel de bajo azufre',
    },
    amenities: [
    "Pantallas informativas individuales con GPS y contenido turístico",
    "Refrigerador y máquina de café a bordo",
    "Sistema de audio multilingüe con auriculares individuales",
    "Amplio maletero con compartimentos especiales para equipos",
    "Tomas de corriente y puertos USB en cada asiento",
    "Sistema de climatización independiente para pasajeros y conductor"
    ],
    images: [
      '/image/f4s958/minibus3.jpg',
      '/image/f4s958/minibus1.jpg',
      '/image/f4s958/minibus2.jpg',
      '/image/f4s958/minibus4.JPG',
      '/image/f4s958/minibus5.JPG'
    ],
    price: {
      hourly: 75,
      daily: 520
    }
  },
  {
    id: 'bus-comfort-1',
    name: 'Merdeces-Benz O-500',
    type: 'bus',
    capacity: 42,
    "description": "El autobús turístico Mercedes-Benz O-500 es ideal para grupos grandes que buscan un transporte confortable y seguro. Perfecto para excursiones, traslados corporativos o eventos especiales.",    
    features: [
    "Asientos ergonómicos reclinables con cinturones de seguridad",
    "Sistema de climatización centralizado de alta eficiencia",
    "Amplias ventanas panorámicas con protección UV",
    "Sistema de audio profesional con micrófonos para guía y pasajeros",
    "Espacioso maletero con compartimentos organizados"
    ],
    specifications: {
      model: 'Mercedes-Benz O-500',
      year: 2018,
      engine: "Mercedes-Benz OM 457 LA",
      fuel: 'Diesel de bajo azufre',
    },
    amenities: [
      "Múltiples pantallas de video con sistema de entretenimiento",
      "Tomas de corriente y puertos USB en cada fila de asientos",
      "Refrigerador y dispensador de agua a bordo",
      "Micrófono dedicado para guía turístico",
      "Cortinas o persianas en ventanas para control de luz y privacidad",
      "Sistema de navegación GPS y monitoreo en tiempo real"
    ],
    images: [
      '/image/f4a965/965_1.jpg',
      '/image/f4a965/965_2.jpg',
      '/image/f4a965/965_3.jpg',
      '/image/f4a965/IMG_8727.JPG',
      '/image/f4a965/IMG_8730.JPG'
    ],
    price: {
      hourly: 80,
      daily: 550
    }
  },
  {
    id: 'bus-executive-1',
    name: 'SCANIA K310S',
    type: 'bus',
    capacity: 48,
    "description": "Nuestro Autobús Ejecutivo Premium Scania K310S ofrece el máximo confort para grupos grandes. Perfecto para viajes largos, excursiones turísticas o traslados corporativos, priorizando el espacio y la comodidad.",
      features: [
        "Asientos ergonómicos reclinables con soporte lumbar ajustable",
        "Sistema de climatización multizona de alta eficiencia",
        "Ventanas panorámicas con protección UV y cortinas de privacidad",
        "Sistema de entretenimiento centralizado con múltiples pantallas",
        "Sanitario a bordo con lavamanos",
        "Amplia bodega para equipaje con iluminación y organización"
    ],
    specifications: {
      model: 'SCANIA K310S',
      year: 2014,
      engine: 'Volvo D13 460HP',
      fuel: 'Diesel',
    },
    amenities: [
    "Pantallas individuales y centrales de alta resolución",
    "Sistema de audio premium con sonido envolvente",
    "Refrigerador y máquina de café a bordo",
    "Tomas de corriente y puertos USB en cada asiento",
    "Iluminación de lectura individual y ambiental LED",
    ],
    images: [
      '/image/C7H969/IMG_0767.jpg',
      '/image/C7H969/IMG_0748.JPG',
      '/image/C7H969/IMG_0750.JPG', 
      '/image/C7H969/IMG_0754.JPG',
      '/image/C7H969/IMG_0776.jpg',
      '/image/C7H969/IMG_0787.jpg'
      ],
    price: {
      hourly: 120,
      daily: 850
    }
  },
  {
    id: 'sprinter-vip-1',
    name: 'MERCEDES-BENZ SPRINTER 515CDI',
    type: 'sprinter',
    capacity: 20,
    "description": "La Mercedes-Benz Sprinter 515CDI redefine el lujo en transporte terrestre. Con 10 asientos ejecutivos tipo avión, ofrece un espacio excepcional y amenidades de primera para los clientes más exigentes.",
    features: [
    "Asientos ejecutivos reclinables de cuero de alta calidad",
    "Climatización multizona independiente",
    "Techo elevado para máxima comodidad y movilidad",
    "Iluminación ambiental LED con control de intensidad y color",
    "Sistema de sonido premium con múltiples altavoces",
    "Cortinas de privacidad en ventanas"
    ],
    specifications: {
      model: 'MERCEDES-BENZ SPRINTER 515CDI',
      year: 2018,
      engine:"3.0L V6 Turbo Diesel",      
      fuel: 'Diesel Premium',
    },
    amenities: [
    "Pantallas individuales de entretenimiento para cada pasajero",
    "Múltiples puertos USB y tomas de corriente AC",
    "Sistema de audio premium con sonido envolvente",
    "Sistema de navegación avanzado",
    "Sistemas de seguridad avanzados"
    ],
    images: [
      '/image/f4b969/sprinter1.jpg',
      '/image/f4b969/sprinter2.jpg',
      '/image/f4b969/sprinter3.JPG',
      '/image/f4b969/sprinter4.JPG',
      '/image/f4b969/sprinter5.jpg'

    ],
    price: {
      hourly: 90,
      daily: 650
    }
  },
  {
    id: 'van-family-1',
    name: 'HYUNDAI STARIA 11P',
    type: 'van',
    capacity: 11,
    description: "La opción perfecta para familias o grupos grandes que buscan comodidad durante sus viajes. Esta van familiar ofrece un espacio amplio para todos los pasajeros y su equipaje.",      
    features: [
    "Asientos reclinables con configuración flexible",
    "Sistema de climatización multizona",
    "Amplio espacio de carga" 
      ],
    specifications: {
      model: 'HYUNDAI STARIA 11P',
      year: 2023,
      engine: "2.2L CRDI Turbo Diesel",
      fuel: 'Diesel',
    },
    amenities: [
    "Sistema de infoentretenimiento con pantalla táctil",
    "Conectividad Bluetooth, Apple CarPlay y Android Auto",
    "Múltiples puertos USB para pasajeros",
    "Configuración de asientos versátil",
    "Sistemas de seguridad avanzados"
    ],
    images: [
      '/image/CFP000/000_3.jpg',
      '/image/CFP000/000_1.jpg',
      '/image/CFP000/000_2.jpg',
      '/image/CFP000/000_4.jpg',
      '/image/CFP000/000_5.jpg',
      '/image/CFP000/IMG_8424.JPG',
      '/image/CFP000/IMG_8431.JPG'
    ],
    price: {
      hourly: 30,
      daily: 125
    }
  },
  {
    id: 'bus-ejecutivo-plus',
    name: 'YUTONG',
    type: 'bus',
    capacity: 40,
    "description": "El Yutong Ejecutivo Plus ha sido diseñado para viajes largos con el máximo confort. Sus 40 asientos reclinables premium, servicios a bordo y tecnología avanzada garantizan un viaje placentero para grupos grandes.",
      features: [
        "Asientos ejecutivos ergonómicos extra anchos",
        "Espacio entre asientos optimizado para mayor comodidad",
        "Sanitarios de lujo con acabados premium",
        "Amplio espacio de carga" 

    ],
    specifications: {
      model: 'YUTONG ZX613',
      year: 2016,
      engine: 'Volvo D13K 500HP',
      fuel: 'Diesel',
    },
    amenities: [
      "Sistema de entretenimiento 4K con contenido multimedia variado",
      "Servicio de cafetería",
      "Selección de snacks y comidas",
      "Kit de descanso premium para viajes nocturnos",
      "Sistema de asistencia  para información y servicios"
    ],
    images: [
      '/image/D4A952/IMG_0870.jpg',
      '/image/D4A952/IMG_0862.jpg',
      '/image/D4A952/IMG_0877.jpg',
      '/image/D4A952/IMG_0882.JPG',
      '/image/D4A952/IMG_0887.JPG',
      '/image/D4A952/IMG_0890.JPG',
      '/image/D4A952/IMG_0895.JPG',
        ],
    price: {
      hourly: 110,
      daily: 780
    }
  }
];

export default vehicles;
