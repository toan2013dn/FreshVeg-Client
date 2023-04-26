import './product-banner.styles.scss'

import ProductImage1 from '@/assets/images/vegetable-thumbnail-1.jpg'
import ProductImage2 from '@/assets/images/vegetable-thumbnail-2.jpg'
import ProductImage3 from '@/assets/images/vegetable-thumbnail-3.jpg'
import ProductImage4 from '@/assets/images/vegetable-thumbnail-4.jpg'

function ProductBanner() {
  return (
    <div className="product-banner">
      <div className="product-banner__item1">
        <img src={ProductImage1} alt="Product Banner" />
        <img src={ProductImage2} alt="Product Banner" />
      </div>
      <div className="product-banner__item2">
        <img src={ProductImage3} alt="Product Banner" />
        <img src={ProductImage4} alt="Product Banner" />
      </div>
      <div className="product-banner__content">
        <h3>Rau củ quả sạch tại cửa hàng của chúng tôi</h3>
        <ul>
          <li>Cam kết cung cấp rau củ quả sạch, an toàn cho sức khỏe.</li>
          <li>Cung cấp đa dạng các loại rau củ quả tươi ngon, đảm bảo đủ dinh dưỡng cho cả gia đình.</li>
          <li>Giá cả hợp lý và cạnh tranh so với các cửa hàng khác trên thị trường.</li>
          <li>
            Dịch vụ tận tâm, chu đáo, đặc biệt{' '}
            <span style={{ fontSize: '16px', color: '#4caf50', fontWeight: '700' }}>miễn phí vận chuyển</span>, giao
            hàng tận nơi cho khách hàng.
          </li>
          <li>Chúng tôi luôn đổi trả sản phẩm nếu khách hàng không hài lòng về chất lượng sản phẩm.</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductBanner
