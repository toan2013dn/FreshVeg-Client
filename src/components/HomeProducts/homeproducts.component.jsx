import "./homeproducts.component.scss";
import ProductInfo from "../ProductInfo/productinfo.component";
import Products from "@/assets/images/Products.webp";

function HomeProducts() {
  return (
    <div className="home-products container">
      <div className="introduction">
        <h2 className="home-products--line"></h2>
        <h2 className="home-products--title">Sản Phẩm Nổi Bật</h2>
        <h4 className="home-products--text">
          Đây là các sản phẩm được xem và mua nhiều nhất trong tuần vừa qua
        </h4>
      </div>

      <div className="product">
        <ProductInfo image={Products} name="Hạt chi đó" price={50000} />
        <ProductInfo image={Products} name="Hạt chi đó" price="50.000" />
        <ProductInfo image={Products} name="Hạt chi đó" price="50.000" />
        <ProductInfo image={Products} name="Hạt chi đó" price="50.000" />
        <ProductInfo image={Products} name="Hạt chi đó" price="50.000" />
        <ProductInfo image={Products} name="Hạt chi đó" price="50.000" />
      </div>

      <div className="button">
        <button className="home-products--button">
          <a to={"/"}>Xem Tất Cả</a>
        </button>
      </div>
    </div>
  );
}

export default HomeProducts;
