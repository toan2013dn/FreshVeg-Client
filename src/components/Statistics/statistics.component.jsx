import "./statistics.component.scss";
import { ReactComponent as Connection } from "@/assets/icons/Connection.svg";
import { ReactComponent as ShakeHand } from "@/assets/icons/Shakehand.svg";
import { ReactComponent as RecipeBook } from "@/assets/icons/RecipeBook.svg";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-connection">
        <Connection className="statistics-connection--icon" />
        <h2 className="statistics-connection--number">200+</h2>
        <h2 className="statistics-connection--text">Lượt truy cập mỗi ngày</h2>
      </div>

      <div className="statistics-partner">
        <ShakeHand className="statistics-partner--icon" />
        <h2 className="statistics-partner--number">50+</h2>
        <h2 className="statistics-partner--text">Nhà cung cấp uy tín</h2>
      </div>

      <div className="statistics-resource">
        <RecipeBook className="statistics-resource--icon" />
        <h2 className="statistics-resource--number">150+</h2>
        <h2 className="statistics-resource--text">Sản phẩm sạch</h2>
      </div>
    </div>
  );
}

export default Statistics;
