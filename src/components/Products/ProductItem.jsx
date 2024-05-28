import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem(props) {
  const {
    id,
    image: img,
    title,
    description: desc,
    price,
    handleDeleteItem,
    setCartItem,
  } = props;

  function addToCart() {
    const product = {
      id,
      img,
      desc,
      price,
    };

    setCartItem((prevCartItems) => [product, ...prevCartItems]);
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={img} />
      </div>
      <div className="product-info">
        <strong className="product-title">{title.slice(0, 10)}...</strong>
        <p className="product-desc">{desc.slice(0, 50)}₺</p>
        <span className="product-price">{price}₺</span>
        <Button
          size="sm"
          type="primary"
          className={"mb-2 mt-1"}
          onClick={addToCart}
        >
          ADD TO CART
        </Button>
        <Button size="sm" type="danger" onClick={() => handleDeleteItem(id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  setCartItem: PropTypes.func,
};

export default ProductItem;
