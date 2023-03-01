import "./productinfo.component.scss";
import { ReactComponent as AddToCart } from "@/assets/icons/AddToCart.svg";

function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <img src={product.image} alt="product" className="product-info--image" />
      <div className="product-info--flex">
        <div>
          <h4 className="product-info--name">{product.name}</h4>
          <h4 className="product-info--price">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
          </h4>
        </div>
        <AddToCart className="product-info--button" />
      </div>
    </div>
  );
}

export default ProductInfo;
