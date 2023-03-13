import './order-success.styles.scss'

import Header from '@/components/Header/header.component'
import SuccessBill from '@/components/SuccessBill/success-bill.component'
import Footer from '@/components/Footer/footer.component'

function OrderSuccess() {
  return (
    <div className="order-success">
      <div className="order-success--header">
        <Header />
        <div className="line"></div>
      </div>

      <SuccessBill />

      <Footer />
    </div>
  )
}

export default OrderSuccess
