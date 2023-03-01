import Category from "./Category/category.component";
import "./filter-panel.component.scss";
import PriceFilter from "./Price/price.component";

function FilterPanel() {
    return (    
        <div className="filter-panel">
            <Category />
            <PriceFilter />
        </div>
      );
}

export default FilterPanel;