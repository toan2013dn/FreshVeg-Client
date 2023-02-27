import "./navigation.component.scss";
import { ReactComponent as Shopping } from "@/assets/icons/Shopping-icon.svg";
import { ReactComponent as User } from "@/assets/icons/User.svg";
import { ReactComponent as Wishlist } from "@/assets/icons/Wishlist.svg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-item">
        <Shopping className="navigation-item--icon" />
        <div className="navigation-item--text">2</div>
      </div>
      <div className="navigation-item">
        <Wishlist className="navigation-item--icon" />
        <div className="navigation-item--text">2</div>
      </div>
      <div className="navigation-item">
        <User className="navigation-item--icon" />
      </div>
    </div>
  );
}

export default Navigation;
