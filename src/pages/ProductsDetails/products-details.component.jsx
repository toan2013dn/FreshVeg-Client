import './products-details.styles.scss'

import { NavLink, useParams } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import { useEffect, useState } from 'react'

import ReactLoading from 'react-loading'
import axios from '@/api/axios'
import Details from '@/components/Details/details.component'
import Footer from '@/components/Footer/footer.component'
import Header from '@/components/Header/header.component'

function ProductsDetails() {
  let { productId } = useParams()

  const [content, setContent] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/product/' + productId)
      .then((res) => {
        setContent(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [productId])

  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <div className="products-details">
          <Header />
          <div className="container">
            <div className="products-details--links">
              <NavLink to="/">Trang chủ</NavLink>
              <Next />
              <NavLink to="/products">Đi Chợ</NavLink>
              <Next />
              <NavLink to="/products-details">{content.productName}</NavLink>
            </div>
            <Details productId={productId} content={content} setContent={setContent} />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default ProductsDetails
