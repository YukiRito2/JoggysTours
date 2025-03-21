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
    transmission: string;
    fuel: string;
    consumption: string;
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
    name: 'Van Premium Ejecutiva',
    type: 'van',
    capacity: 8,
    description: 'Una van de lujo ideal para grupos pequeños que buscan comodidad y privacidad durante sus viajes corporativos o turísticos. Equipada con asientos de cuero reclinables y amplias ventanas.',
    features: [
      'Asientos de cuero reclinables',
      'Aire acondicionado individual',
      'Sistema de sonido premium',
      'Iluminación LED ambiental',
      'Espacio amplio para equipaje',
      
    ],
    specifications: {
      model: 'Mercedes-Benz V-Class',
      year: 2023,
      engine: '2.0L Turbo Diesel',
      transmission: 'Automática 9 velocidades',
      fuel: 'Diesel',
      consumption: '12 km/l'
    },
    amenities: [
      'Wi-Fi a bordo',
      'Cargadores USB en cada asiento',
      'Nevera pequeña',
      'Sistema de entretenimiento',
      'Botella de agua de cortesía',
      'Privacidad con vidrios polarizados'
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
    name: 'Sprinter Luxury Class',
    type: 'sprinter',
    capacity: 14,
    description: 'Nuestra Sprinter Luxury Class ofrece el máximo confort para viajes de negocios o placer. Con amplio espacio interior, asientos ejecutivos y tecnología de vanguardia, garantizamos una experiencia de viaje excepcional.',
    features: [
      'Asientos ejecutivos reclinables de cuero',
      'Climatización tri-zona',
      'Techo alto para fácil desplazamiento',
      'Iluminación ambiental personalizable',
      'Sistema de sonido Harman Kardon'

    ],
    specifications: {
      model: 'Mercedes-Benz Sprinter',
      year: 2024,
      engine: '3.0L V6 Diesel',
      transmission: 'Automática 7G-Tronic',
      fuel: 'Diesel Premium',
      consumption: '10 km/l'
    },
    amenities: [
      'Wi-Fi de alta velocidad',
      'Monitores individuales con entretenimiento',
      'Nevera con bebidas',
      'Puertos USB y tomas de corriente AC',
      'Mesas de trabajo plegables',
      'Sistema de videoconferencia',
      'Cafetera a bordo'
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
    name: 'Minibus Turístico Panorámico',
    type: 'minibus',
    capacity: 20,
    description: 'Diseñado especialmente para excursiones turísticas, este minibus cuenta con ventanas panorámicas para una vista incomparable y sistema de guía turística incorporado para una experiencia completa.',
    features: [
      'Ventanas panorámicas extra grandes',
      'Techo parcialmente acristalado',
      'Sistema de audio para guía turístico',
      'Asientos ergonómicos elevados',
      'Cámara de visión 360° para pasajeros'
    ],
    specifications: {
      model: 'Mercedes-Benz Tourismo',
      year: 2023,
      engine: '3.0L BlueTEC Diesel',
      transmission: 'Automática 8 velocidades',
      fuel: 'Diesel ECO',
      consumption: '8.5 km/l'
    },
    amenities: [
      'Wi-Fi de alta velocidad',
      'Pantallas informativas con GPS',
      'Refrigerador para bebidas',
      'Sistema de audio multilenguaje',
      'Maletero con compartimentos especiales para equipo fotográfico',
      'Cargadores en cada asiento'
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
    name: 'Bus Comfort Turístico',
    type: 'bus',
    capacity: 40,
    description: 'El bus comfort turistico es perfecto para grupos grandes que necesitan un transporte confortable y seguro. Ideal para excursiones, traslados corporativos o eventos especiales con un grupo de hasta 24 personas.',
    features: [
      'Asientos ergonómicos reclinables',
      'Aire acondicionado central potente',
      'Ventanas panorámicas',
      'Sistema de audio con micrófono',
      'Maletero amplio'
    ],
    specifications: {
      model: 'Mercedes-Benz Sprinter bus',
      year: 2023,
      engine: '3.0L BlueTEC',
      transmission: 'Automática 7 velocidades',
      fuel: 'Diesel',
      consumption: '9 km/l'
    },
    amenities: [
      'Wi-Fi gratuito',
      'Pantallas de TV',
      'Enchufes USB',
      'Nevera para bebidas',
      'Micrófono para guía turístico',
      'Cortinas en ventanas'
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
    name: 'Bus Ejecutivo Premium',
    type: 'bus',
    capacity: 45,
    description: 'Nuestro Bus Ejecutivo Premium ofrece el máximo confort para grupos grandes. Con capacidad para 45 pasajeros, es perfecto para viajes largos, excursiones turísticas o traslados corporativos donde se requiere espacio y comodidad.',
    features: [
      'Asientos reclinables con ajuste lumbar',
      'Sistema de climatización avanzado',
      'Ventanas panorámicas con protección UV',
      'Sistema de entretenimiento centralizado',
      'Sanitario a bordo',
      'Bodega espaciosa para equipaje'
    ],
    specifications: {
      model: 'Volvo 9900',
      year: 2024,
      engine: 'Volvo D13 460HP',
      transmission: 'Automática I-Shift',
      fuel: 'Diesel Euro 6',
      consumption: '3.5 km/l'
    },
    amenities: [
      'Wi-Fi de alta velocidad',
      'Pantallas individuales',
      'Sistema de audio premium',
      'Nevera comunitaria',
      'Máquina de café',
      'Cargadores en cada asiento',
      'Iluminación de lectura individual'
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
    name: 'Sprinter VIP First Class',
    type: 'sprinter',
    capacity: 10,
    description: 'La Sprinter VIP First Class representa lo último en lujo para transporte terrestre. Con sólo 10 asientos ejecutivos tipo avión, ofrece un espacio incomparable y todas las comodidades para los clientes más exigentes.',
    features: [
      'Asientos tipo avión completamente reclinables',
      'Sistema de masaje en asientos',
      'Separadores de privacidad',
      'Techo con simulador de cielo estrellado',
      'Aislamiento acústico premium'
    ],
    specifications: {
      model: 'Mercedes-Benz Sprinter VIP Conversion',
      year: 2024,
      engine: '3.0L BlueTEC Turbodiesel',
      transmission: 'Automática 9G-Tronic',
      fuel: 'Diesel Premium',
      consumption: '8.5 km/l'
    },
    amenities: [
      'Wi-Fi de alta velocidad satellite',
      'Monitores 4K individuales',
      'Sistema de audio Burmester',
      'Bar completo con refrigerador',
      'Mesas de conferencia',
      'Sistema de climatización individual',
      'Servicio de mayordomo (opcional)'
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
    name: 'Van Familiar Comfort',
    type: 'van',
    capacity: 7,
    description: 'La opción perfecta para familias o pequeños grupos que buscan comodidad durante sus viajes. Esta van familiar ofrece espacio amplio para todos los pasajeros y su equipaje.',
    features: [
      'Asientos reclinables con configuración flexible',
      'Sistema de aire acondicionado dual',
      'Puertas corredizas eléctricas',
      'Sistema de entretenimiento familiar',
      'Portaequipajes superior'
    ],
    specifications: {
      model: 'Toyota Hiace Premium',
      year: 2023,
      engine: '2.8L Turbo Diesel',
      transmission: 'Automática 6 velocidades',
      fuel: 'Diesel',
      consumption: '13 km/l'
    },
    amenities: [
      'Wi-Fi a bordo',
      'Pantalla para pasajeros',
      'Puertos USB para todos',
      'Nevera pequeña',
      'Asientos para niños (opcional)',
      'Botellero en cada fila'
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
      hourly: 40,
      daily: 280
    }
  },
  {
    id: 'bus-ejecutivo-plus',
    name: 'Bus Ejecutivo Plus',
    type: 'bus',
    capacity: 40,
    description: 'El Bus Ejecutivo Plus ha sido diseñado para viajes largos con el máximo confort. Sus 40 asientos reclinables premium, servicios a bordo y tecnología avanzada garantizan un viaje placentero para grupos grandes.',
    features: [
      'Asientos ejecutivos extra anchos',
      'Espacio entre asientos ampliado',
      'Sistema de entretenimiento individual',
      'Sanitarios de lujo',
      'Cocina equipada',
      'Zona de descanso para conductor auxiliar'
    ],
    specifications: {
      model: 'Volvo 9700 Grand Touring',
      year: 2024,
      engine: 'Volvo D13K 500HP',
      transmission: 'Automática I-Shift 12 velocidades',
      fuel: 'Diesel Euro 6',
      consumption: '3.2 km/l'
    },
    amenities: [
      'Wi-Fi satelital ininterrumpido',
      'Sistema de entretenimiento 4K',
      'Servicio de cafetería',
      'Menú de snacks',
      'Kit de descanso para viajes nocturnos',
      'Biblioteca digital',
      'Asistente de viaje virtual'
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
