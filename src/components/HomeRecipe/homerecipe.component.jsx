import "./homerecipe.component.scss";
import Recipe from "@/assets/images/Recipe.webp";
import RecipeInfo from "../RecipeInfo/recipeinfo.component";

function HomeRecipe() {
  return (
    <div className="home-recipe container">
      <h2 className="home-recipe--line"></h2>

      <div className="introduction">
        <h2 className="home-recipe--line"></h2>
        <h2 className="home-recipe--title">Công Thức Nổi Bật</h2>
        <h4 className="home-recipe--text">
          Đây là các công thức được xem và mua nhiều nhất trong tuần vừa qua
        </h4>
      </div>

      <div className="recipe">
        <div className="recipe-food">
          <h3 className="recipe-food--text">Công Thức Nấu Ăn</h3>
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
        </div>
        <div className="recipe-drink">
          <h3 className="recipe-drink--text">Công Thức Sinh Tố</h3>
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
          <RecipeInfo image={Recipe} name="Cơm Chiên" hour="1" minute="30" />
        </div>
      </div>

      <div className="button">
        <button className="home-products--button">
          <a to={"/"}>Xem Tất Cả</a>
        </button>
      </div>
    </div>
  );
}

export default HomeRecipe;
