
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export default function ProductList() {
  // Récupérer dispatch pour envoyer des actions à Redux
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Catalogue</h2>

      {products.map((product) => (
        <div key={product.id} className="ligne">
          <span>
            {product.name}
            <span className="prix"> {product.price} DT</span>
          </span>

          {/* Envoyer le produit au Store Redux */}
          <button
            className="principal"
            onClick={() => dispatch(addItem(product))}
          >
            + Ajouter
          </button>
        </div>
      ))}
    </section>
  );
}
