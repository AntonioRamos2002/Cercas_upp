import { useState } from 'react';
import './MallasPage.css';

const suggestions = [
  { id: 1, name: 'Malla Clásica', description: 'Malla de acero galvanizado resistente a la corrosión.', image: '/images/malla-clasica.jpg' },
  { id: 2, name: 'Malla Reforzada', description: 'Malla de alta resistencia para mayor seguridad.', image: '/images/malla-reforzada.jpg' },
  { id: 3, name: 'Malla Decorativa', description: 'Malla con diseño estético para jardines y patios.', image: '/images/malla-decorativa.jpg' },
];

type MetersState = { [key: number]: string };

export default function MallasPage() {
  const [meters, setMeters] = useState<MetersState>({});
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (id: number, value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue >= 0) {
      setMeters((prevState) => ({ ...prevState, [id]: value }));
    }
  };

  const calculatePrice = (id: number) => {
    const metersValue = parseFloat(meters[id]) || 0;
    return metersValue * 300;
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`mallas-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="navbar">
        <div className="logo">MRA</div>
        <nav>
          <a href="#">Productos</a>
          <a href="#">Ubicaciones</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </nav>
        <button onClick={toggleMode} className="toggle-button">{darkMode ? 'Modo Día' : 'Modo Noche'}</button>
      </header>
      <section className="catalogo">
        {suggestions.map((item) => (
          <div key={item.id} className="malla-card">
            <img src={item.image} alt={item.name} className="malla-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <input
              type="number"
              step="0.01"
              min="0"
              value={meters[item.id] || ''}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              className="malla-input"
            />
            <p>Precio: {calculatePrice(item.id)} pesos</p>
          </div>
        ))}
      </section>
    </div>
  );
}
