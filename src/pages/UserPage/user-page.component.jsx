import './user-page.styles.scss'

import Header from '@/components/Header/header.component'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import UserFilter from '@/components/UserPageComponents/UserFilter/user-filter.component'
import UserPagePart from '@/components/UserPageComponents/user-page-part.component'
import Footer from '@/components/Footer/footer.component'

function UserPage() {
  return (
    <div className="user-page">
      <Header />

      <div className="container">
        <UserPagePart />
      </div>

      <Footer />
    </div>
  )
}

export default UserPage
