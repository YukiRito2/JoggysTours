import { useState } from 'react';

  const ZoomableImage = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar la animación de cierre

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Obtener las dimensiones del contenedor
    const clickX = e.clientX - rect.left; // Posición X del clic relativo al contenedor
    const clickY = e.clientY - rect.top; // Posición Y del clic relativo al contenedor

    if (isZoomed) {
      // Restablecer zoom
      setIsZoomed(false);
      setZoomPosition({ x: 0, y: 0 });
    } else {
      // Activar zoom y centrar en la posición del clic
      const offsetX = ((clickX / rect.width) - 0.5) * 100; // Calcular desplazamiento X en porcentaje
      const offsetY = ((clickY / rect.height) - 0.5) * 100; // Calcular desplazamiento Y en porcentaje
      setIsZoomed(true);
      setZoomPosition({ x: -offsetX, y: -offsetY });
    }
  };

  const handleClose = () => {
    setIsClosing(true); // Activar animación de cierre
    setTimeout(() => {
      onClose(); // Llamar a la función de cierre después de la animación
    }, 300); // Duración de la animación (300ms)
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose} // Cierra el modal al hacer clic fuera de la imagen
    >
      <div
        className={`relative overflow-hidden flex items-center justify-center transition-transform duration-300 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
        onDoubleClick={handleDoubleClick}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
        style={{
          cursor: isZoomed ? 'zoom-out' : 'zoom-in',
          maxWidth: '90%', // Limita el ancho máximo del contenedor
          maxHeight: '90%', // Limita la altura máxima del contenedor
          margin: 'auto', // Centra el contenedor
        }}
      >
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-300"
          style={{
            transform: isZoomed
              ? `scale(1.5) translate(${zoomPosition.x}%, ${zoomPosition.y}%)`
              : 'scale(1) translate(0, 0)',
            maxWidth: '100%', // Limita el ancho máximo de la imagen
            maxHeight: '100%', // Limita la altura máxima de la imagen
            objectFit: 'contain', // Asegura que la imagen se ajuste dentro del contenedor
          }}
        />
      </div>
    </div>
  );
};

export default ZoomableImage;