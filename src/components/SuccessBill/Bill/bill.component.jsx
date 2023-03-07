import './bill.styles.scss'

function Bill() {
  return (
    <div className="bill">
      <div className="bill-info">
        <div className="bill-info--left">
          <div className="quantity">
            <h4>Nước Cam Chanh</h4>
            <h4>x1</h4>
          </div>
          <h4>Phí Vận Chuyển</h4>
          <div className="line"></div>
          <h4>THANH TOÁN </h4>
          <div className="line"></div>
        </div>
        <div className="bill-info--right">
          <h4>50.000đ</h4>
          <h4>20.000đ</h4>
          <div className="line"></div>
          <h4>70.000đ</h4>
          <div className="line"></div>
        </div>
      </div>

      <div className="bill-details">
        <h4 style={{ fontWeight: '700' }}>CHI TIẾT</h4>
        <div className="bill-details--address">
          <h4 style={{ width: '70%', textAlign: 'left' }}>Địa chỉ giao hàng:</h4>
          <h4 style={{ width: '100%', textAlign: 'left' }}>120 Bùi Hữu Nghĩa, Phước Mỹ, Sơn Trà, Đà Nẵng</h4>
        </div>
        <div className="bill-details--phone">
          <h4 style={{ width: '70%', textAlign: 'left' }}>SĐT người nhận:</h4>
          <h4 style={{ width: '100%', textAlign: 'left' }}> 0123456789</h4>
        </div>
      </div>
    </div>
  )
}

export default Bill
