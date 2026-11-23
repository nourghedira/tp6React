
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Étape 4 : récupérer le nombre de produits depuis Redux
  const totalCount = useSelector(
    (state) => state.cart.totalCount
  );

  return (
    <nav className="navbar">
      <h1>TechStore</h1>

      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
      </button>

      <span className="badge">
        Panier : {totalCount}
      </span>
    </nav>
  );
}
