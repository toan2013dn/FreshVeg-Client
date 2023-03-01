import "./price.styles.scss";

function PriceFilter() {
  return (
    <div className="filter-price">
      <div className="filter-price--items">
          <h4>Lọc theo giá sản phẩm</h4>
          <div>

          <input type="number" placeholder="2" />
          <input type="number" placeholder="23" />
          </div>
      </div>
    </div>
  );
}

export default PriceFilter;
