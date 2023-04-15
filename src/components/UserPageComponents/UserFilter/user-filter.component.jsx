import './user-filter.styles.scss'

import PersonIcon from '@mui/icons-material/PersonOutlineOutlined'
import BillIcon from '@mui/icons-material/ReceiptLongOutlined'
import RewardIcon from '@mui/icons-material/GradeOutlined'
import EditIcon from '@mui/icons-material/Edit'

import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useUserStore } from '@/store'

function UserFilter({ setTab }) {
  const [activeOption, setActiveOption] = useState(() => {
    const storedOption = localStorage.getItem('activeOption')
    return storedOption ?? 'profile'
  })
  const [userInfo] = useUserStore((state) => [state.userInfo])

  useEffect(() => {
    localStorage.setItem('activeOption', activeOption)
  }, [activeOption])

  const handleOptionClick = (option) => {
    setActiveOption(option)
    setTab(option)
  }
  return (
    <div className="user-filter">
      <div className="user-filter--display">
        <div className="image">
          <img src={userInfo?.image == undefined ? userInfo?.avatar : userInfo?.image} alt="anh" />
        </div>
        <div className="flex">
          <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userInfo?.name}</h4>
          <div className="text">
            <EditIcon /> <h4>Sửa hồ sơ</h4>
          </div>
        </div>
      </div>
      <div className="user-filter--option">
        <div className="user-filter--option-account">
          <div className="styles">
            <PersonIcon />
            <h4>Tài Khoản</h4>
          </div>
          <div className="column">
            <span
              className={` ${activeOption === 'profile' ? 'active' : ''}`}
              onClick={() => handleOptionClick('profile')}
            >
              Hồ Sơ
            </span>
            {/* <span className={`${activeOption === 'bank' ? 'active' : ''}`} onClick={() => handleOptionClick('bank')}>
              Ngân Hàng
            </span> */}
            <span
              className={`${activeOption === 'address' ? 'active' : ''}`}
              onClick={() => handleOptionClick('address')}
            >
              Địa Chỉ
            </span>
            <span
              className={`${activeOption === 'password' ? 'active' : ''}`}
              onClick={() => handleOptionClick('password')}
            >
              Đổi Mật Khẩu
            </span>
          </div>
        </div>

        <div
          className={`user-filter--option-bill styles ${activeOption === 'bill' ? 'active' : ''}`}
          onClick={() => handleOptionClick('bill')}
        >
          <BillIcon />
          <h4>Đơn Hàng</h4>
        </div>

        {/* <div
          className={`user-filter--option-reward styles ${activeOption === 'reward' ? 'active' : ''}`}
          onClick={() => handleOptionClick('reward')}
        >
          <RewardIcon />
          <h4>Điểm Thưởng</h4>
        </div> */}
      </div>
    </div>
  )
}

export default UserFilter
