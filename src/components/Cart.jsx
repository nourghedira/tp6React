
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../redux/cartSlice';

export default function Cart() {

  // Étape 4 : récupérer les données du Store Redux
  const { items, totalPrice } = useSelector(
    (state) => state.cart
  );

  // Étape 6 : envoyer des actions au Store
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Mon panier</h2>

      {items.length === 0 && (
        <p className="vide">Le panier est vide.</p>
      )}

      {items.map((item) => (
        <div key={item.id} className="ligne">

          <span>
            {item.name}
            <span className="prix"> x {item.quantity}</span>
          </span>

          <span>
            {/* Diminuer la quantité */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              -
            </button>

            {/* Augmenter la quantité */}
            <button onClick={() => dispatch(addItem(item))}>
              +
            </button>
          </span>

        </div>
      ))}

      <p className="total">Total : {totalPrice} DT</p>

      {/* Vider le panier */}
      <button onClick={() => dispatch(clearCart())}>
        Vider le panier
      </button>

    </section>
  );
}
