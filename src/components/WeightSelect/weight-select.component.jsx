import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

function WeightSelect({ weight, setWeight }) {
  const handleChange = (event) => {
    setWeight(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, mt: 1 }}>
        {/* <Select displayEmpty value={0} input={<OutlinedInput />} defaultValue={10}> */}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={weight}
          onChange={handleChange}
        >
          <MenuItem value={100}>100gr</MenuItem>
          <MenuItem value={200}>200gr</MenuItem>
          <MenuItem value={300}>300gr</MenuItem>
          <MenuItem value={400}>400gr</MenuItem>
          <MenuItem value={500}>500gr</MenuItem>
          <MenuItem value={600}>600gr</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default WeightSelect
