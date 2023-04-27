import './filter-panel.component.scss'

import Category from './Category/category.component'
import PriceFilter from './Price/price.component'
import FreshVegBanner from '@/assets/images/freshveg-banner.jpg'
import FreshVegBanner2 from '@/assets/images/freshveg-banner2.jpg'
import FreshVegBanner3 from '@/assets/images/freshveg-banner3.jpg'

function FilterPanel() {
  return (
    <>
      <div className="filter-panel">
        <Category />
        <PriceFilter />
      </div>
      <div className="banner">
        <img src={FreshVegBanner} alt="freshveg-banner" />
        <img src={FreshVegBanner2} alt="freshveg-banner2" />
        <img src={FreshVegBanner3} alt="freshveg-banner3" />
      </div>
    </>
  )
}

export default FilterPanel
