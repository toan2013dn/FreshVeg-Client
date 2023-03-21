import './order-success.styles.scss'

import Header from '@/components/Header/header.component'
import SuccessBill from '@/components/SuccessBill/success-bill.component'
import Footer from '@/components/Footer/footer.component'

function OrderSuccess() {
  return (
    <div className="order-success">
      <Header />

      <SuccessBill />

      <Footer />
    </div>
  )
}

export default OrderSuccess
