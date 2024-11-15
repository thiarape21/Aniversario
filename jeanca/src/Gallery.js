import React, { useState } from 'react';
import './App.css'; // Asegúrate de incluir el archivo CSS

// Si las imágenes están en 'src/images', importa las imágenes aquí
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
import foto3 from './images/foto3.jpeg';
import foto4 from './images/foto4.jpeg';
import foto5 from './images/foto5.jpeg';
import foto6 from './images/foto6.jpeg';
import foto7 from './images/foto7.jpeg';
import foto8 from './images/foto8.jpeg';
import foto9 from './images/foto9.jpeg';
import foto10 from './images/foto10.jpeg';
import foto11 from './images/foto11.jpeg';
import foto12 from './images/foto12.jpeg';
import foto13 from './images/foto13.jpeg';
import foto14 from './images/foto14.jpeg';
import foto15 from './images/foto15.jpeg';
import foto16 from './images/foto16.jpeg';
import foto17 from './images/foto17.jpeg';
import foto18 from './images/foto18.jpeg';
import foto19 from './images/foto19.jpeg';
import foto20 from './images/foto20.jpeg';
import foto21 from './images/foto21.jpeg';
import foto22 from './images/foto22.jpeg';
import foto23 from './images/foto23.jpeg';
import foto24 from './images/foto24.jpeg';
import foto25 from './images/foto25.jpeg';
import foto26 from './images/foto26.jpeg';
import foto27 from './images/foto27.jpeg';
import foto29 from './images/foto29.jpeg';
import foto30 from './images/foto30.jpeg';
import foto31 from './images/foto31.jpeg';
import foto32 from './images/foto32.jpeg';
import foto33 from './images/foto33.jpeg';
import foto34 from './images/foto34.jpeg';
import foto35 from './images/foto35.jpeg';
import foto36 from './images/foto36.jpeg';
import foto37 from './images/foto37.jpeg';
import foto38 from './images/foto38.jpeg';
import foto39 from './images/foto39.jpeg';
import foto40 from './images/foto40.jpeg';
import foto41 from './images/foto41.jpeg';
import foto42 from './images/foto42.jpeg';
import foto43 from './images/foto43.jpeg';
import foto44 from './images/foto44.jpeg';
import foto45 from './images/foto45.jpeg';
import foto46 from './images/foto46.jpeg';
import foto47 from './images/foto47.jpeg';
import foto48 from './images/foto48.jpeg';
import foto49 from './images/foto49.jpeg';
import foto50 from './images/foto50.jpeg';
import foto51 from './images/foto51.jpeg';
import foto52 from './images/foto52.jpeg';
import foto53 from './images/foto53.jpeg';
import foto54 from './images/foto54.jpeg';
import foto55 from './images/foto55.jpeg';
import foto56 from './images/foto56.jpeg';
import foto57 from './images/foto57.jpeg';
import foto58 from './images/foto58.jpeg';
import foto59 from './images/foto59.jpeg';
import foto60 from './images/foto60.jpeg';
import foto61 from './images/foto61.jpeg';
import foto62 from './images/foto62.jpeg';
import foto63 from './images/foto63.jpeg';
import foto64 from './images/foto64.jpeg';
import foto65 from './images/foto65.jpeg';
import foto66 from './images/foto66.jpeg';
import foto67 from './images/foto67.jpeg';
import foto68 from './images/foto68.jpeg';
import foto69 from './images/foto69.jpeg';
import foto70 from './images/foto70.jpeg';
import foto71 from './images/foto71.jpeg';
import foto72 from './images/foto72.jpeg';
import foto73 from './images/foto73.jpeg';
import foto74 from './images/foto74.jpeg';
import foto75 from './images/foto75.jpeg';
import foto76 from './images/foto76.jpeg';
import foto77 from './images/foto77.jpeg';
import foto78 from './images/foto78.jpeg';
import foto79 from './images/foto79.jpeg';
import foto80 from './images/foto80.jpeg';
import foto81 from './images/foto81.jpeg';
import foto82 from './images/foto82.jpeg';
import foto83 from './images/foto83.jpeg';
import foto84 from './images/foto84.jpeg';
import foto85 from './images/foto85.jpeg';
import foto86 from './images/foto86.jpeg';
import foto87 from './images/foto87.jpeg';
import foto88 from './images/foto88.jpeg';
import foto89 from './images/foto89.jpeg';
import foto90 from './images/foto90.jpeg';
import foto91 from './images/foto91.jpeg';
import foto92 from './images/foto92.jpeg';
import foto93 from './images/foto93.jpeg';
import foto94 from './images/foto94.jpeg';
import foto95 from './images/foto95.jpeg';


function Gallery() {
  // Definir las rutas de las fotos y sus descripciones
  const photos = [
    { src: foto1, description: 'Descripción de la Foto 1' },
    { src: foto2, description: 'Descripción de la Foto 2' },
    { src: foto3, description: 'Descripción de la Foto 3' },
    { src: foto4, description: 'Descripción de la Foto 4' },
    { src: foto5, description: 'Descripción de la Foto 5' },
    { src: foto6, description: 'Descripción de la Foto 6' },
    { src: foto7, description: 'Descripción de la Foto 7' },
    { src: foto8, description: 'Descripción de la Foto 8' },
    { src: foto9, description: 'Descripción de la Foto 9' },
    { src: foto10, description: 'Descripción de la Foto 10' },
    { src: foto11, description: 'Descripción de la Foto 11' },
    { src: foto12, description: 'Descripción de la Foto 12' },
    { src: foto13, description: 'Descripción de la Foto 13' },
    { src: foto14, description: 'Descripción de la Foto 14' },
    { src: foto15, description: 'Descripción de la Foto 15' },
    { src: foto16, description: 'Descripción de la Foto 16' },
    { src: foto17, description: 'Descripción de la Foto 17' },
    { src: foto18, description: 'Descripción de la Foto 18' },
    { src: foto19, description: 'Descripción de la Foto 19' },
    { src: foto20, description: 'Descripción de la Foto 20' },
    { src: foto21, description: 'Descripción de la Foto 21' },
    { src: foto22, description: 'Descripción de la Foto 22' },
    { src: foto23, description: 'Descripción de la Foto 23' },
    { src: foto24, description: 'Descripción de la Foto 24' },
    { src: foto25, description: 'Descripción de la Foto 25' },
    { src: foto26, description: 'Descripción de la Foto 26' },
    { src: foto27, description: 'Descripción de la Foto 27' },
    { src: foto29, description: 'Descripción de la Foto 29' },
    { src: foto30, description: 'Descripción de la Foto 30' },
    { src: foto31, description: 'Descripción de la Foto 31' },
    { src: foto32, description: 'Descripción de la Foto 32' },
    { src: foto33, description: 'Descripción de la Foto 33' },
    { src: foto34, description: 'Descripción de la Foto 34' },
    { src: foto35, description: 'Descripción de la Foto 35' },
    { src: foto36, description: 'Descripción de la Foto 36' },
    { src: foto37, description: 'Descripción de la Foto 37' },
    { src: foto38, description: 'Descripción de la Foto 38' },
    { src: foto39, description: 'Descripción de la Foto 39' },
    { src: foto40, description: 'Descripción de la Foto 40' },
    { src: foto41, description: 'Descripción de la Foto 41' },
    { src: foto42, description: 'Descripción de la Foto 42' },
    { src: foto43, description: 'Descripción de la Foto 43' },
    { src: foto44, description: 'Descripción de la Foto 44' },
    { src: foto45, description: 'Descripción de la Foto 45' },
    { src: foto46, description: 'Descripción de la Foto 46' },
    { src: foto47, description: 'Descripción de la Foto 47' },
    { src: foto48, description: 'Descripción de la Foto 48' },
    { src: foto49, description: 'Descripción de la Foto 49' },
    { src: foto50, description: 'Descripción de la Foto 50' },
    { src: foto51, description: 'Descripción de la Foto 51' },
    { src: foto52, description: 'Descripción de la Foto 52' },
    { src: foto53, description: 'Descripción de la Foto 53' },
    { src: foto54, description: 'Descripción de la Foto 54' },
    { src: foto55, description: 'Descripción de la Foto 55' },
    { src: foto56, description: 'Descripción de la Foto 56' },
    { src: foto57, description: 'Descripción de la Foto 57' },
    { src: foto58, description: 'Descripción de la Foto 58' },
    { src: foto59, description: 'Descripción de la Foto 59' },
    { src: foto60, description: 'Descripción de la Foto 60' },
    { src: foto61, description: 'Descripción de la Foto 61' },
    { src: foto62, description: 'Descripción de la Foto 62' },
    { src: foto63, description: 'Descripción de la Foto 63' },
    { src: foto64, description: 'Descripción de la Foto 64' },
    { src: foto65, description: 'Descripción de la Foto 65' },
    { src: foto66, description: 'Descripción de la Foto 66' },
    { src: foto67, description: 'Descripción de la Foto 67' },
    { src: foto68, description: 'Descripción de la Foto 68' },
    { src: foto69, description: 'Descripción de la Foto 69' },
    { src: foto70, description: 'Descripción de la Foto 70' },
    { src: foto71, description: 'Descripción de la Foto 71' },
    { src: foto72, description: 'Descripción de la Foto 72' },
    { src: foto73, description: 'Descripción de la Foto 73' },
    { src: foto74, description: 'Descripción de la Foto 74' },
    { src: foto75, description: 'Descripción de la Foto 75' },
    { src: foto76, description: 'Descripción de la Foto 76' },
    { src: foto77, description: 'Descripción de la Foto 77' },
    { src: foto78, description: 'Descripción de la Foto 78' },
    { src: foto79, description: 'Descripción de la Foto 79' },
    { src: foto80, description: 'Descripción de la Foto 80' },
    { src: foto81, description: 'Descripción de la Foto 81' },
    { src: foto82, description: 'Descripción de la Foto 82' },
    { src: foto83, description: 'Descripción de la Foto 83' },
    { src: foto84, description: 'Descripción de la Foto 84' },
    { src: foto85, description: 'Descripción de la Foto 85' },
    { src: foto86, description: 'Descripción de la Foto 86' },
    { src: foto87, description: 'Descripción de la Foto 87' },
    { src: foto88, description: 'Descripción de la Foto 88' },
    { src: foto89, description: 'Descripción de la Foto 89' },
    { src: foto90, description: 'Descripción de la Foto 90' },
    { src: foto91, description: 'Descripción de la Foto 91' },
    { src: foto92, description: 'Descripción de la Foto 92' },
    { src: foto93, description: 'Descripción de la Foto 93' },
    { src: foto94, description: 'Descripción de la Foto 94' },
    { src: foto95, description: 'Descripción de la Foto 95' }

  ];

  // Estado para manejar la foto seleccionada
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Manejar el clic en la foto para mostrar la descripción
  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index); // Alternar la selección
  };

  return (
    <div className="gallery">
      <h3>Nuestras fotos</h3>
      <div className="photos">
        {/* Iterar sobre el array de fotos y generar las tarjetas */}
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-container ${selectedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={photo.src} alt={`Foto ${index + 1}`} />
            <div className="photo-overlay">
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;