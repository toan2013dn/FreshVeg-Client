import './weight-select.styles.scss'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'

function WeightSelect({ weight, setWeight }) {
  const handleDecrease = () => {
    const newWeight = Math.max(weight - 100, 0)
    setWeight(newWeight)
  }

  const handleIncrease = () => {
    const newWeight = weight + 100
    setWeight(newWeight)
  }

  const handleInputChange = (event) => {
    const newWeight = parseInt(event.target.value) || 0
    setWeight(newWeight)
  }

  return (
    <div className="weight-select">
      <button className="decrease-btn" onClick={handleDecrease}>
        <RemoveOutlinedIcon />
      </button>
      <div className="weight">
        <input type="text" value={`${weight}g`} onChange={handleInputChange} />
      </div>
      <button className="increase-btn" onClick={handleIncrease}>
        <AddOutlinedIcon />
      </button>
    </div>
  )
}

export default WeightSelect
