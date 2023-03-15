import './avatar.styles.scss'

function Avatar() {
  const admin = {
    id: 1,
    avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg',
    name: 'Nguyễn Văn A',
  }

  return (
    <div className="avatar" key={admin.id}>
      <div className="avatar-admin">
        <img src={admin.avatar} alt="" />
      </div>
      <div className="avatar-content">
        <h4>{admin.name}</h4>
        <span style={{ color: '#B3B3B3' }}>Admin</span>
      </div>
    </div>
  )
}

export default Avatar
