import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface FeatureListProps {
  items: string[];
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureList = ({ items, title, icon, className = '' }: FeatureListProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center mb-4">
        {icon && <span className="mr-2">{icon}</span>}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <motion.ul
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            variants={itemVariants}
          >
            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default FeatureList;
