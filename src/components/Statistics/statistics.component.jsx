import "./statistics.component.scss";
import { ReactComponent as Connection } from "@/assets/icons/Connection.svg";
import { ReactComponent as ShakeHand } from "@/assets/icons/ShakeHand.svg";
import { ReactComponent as RecipeBook } from "@/assets/icons/RecipeBook.svg";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-connection flex">
        <Connection className="statistics-connection--icon " />
        <h2 className="statistics-connection--number">200+</h2>
        <h3 className="statistics-connection--text text">Lượt truy cập mỗi ngày</h3>
      </div>

      <div className="statistics-partner flex">
        <ShakeHand className="statistics-partner--icon " />
        <h2 className="statistics-partner--number">50+</h2>
        <h3 className="statistics-partner--text text">Nhà cung cấp uy tín</h3>
      </div>
      <div className="statistics-resource flex">
        <RecipeBook className="statistics-resource--icon " />
        <h2 className="statistics-resource--number">150+</h2>
        <h3 className="statistics-resource--text text">Sản phẩm sạch</h3>
      </div>
    </div>
  );
}

export default Statistics;
