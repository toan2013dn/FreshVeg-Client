import HomeProducts from "../HomeProducts/homeproducts.component";
import "./product-lists.styles.scss";
import Sort from "./Sort/sort.component";

function ProductLists() {
    return ( 
        <div className="product-lists">
            <Sort/>
        </div>
     );
}

export default ProductLists;