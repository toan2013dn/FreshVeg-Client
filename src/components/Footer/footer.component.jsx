import "./footer.component.scss";
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import SendingBar from "../SendingBar/sendingbar.component";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer-logo">
        <Logo to="/" className="logo" />
        <h4 className="footer-logo--text">
          Chúng tôi cung cấp nguồn thực phẩm sạch, đảm bảo an toàn vệ sinh thực
          phẩm. Chúng tôi hứa slljgpjppjpjpjptlhjthpjthpjthpjthpthptphj c
        </h4>
      </div>

      <div className="footer-contact">
        <h4 className="footer-links--title">Liên Hệ</h4>

        <h4 className="footer-contact--address">
          Địa chỉ: Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng 550000
        </h4>
        <h4 className="footer-contact--phone">Điện thoại: 09249494</h4>
        <h4 className="footer-contact--email">Email: freshveg@gmail.com</h4>
      </div>

      <div className="footer-links">
        <Link>
          <h4 className="footer-links--title">Các Trang Chính</h4>
        </Link>
        <h4 className="footer-links--title"><Link to={"/"}>Trang Chủ</Link></h4>
        <h4 className="footer-links--title"><Link to={"/"}>Đi Chợ</Link></h4>
        <h4 className="footer-links--title"><Link to={"/"}>Công Thức</Link></h4>
        <h4 className="footer-links--title"><Link to={"/"}>Liên Hệ</Link></h4>
      </div>

      <div className="footer-register">
        <h4 className="footer-register--title">Đăng Kí</h4>
        <h4 className="footer-register--text">
          Hãy dăng kí gmail để cập nhật nhanh và sớm nhất các sản phẩm và dịch
          vụ của chúng tôi
        </h4>
        <SendingBar />
      </div>
    </footer>
  );
}

export default Footer;
