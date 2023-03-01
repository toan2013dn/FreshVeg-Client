import "./categories.page.scss";
import Header from "@/components/Header/header.component";
import CategoriesBG from "@/assets/images/CategoriesBG.webp";
import Footer from "@/components/Footer/footer.component";

function Categories() {
    return ( 
        <div className="categories">
            <Header />
            <div className="categories-background">
                <img src={CategoriesBG} alt="Categories Background" />
                <div className="categories-background--content">
                    <h3>Đi Chợ</h3>
                    <h4>Rau, củ, quả sạch đến từ các nông trại</h4>
                </div>
                </div>
            <div className="categories-products">
                <div className="categories-products--filter"></div>
                <div className="categories-products--list"></div>
            </div>
        <Footer />
        </div>
     );
}

export default Categories;