import './product-content.styles.scss'

import { ReactComponent as Cart } from '@/assets/icons/Cart.svg'
import { ReactComponent as Wishlist } from '@/assets/icons/Wishlist.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

import { useProductStore } from '@/store'
import axios from '@/api/axios'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import React from 'react'
import SocialMediaSharing from '../SocialMediaSharing/socialmedia-sharing.component'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
}

const names = ['100gr', '200gr', '300gr', '400gr', '500gr']

function ProductContent({ productId }) {
  const [content, setContent] = useState()

  useEffect(() => {
    axios
      .get('/product/' + productId)
      .then((res) => {
        setContent(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [products, setProducts] = useProductStore((state) => [state.products, state.setProducts])

  console.log(products)

  const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <div className="product-content">
      <div className="product-content--item" key={content?.productId}>
        <div className="product-content--item--name">
          <h3>{content?.productName}</h3>
          <div className="line"></div>
        </div>
        <div className="product-content--item--price">
          <h3>{content?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</h3>
          <div className="line"></div>
        </div>
        <div className="product-content--item--weight">
          <h4>Khối lượng</h4>
          <div className="product-content--item--weight--select">
            <FormControl sx={{ m: 1, width: 250, mt: 1 }}>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>100gr</em>
                  }
                  return selected.join(', ')
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="product-content--item--button">
          <div className="line"></div>
          <button
            className="button"
            onClick={() => {
              window.location.href = '/'
            }}
          >
            <Cart />
            <div>Thêm Vào Giỏ Hàng</div>
          </button>
        </div>
        <div className="product-content--item--sharing">
          <SocialMediaSharing key={content?.productId} />
        </div>
      </div>
    </div>
  )
}

export default ProductContent
