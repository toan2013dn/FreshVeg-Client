import "./productinfo.component.scss";
import { ReactComponent as AddToCart } from "@/assets/icons/AddToCart.svg";
import { ReactComponent as Money } from "@/assets/icons/Money.svg";

function ProductInfo(props) {
  return (
    <div className="product-info">
      <img src={props.image} alt="product" className="product-info--image" />
      <h4 className="product-info--name">{props.name}</h4>
      <div className="product-info--flex">
        <h4 className="product-info--price">
          <Money className="product-info--icon" />{props.price} <span>đ</span>
        </h4>
        <AddToCart className="product-info--button" />
      </div>
    </div>
  );
}

export default ProductInfo;
