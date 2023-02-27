import "@/components/Menu/menu.component.scss";
import { ReactComponent as Dropdown } from "@/assets/icons/dropdown.svg";

function Menu() {
  const items = [
    {
      id: 1,
      link: "/",
      title: "Trang Chủ",
    },
    {
      id: 2,
      link: "/",
      title: "Đi Chợ",
    },
    {
      id: 3,
      link: "/",
      title: "Công Thức",
    },
    {
      id: 4,
      link: "/",
      title: "Liên Hệ",
    },
  ];

  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.id} className="menu--item">
          <a to={item.link} className="menu--link">
            {item.title}
            {item.id !== 1 && <Dropdown className="menu-icon--dropdown" />}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
