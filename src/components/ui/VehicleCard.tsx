import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaCar } from 'react-icons/fa';
import { Vehicle } from '../../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const { id, name, type, capacity, description, images } = vehicle;

  // Mapping for vehicle types to readable text
  const vehicleTypeMap = {
    van: 'Van',
    sprinter: 'Sprinter',
    minibus: 'Minibús',
    bus: 'Bus'
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className="bg-ivory rounded-xl overflow-hidden shadow-md h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-terra-cotta text-ivory px-3 py-1 rounded-full text-xs font-medium">
          {vehicleTypeMap[type]}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-charcoal mb-2 line-clamp-1">{name}</h3>

        <div className="flex items-center text-slate mb-4 flex-wrap gap-2">
          <div className="flex items-center">
            <FaUsers className="mr-1 text-copper" />
            <span className="text-sm">{capacity} pasajeros</span>
          </div>
          <span className="mx-2 hidden sm:inline text-silver">•</span>
          <div className="flex items-center">
            <FaCar className="mr-1 text-elegant-blue" />
            <span className="text-sm line-clamp-1">{vehicle.specifications.model}</span>
          </div>
        </div>

        <p className="text-slate text-sm mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-center mt-2 pt-2 border-t border-peach/30">
          <div>
            <span className="text-silver text-xs">Desde</span>
            <p className="text-elegant-blue font-bold">${vehicle.price.hourly}/hora</p>
          </div>

          <Link
            to={`/flota/${id}`}
            className="bg-elegant-blue hover:bg-elegant-blue/90 text-ivory px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
