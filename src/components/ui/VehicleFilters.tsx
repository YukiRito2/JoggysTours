import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaUsers, FaCarAlt } from 'react-icons/fa';

interface VehicleFiltersProps {
  onFilterChange: (filters: {
    type: string[];
    capacity: number | null;
    minPrice: number | null;
    maxPrice: number | null;
  }) => void;
  minCapacity: number;
  maxCapacity: number;
  minPrice: number;
  maxPrice: number;
}

const VehicleFilters = ({
  onFilterChange,
  minCapacity,
  maxCapacity,
  minPrice,
  maxPrice
}: VehicleFiltersProps) => {
  // State for filters
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [isOpen, setIsOpen] = useState(true);

  // Vehicle types with icons and labels
  const vehicleTypes = [
    { id: 'van', name: 'Van', icon: <FaCarAlt /> },
    { id: 'sprinter', name: 'Sprinter', icon: <FaCarAlt /> },
    { id: 'minibus', name: 'Minibús', icon: <FaCarAlt /> },
    { id: 'bus', name: 'Bus', icon: <FaCarAlt /> }
  ];

  // Capacity options
  const capacityOptions = [
    { value: 8, label: '1-8 pasajeros' },
    { value: 15, label: '1-15 pasajeros' },
    { value: 25, label: '1-25 pasajeros' },
    { value: null, label: 'Cualquier capacidad' }
  ];

  // Update filters when selection changes - FIX: Adding proper dependency array
  useEffect(() => {
    const filters = {
      type: selectedTypes,
      capacity: selectedCapacity,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    };

    onFilterChange(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTypes, selectedCapacity, priceRange]);

  // Toggle vehicle type filter
  const toggleTypeFilter = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // Handle capacity selection
  const handleCapacityChange = (capacity: number | null) => {
    setSelectedCapacity(capacity);
  };

  // Handle price range change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = newValue;

    // Ensure min <= max
    if (index === 0 && newValue > priceRange[1]) {
      newPriceRange[1] = newValue;
    } else if (index === 1 && newValue < priceRange[0]) {
      newPriceRange[0] = newValue;
    }

    setPriceRange(newPriceRange);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedCapacity(null);
    setPriceRange([minPrice, maxPrice]);
  };

  // Animation variants
  const filterVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaFilter className="text-orange-500 mr-2" />
          <h3 className="text-lg font-semibold">Filtros</h3>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Limpiar filtros
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-elegant-blue"
          >
            {isOpen ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 lg:block"
        initial="visible"
        animate={isOpen ? "visible" : "hidden"}
        variants={filterVariants}
      >
        {/* Vehicle Type Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">Tipo de Vehículo</h4>
          <div className="grid grid-cols-2 gap-2">
            {vehicleTypes.map(type => (
              <button
                key={type.id}
                onClick={() => toggleTypeFilter(type.id)}
                className={`flex items-center px-3 py-2 rounded-md text-left text-sm ${
                  selectedTypes.includes(type.id)
                    ? 'bg-orange-100 text-orange-700 border border-orange-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Capacity Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">
            <FaUsers className="inline mr-2" />
            Capacidad
          </h4>
          <div className="space-y-2">
            {capacityOptions.map(option => (
              <button
                key={option.value?.toString() || 'any'}
                onClick={() => handleCapacityChange(option.value)}
                className={`block w-full px-3 py-2 text-left text-sm rounded-md ${
                  selectedCapacity === option.value
                    ? 'bg-elegant-blue/10 text-elegant-blue border border-elegant-blue/30'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="font-medium text-gray-800 mb-3">Precio por Hora</h4>
          <div className="px-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">${priceRange[0]}</span>
              <span className="text-sm text-gray-600">${priceRange[1]}</span>
            </div>
            <div className="mb-4">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full accent-orange-500"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full accent-elegant-blue"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                <label className="text-xs text-gray-500">Mínimo</label>
                <input
                  type="number"
                  min={minPrice}
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full p-2 text-sm border rounded-md"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="text-xs text-gray-500">Máximo</label>
                <input
                  type="number"
                  min={priceRange[0]}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full p-2 text-sm border rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleFilters;
