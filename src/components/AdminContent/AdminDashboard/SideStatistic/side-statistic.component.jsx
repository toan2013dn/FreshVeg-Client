import './side-statistic.styles.scss'

function SideStatistic() {
  const customers = [
    {
      id: 1,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Nguyễn Văn A',

      orders: '10 đơn hàng',
    },
    {
      id: 2,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Nguyễn Văn A',

      orders: '10 đơn hàng',
    },
    {
      id: 3,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Nguyễn Văn A',

      orders: '10 đơn hàng',
    },
  ]

  const products = [
    {
      id: 4,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
    {
      id: 5,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
    {
      id: 6,
      avatar:
        'https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670191226_34_Hinh-Anh-Meme-Cheems-Tau-He-Cuc-Manh-Cuoi-Sai.jpg',
      name: 'Quả chuối',

      orders: '144+ lượt mua',
    },
  ]
  return (
    <div className="side-statistic">
      <div className="side-statistic--customers">
        <h3>Thống kê khách hàng</h3>
        {customers.map((customer, index) => (
          <div className="side-statistic--customers--item" key={index}>
            <div className="side-statistic--customers--item--avatar">
              <img src={customer.avatar} alt="" />
            </div>
            <h4 className="side-statistic--customers--item--name">{customer.name}</h4>
            <h4 className="side-statistic--customers--item--rank">{customer.rank}</h4>
            <h4 className="side-statistic--customers--item--orders">{customer.orders}</h4>
          </div>
        ))}
        <button className="btn">Xem thêm</button>
      </div>

      <div className="side-statistic--products">
        <h3>Thống kê sản phẩm</h3>
        {products.map((customer, index) => (
          <div className="side-statistic--products--item" key={index}>
            <div className="side-statistic--products--item--avatar">
              <img src={customer.avatar} alt="" />
            </div>
            <h4 className="side-statistic--products--item--name">{customer.name}</h4>
            <h4 className="side-statistic--products--item--rank">{customer.rank}</h4>
            <h4 className="side-statistic--products--item--orders">{customer.orders}</h4>
          </div>
        ))}
        <button className="btn">Xem thêm</button>
      </div>
    </div>
  )
}

export default SideStatistic
