import './backtotop-button.styles.scss'

import React, { useState } from 'react'

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div>
      {showButton && (
        <button className="back-to-top-button" onClick={handleClick}>
          <ArrowUpwardOutlinedIcon />
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
