import "./recipeinfo.component.scss";
import { ReactComponent as MealNumber } from "@/assets/icons/MealNumber.svg";

function RecipeInfo(props) {
  return (
    <div className="recipe-info">
      <img src={props.image} alt="recipe" className="recipe-info--image" />
      <div className="column">
        <h4 className="recipe-info--name">{props.name}</h4>
        <div className="flex">
          <div className="recipe-info--meal">
            <h4 className="recipe-info--text">Số Lượng</h4>
            <MealNumber className="recipe-info--icon" />
          </div>
          <div className="recipe-info--time">
            <h4 className="recipe-info--text">Thời Gian</h4>
            <h4 className="recipe-info--text">
              {props.hour}giờ {props.minute}phút
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;
