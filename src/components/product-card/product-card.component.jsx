import './product-card.style.scss';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.content';
import { useContext } from 'react';
const ProductCard = ({ product }) => {
  const { addItemToCart, setCartCount } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
