import "./slider.component.scss";
import { ReactComponent as Recycle } from "@/assets/icons/Recycle.svg";
import { ReactComponent as Arrow } from "@/assets/icons/Arrow.svg";

function Slider() {
  return (
    <div className="slider">
      <div className="slider-content">
        <Recycle className="slider-content--icon" />
        <h2 className="slider-content--title">Healthy Food</h2>
      </div>

      <h4 className="slider-content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nunc est ultricies nunc, vel tincidunt nisl
        lorem eu dolor. Sed euismod, nisl vel tincidunt lacinia, nunc est
        ultricies nunc, vel tincied euismod, nisl vel tincidunt lacinia, nunc
        est ultricies nunc, vel tincied euismod, nisl vel tincidunt lacinia,
        nunc est ultricies nunc, vel tinci
      </h4>

      <div className="slider-radio">
        <input
          type="radio"
          id="option1"
          name="radio-group"
          value="option1"
          checked
        />
        <input type="radio" id="option2" name="radio-group" value="option2" />
        <input type="radio" id="option3" name="radio-group" value="option3" />
      </div>

      {/* Làm răn để css mỗi button mỗi màu */}
      <div className="slider-buttons">
        <button className="slider-buttons--button">
          <a to={"/"}>
            Xem Sản Phẩm
            <Arrow className="slider-buttons--icon" />
          </a>
        </button>
        <button className="slider-buttons--button styles">
          <a to={"/"}>
            Xem Công Thức
            <Arrow className="slider-buttons--icon"  />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Slider;
