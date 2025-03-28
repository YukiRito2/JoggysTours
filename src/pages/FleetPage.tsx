import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VehicleCard from '../components/ui/VehicleCard';
import VehicleFilters from '../components/ui/VehicleFilters';
import vehicles, { Vehicle } from '../data/vehicles';
import { FaCarAlt, FaFilter } from 'react-icons/fa';

const FleetPage = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState<string>('capacity_asc'); // Ordenar por capacidad por defecto

  // Extract min/max values for filter ranges
  const minCapacity = Math.min(...vehicles.map(v => v.capacity));
  const maxCapacity = Math.max(...vehicles.map(v => v.capacity));

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Apply filters to vehicles
  const handleFilterChange = (filters: { type: string[]; capacity: number | null }) => {
    let filtered = vehicles.filter(vehicle => {
      // Filtrar por tipo de vehículo
      if (filters.type.length > 0 && !filters.type.includes(vehicle.type)) {
        return false;
      }

      // Filtrar por capacidad
      if (filters.capacity !== null && vehicle.capacity > filters.capacity) {
        return false;
      }

      return true;
    });

    // Aplicar ordenamiento después de filtrar
    filtered = sortVehicles(filtered, sortCriteria);
    setFilteredVehicles(filtered);
  };

  // Handle sorting
  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
    const sortedVehicles = sortVehicles(filteredVehicles, criteria);
    setFilteredVehicles(sortedVehicles);
  };

  // Sorting logic
  const sortVehicles = (vehicles: Vehicle[], criteria: string): Vehicle[] => {
    switch (criteria) {
      case 'capacity_asc':
        return [...vehicles].sort((a, b) => a.capacity - b.capacity);
      case 'capacity_desc':
        return [...vehicles].sort((a, b) => b.capacity - a.capacity);
      default:
        return vehicles;
    }
  };

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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-ivory py-16 sm:py-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
  className="text-center mb-12 mt-6 sm:mt-0"
  variants={headerVariants}
  initial="hidden"
  animate="visible"
>
  <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
    Nuestra Flota
  </h1>
  <p className="text-lg text-slate max-w-2xl mx-auto">
    Descubre nuestra amplia selección de vehículos para todo tipo de servicios y necesidades. Calidad, confort y seguridad garantizados.
  </p>
</motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block lg:w-1/4 lg:flex-shrink-0 lg:sticky lg:top-24">
            <div className="sticky top-24">
              <VehicleFilters
                onFilterChange={handleFilterChange}
                minCapacity={minCapacity}
                maxCapacity={maxCapacity}
              />
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full bg-white p-4 rounded-lg shadow flex items-center justify-center space-x-2 text-charcoal font-medium"
            >
              <FaFilter className="text-terra-cotta" />
              <span>{filtersOpen ? 'Ocultar filtros' : 'Mostrar filtros'}</span>
            </button>

            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <VehicleFilters
                  onFilterChange={handleFilterChange}
                  minCapacity={minCapacity}
                  maxCapacity={maxCapacity}
                />
              </motion.div>
            )}
          </div>

          {/* Vehicles Grid */}
          <div className="lg:w-3/4 w-full">
            {isLoading ? (
              <motion.div
                className="flex flex-col items-center justify-center h-64"
                variants={loadingVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FaCarAlt className="text-4xl text-elegant-blue animate-pulse mb-4" />
                <p className="text-slate">Cargando vehículos...</p>
              </motion.div>
            ) : (
              <>
               <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
  <p className="text-sm sm:text-base text-charcoal mb-4 sm:mb-0">
    Mostrando <span className="font-medium">{filteredVehicles.length}</span> vehículos
  </p>
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
    <span className="text-xs sm:text-sm text-slate hidden sm:inline">Ordenar por:</span>
    <select
      className="border rounded-md px-2 py-1 text-xs sm:text-sm bg-white text-charcoal"
      value={sortCriteria}
      onChange={(e) => handleSortChange(e.target.value)}
    >
      <option value="capacity_asc">Capacidad: Menor a mayor</option>
      <option value="capacity_desc">Capacidad: Mayor a menor</option>
    </select>
  </div>
</div>

                {filteredVehicles.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredVehicles.map(vehicle => (
                      <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                  </motion.div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <FaCarAlt className="mx-auto text-4xl text-silver mb-4" />
                    <h3 className="text-xl font-medium text-charcoal mb-2">No se encontraron vehículos</h3>
                    <p className="text-slate mb-4">
                      No hay vehículos que coincidan con los filtros seleccionados.
                    </p>
                    <button
                      onClick={() => {
                        // Reset filters by applying empty filters
                        handleFilterChange({
                          type: [],
                          capacity: null
                        });
                      }}
                      className="text-elegant-blue font-medium hover:text-terra-cotta"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetPage;