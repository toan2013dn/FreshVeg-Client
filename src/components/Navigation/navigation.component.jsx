import "./navigation.component.scss";
import { ReactComponent as Shopping } from "@/assets/icons/Shopping-icon.svg";
import { ReactComponent as User } from "@/assets/icons/User.svg";
import { ReactComponent as Wishlist } from "@/assets/icons/Wishlist.svg";
import Badge from '@mui/material/Badge';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-item">
      <Badge badgeContent={4} color="primary">
        <Shopping className="navigation-item--icon" />
       </Badge>
      </div>
      <div className="navigation-item">
      <Badge badgeContent={4} color="primary">
        <Wishlist className="navigation-item--icon" />
       </Badge>
      </div>
      <div className="navigation-item">
        <User className="navigation-item--icon" />
      </div>
    </div>
  );
}

export default Navigation;
