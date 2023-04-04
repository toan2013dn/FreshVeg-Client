import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelectedWeight } from '@/store'
import { useProductCart } from '@/store'
import { useState } from 'react'

function WeightSelect({ productId }) {
  // const [selectedWeight, setSelectedWeight] = useSelectedWeight((state) => [
  //   state.selectedWeight,
  //   state.setSelectedWeight,
  // ])

  const [selectedWeight, setSelectedWeight] = useSelectedWeight((state) => [
    state.selectedWeight,
    state.setSelectedWeight,
  ])

  const [productCart, setProductCart] = useProductCart((state) => [state.productCart, state.setProductCart])

  const handleChange = (event) => {
    setSelectedWeight(event.target.value)

    // const newProductCart = productCart.map((item) => {
    //   if (item.id === productId) {
    //     console.log(event.target.value)
    //     item.weight = event.target.value
    //   }

    //   return item
    // })

    // setProductCart(newProductCart)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, mt: 1 }}>
        {/* <Select displayEmpty value={0} input={<OutlinedInput />} defaultValue={10}> */}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedWeight}
          onChange={handleChange}
        >
          <MenuItem value={1}>100gr</MenuItem>
          <MenuItem value={2}>200gr</MenuItem>
          <MenuItem value={3}>300gr</MenuItem>
          <MenuItem value={4}>400gr</MenuItem>
          <MenuItem value={5}>500gr</MenuItem>
          <MenuItem value={6}>600gr</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default WeightSelect
