import './order-success.styles.scss'

import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import Header from '@/components/Header/header.component'
import SuccessBill from '@/components/SuccessBill/success-bill.component'
import Footer from '@/components/Footer/footer.component'

function OrderSuccess() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <div className="order-success">
          <Header />

          <SuccessBill />

          <Footer />
        </div>
      )}
    </>
  )
}

export default OrderSuccess
