import './confirm-info.styles.scss'

import { Link } from 'react-router-dom'
import { display } from '@mui/system'
import { useState } from 'react'

import Location from '@mui/icons-material/LocationOn'
import Payment from '@mui/icons-material/AccountBalance'
import Note from '@mui/icons-material/BorderColor'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import AddressConfirm from './AddressConfirm/address-confirm.component'
import PaymentMethod from './PaymentMethod/payment-method.component'
import FinalOrder from './FinalOrder/final-order.component'
import AddNewAddress from '../AddNewAddress/add-new-address.component'

function ConfirmInfo() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [forceUser, setForceUser] = useState(0)

  return (
    <div style={{ display: 'flex' }}>
      <div className="confirm-info left">
        <div className="confirm-info--address">
          <div className="confirm-info--address-title styles">
            <Location />
            <h4>Địa Chỉ Nhận Hàng</h4>
          </div>

          <AddressConfirm forceUser={forceUser} />

          <button className="home-products--button" onClick={() => setIsOpenModal(true)}>
            <Link to={''} style={{ fontSize: '20px' }}>
              Thêm Địa Chỉ Mới
            </Link>
          </button>
          <AddNewAddress isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} setForceUser={setForceUser} />
        </div>

        <div className="line"></div>

        <div className="confirm-info--payment">
          <div className="confirm-info--payment-title styles">
            <Payment />
            <h4>Phương Thức Thanh Toán</h4>
          </div>

          <PaymentMethod />
        </div>

        <div className="line"></div>

        <div className="confirm-info--note">
          <div className="confirm-info--note-title styles">
            <Note />
            <h4>Ghi Chú</h4>
          </div>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { mt: 4, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-multiline-flexible" label="Để lại ghi chú cho đơn hàng của bạn" multiline />
          </Box>
        </div>
      </div>
      <div className="confirm-info right">
        <FinalOrder />
      </div>
    </div>
  )
}

export default ConfirmInfo
