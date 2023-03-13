import './user-address.styles.scss'

function UserAddress() {
  const users = [
    {
      id: 1,
      name: 'Trần Ngọc Toàn',
      phone: '0934795670',
      address: '120 Bùi Hữu Nghĩa, quận Sơn Trà, tp Đà Nẵng',
    },
    {
      id: 2,
      name: 'Trần Ngọc Toàn',
      phone: '0934795670',
      address:
        '120 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, quận Sơn Trà, tp Đà Nẵng',
    },
  ]

  return (
    <div className="user-address">
      <div className="user-address--header">
        <div className="flex">
          <div>
            <h3>Địa Chỉ Của Tôi</h3>
            <h4>Quản lí thông tin địa chỉ để việc giao hàng thuận lợi</h4>
          </div>
          <button className="button-save">Thêm Địa Chỉ Mới </button>
        </div>
        <div className="line"></div>
      </div>

      {users.map((user) => (
        <div className="user-address--content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="user-address--content-left">
              <h4>{user.name}</h4>
              <h4>{user.phone}</h4>
              <h4>{user.address}</h4>
            </div>
            <div className="user-address--content-right">
              <button>Cập nhật</button>
              <button>Xóa</button>
            </div>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  )
}

export default UserAddress
