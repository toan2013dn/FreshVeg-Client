import './payment-method.styles.scss'

import Tick from '@mui/icons-material/TaskAlt'
import COD from '@mui/icons-material/LocalShipping'
import ATM from '@mui/icons-material/LocalAtm'

import { useState } from 'react'

function PaymentMethod() {
  // payment array
  const payments = [
    {
      id: 1,
      name: 'Thanh toán khi nhận hàng',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Thanh toán qua thẻ ATM',
      isDefault: false,
    },
  ]
  const defaultPayment = payments.find((payment) => payment.isDefault)

  const [selectedPayment, setSelectedPayment] = useState(defaultPayment.id)

  const isThumbnailActive = (id) => {
    if (selectedPayment === id || (id === payments[0].id && !selectedPayment)) {
      return 'active'
    }
    return ''
  }

  const handlePaymentClick = (id) => {
    setSelectedPayment(id)
  }

  return (
    <div className="payment-method">
      {payments.map((payment) => {
        return (
          <div
            className={`payment-method--item ${isThumbnailActive(payment.id)}`}
            key={payment.id}
            onClick={() => handlePaymentClick(payment.id)}
          >
            <div className="payment-method--item-context">
              <Tick />
              <h4>{payment.name}</h4>
            </div>
            <div> {payment.id === 1 ? <COD /> : <ATM />}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PaymentMethod
