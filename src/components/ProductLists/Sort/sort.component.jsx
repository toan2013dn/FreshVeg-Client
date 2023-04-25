import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import './sort.styles.scss'

import { useProductsContext } from '../../../context/products-list.context'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const selections = {
  lowToHigh: 'Giá từ thấp đến cao',
  highToLow: 'Giá từ cao đến thấp',
  mostSale: 'Bán chạy nhất (TODO)',
  newest: 'Mới nhất (TODO)',
}

function Sort() {
  const { setSort } = useProductsContext()

  const handleOnchange = (e) => {
    let value = e.target.value

    console.log(value)
    switch (value) {
      case 'lowToHigh':
        setSort(() => (a, b) => {
          return a.price - b.price
        })
        break
      case 'highToLow':
        setSort(() => (a, b) => {
          return b.price - a.price
        })
        break
      case 'mostSale':
        break
      case 'newest':
        setSort(() => (a, b) => {
          return b.enterDate - a.price.enterDate
        })
        break
      default:
        break
    }
  }

  return (
    <div className="sort">
      <h4>Sắp xếp theo: </h4>
      <div className="sort-select">
        <FormControl sx={{ m: 1, width: 300, mt: -2.3 }}>
          <Select
            displayEmpty
            defaultValue={'lowToHigh'}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
            onChange={handleOnchange}
          >
            {Object.keys(selections).map((key) => (
              <MenuItem key={key} value={key}>
                {selections[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Sort
