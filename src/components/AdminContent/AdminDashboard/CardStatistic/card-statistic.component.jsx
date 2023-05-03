import './card-statistic.styles.scss'

import MovingUpIcon from '@mui/icons-material/Moving'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'

function CardStatistic() {
  const cards = [
    {
      id: 1,
      icon: <PeopleAltOutlinedIcon />,
      title: 'Khách hàng mới',
      number: 30000,
      percent: '3.8%',
      line: <MovingUpIcon className="moving-up" />,
    },
    {
      id: 2,
      icon: <AttachMoneyOutlinedIcon />,
      title: 'Doanh thu',
      number: 30000,
      percent: '10.5%',
      line: <MovingUpIcon className="moving-up" />,
    },
    {
      id: 3,
      icon: <Inventory2OutlinedIcon />,
      title: 'Nguồn hàng',
      number: 30000,
      percent: '2.1%',
      line: <TrendingDownIcon className="trending-down" />,
    },
  ]

  return (
    <div className="number-statistic">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="flex">
            <h4 className="card__number">{card.number}</h4>
            <h4 className="card__icon">{card.icon}</h4>
          </div>
          <div className="card__content">
            <h4 className="card__title">{card.title}</h4>
            <div className="flex">
              <h4 className="card__line">{card.line}</h4>
              <h4 className="card__percent">{card.percent}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardStatistic
