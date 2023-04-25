import { Slider } from '@mui/material'
import { useState } from 'react'

import { useEffect } from 'react'
import { useProductsContext } from '../../../context/products-list.context'
import './price.styles.scss'

function PriceFilter() {
  const [value, setValue] = useState([0, 100000])
  const {setFilters } = useProductsContext()

  useEffect(() => {
    console.log(value)
    setFilters('price', (product) => value[0] <= product.price && value[1] >= product.price)
  }, [value])

  const handleChange = (event, newValue) => {
    if (Array.isArray(newValue)) {
      // Make sure that newValue is an array of two numbers
      newValue = [
        typeof newValue[0] === 'number' ? newValue[0] : value[0],
        typeof newValue[1] === 'number' ? newValue[1] : value[1],
      ]
      setValue(newValue)
    }
  }

  const handleChangeMin = (event) => {
    // if input value is NaN or an empty string, set value to 0
    const newValue = event.target.value === '' || isNaN(event.target.value) ? 0 : parseInt(event.target.value)

    // remove leading zero if the value is a single digit
    const sanitizedValue = newValue === 0 ? 0 : parseInt(newValue.toString().replace(/^0+/, ''))

    setValue([sanitizedValue, value[1]])
  }

  const handleChangeMax = (event) => {
    // if input value is NaN or an empty string, set value to 0
    const newValue = event.target.value === '' || isNaN(event.target.value) ? 0 : parseInt(event.target.value)

    // remove leading zero if the value is a single dig
    const sanitizedValue = newValue === 0 ? 0 : parseInt(newValue.toString().replace(/^0+/, ''))

    setValue([value[0], sanitizedValue])
  }

  return (
    <div className="filter-price">
      <div className="filter-price--items">
        <h4>Lọc theo giá sản phẩm</h4>
        <div className="slider-wrapper">
          <Slider
            getAriaLabel={() => 'Price range'}
            step={5000}
            min={0}
            max={500000}
            defaultValue={[15, 250]}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => {
              return value.toLocaleString('vn-VI', {
                style: 'currency',
                currency: 'VND',
              })
            }}
            disableSwap
          />
        </div>
        <div className="filter-price--items--content">
          <input type="number" value={value[0]} onChange={handleChangeMin} />
          <input type="number" placeholder={250} value={value[1]} onChange={handleChangeMax} />
        </div>
      </div>
    </div>
  )
}

export default PriceFilter
