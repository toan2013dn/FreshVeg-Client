import '@/components/Header/header.styles.scss'
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";

import Menu from "../Menu/menu.component";
import Navigation from "../Navigation/navigation.component";
import SearchBar from "../SearchBar/searchbar.component";

const Header = () => {
  return (
    <header className="header">
        <Logo to="/" className='logo' />

        <Menu />

        <SearchBar />

        <Navigation /> 

    </header>
  );
};

export default Header;

