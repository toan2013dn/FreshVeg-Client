import "./productinfo.component.scss";
import { ReactComponent as AddToCart } from "@/assets/icons/AddToCart.svg";

function ProductInfo(props) {
  return (
    <div className="product-info">
      <img src={props.image} alt="product" className="product-info--image" />
      <div className="product-info--flex">
        <div>
          <h4 className="product-info--name">{props.name}</h4>
          <h4 className="product-info--price">
            
            {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
          </h4>
        </div>
        <AddToCart className="product-info--button" />
      </div>
    </div>
  );
}

export default ProductInfo;
